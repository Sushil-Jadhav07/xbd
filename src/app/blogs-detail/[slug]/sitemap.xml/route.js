import { getBlogBySlug } from '@/data/blogsData'

export async function GET(request, { params }) {
  try {
    const { slug } = await params
    const blog = getBlogBySlug(slug)

    if (!blog) {
      return new Response('Blog not found', { status: 404 })
    }

    const baseUrl = 'https://xbd.co.in'
    const url = `${baseUrl}/blogs-detail/${slug}`
    
    // Use current date or parse publishedOn if available
    const lastModified = new Date().toISOString()

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${url}</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>`

    return new Response(xml, {
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, max-age=3600, s-maxage=3600',
      },
    })
  } catch (error) {
    console.error('Sitemap generation error:', error)
    return new Response('Internal Server Error', { status: 500 })
  }
}
