import { NextResponse } from 'next/server';
import mailchimp from '@mailchimp/mailchimp_marketing';

export async function GET() {
  try {
    console.log('Testing Mailchimp connection...');
    
    // Check environment variables
    const config = {
      apiKey: process.env.MAILCHIMP_API_KEY,
      server: process.env.MAILCHIMP_API_SERVER,
      audienceId: process.env.MAILCHIMP_AUDIENCE_ID
    };
    
    console.log('Environment variables:', {
      hasApiKey: !!config.apiKey,
      server: config.server,
      hasAudienceId: !!config.audienceId
    });
    
    if (!config.apiKey || !config.server) {
      return NextResponse.json({
        success: false,
        error: 'Missing Mailchimp configuration',
        config
      });
    }
    
    // Set up Mailchimp - try different server formats
    let serverToUse = config.server;
    
    // If server is us11, try us1 instead
    if (config.server === 'us11') {
      serverToUse = 'us1';
      console.log('Trying server format us1 instead of us11');
    }
    
    mailchimp.setConfig({
      apiKey: config.apiKey,
      server: serverToUse,
    });
    
    console.log('Using server:', serverToUse);
    
    // Test the connection
    const ping = await mailchimp.ping.get();
    
    return NextResponse.json({
      success: true,
      message: 'Mailchimp connection successful',
      ping,
      config: {
        server: config.server,
        audienceId: config.audienceId
      }
    });
    
  } catch (error) {
    console.error('Mailchimp test error:', error);
    
    return NextResponse.json({
      success: false,
      error: error.message,
      details: error.response?.body || error
    }, { status: 500 });
  }
}
