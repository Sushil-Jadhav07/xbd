import { NextResponse } from 'next/server';

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const url = searchParams.get('url');

    if (!url) {
      return NextResponse.json(
        { error: 'URL parameter is required' },
        { status: 400 }
      );
    }

    // Validate that it's a LinkedIn URL
    if (!url.includes('linkedin.com')) {
      return NextResponse.json(
        { error: 'Invalid LinkedIn URL' },
        { status: 400 }
      );
    }

    // Try multiple methods to fetch the thumbnail
    
    // Method 1: Try direct fetch with better headers
    try {
      const response = await fetch(url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
          'Accept-Language': 'en-US,en;q=0.9',
          'Accept-Encoding': 'gzip, deflate, br',
          'Connection': 'keep-alive',
          'Upgrade-Insecure-Requests': '1',
        },
        redirect: 'follow',
      });

      if (response.ok) {
        const html = await response.text();
        
        // Extract Open Graph image with multiple regex patterns
        const patterns = [
          /<meta\s+property=["']og:image["']\s+content=["']([^"']+)["']/i,
          /<meta\s+property=["']og:image:secure_url["']\s+content=["']([^"']+)["']/i,
          /<meta\s+name=["']twitter:image["']\s+content=["']([^"']+)["']/i,
          /<meta\s+name=["']image["']\s+content=["']([^"']+)["']/i,
          /property=["']og:image["']\s+content=["']([^"']+)["']/i,
        ];

        for (const pattern of patterns) {
          const match = html.match(pattern);
          if (match && match[1]) {
            let imageUrl = match[1];
            // Clean up the URL
            imageUrl = imageUrl.replace(/&amp;/g, '&');
            return NextResponse.json({
              imageUrl: imageUrl,
              success: true
            });
          }
        }
      }
    } catch (directFetchError) {
      console.log('Direct fetch failed, trying proxy method...', directFetchError.message);
    }

    // Method 2: Try using a public Open Graph API service
    try {
      // Using linkpreview.net (free tier available)
      const previewUrl = `https://api.linkpreview.net/?key=${process.env.LINKPREVIEW_API_KEY || '5b54e80a65c889d331b777c0'}&q=${encodeURIComponent(url)}`;
      
      const previewResponse = await fetch(previewUrl);
      if (previewResponse.ok) {
        const previewData = await previewResponse.json();
        if (previewData.image) {
          return NextResponse.json({
            imageUrl: previewData.image,
            success: true
          });
        }
      }
    } catch (previewError) {
      console.log('Link preview service failed:', previewError.message);
    }

    // Method 2b: Try using iframely (public endpoint)
    try {
      const iframelyUrl = `https://iframe.ly/api/iframely?url=${encodeURIComponent(url)}&api_key=${process.env.IFRAMELY_API_KEY || ''}`;
      const iframelyResponse = await fetch(iframelyUrl);
      if (iframelyResponse.ok) {
        const iframelyData = await iframelyResponse.json();
        if (iframelyData?.links?.thumbnail?.[0]?.href) {
          return NextResponse.json({
            imageUrl: iframelyData.links.thumbnail[0].href,
            success: true
          });
        }
      }
    } catch (iframelyError) {
      console.log('Iframely service failed:', iframelyError.message);
    }

    // Method 3: Try opengraph.io (if API key is available)
    if (process.env.OPENGRAPH_API_KEY) {
      try {
        const ogResponse = await fetch(`https://opengraph.io/api/1.1/site/${encodeURIComponent(url)}`, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.OPENGRAPH_API_KEY}`
          }
        });
        
        if (ogResponse.ok) {
          const ogData = await ogResponse.json();
          if (ogData?.hybridGraph?.image || ogData?.openGraph?.image) {
            return NextResponse.json({
              imageUrl: ogData.hybridGraph?.image || ogData.openGraph?.image,
              success: true
            });
          }
        }
      } catch (ogError) {
        console.log('OpenGraph.io service failed:', ogError.message);
      }
    }

    // If all methods fail, return null
    return NextResponse.json({
      imageUrl: null,
      success: false,
      message: 'Could not fetch thumbnail. Please add thumbnailUrl manually in the data.'
    });

  } catch (error) {
    console.error('LinkedIn thumbnail API error:', error);
    return NextResponse.json(
      { 
        error: 'Internal server error',
        details: error.message,
        imageUrl: null
      },
      { status: 500 }
    );
  }
}
