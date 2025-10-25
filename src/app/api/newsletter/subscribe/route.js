import { NextResponse } from 'next/server';
import mailchimp from '@mailchimp/mailchimp_marketing';

// Check if Mailchimp is configured
const isMailchimpConfigured = process.env.MAILCHIMP_API_KEY && 
                              process.env.MAILCHIMP_API_SERVER && 
                              process.env.MAILCHIMP_AUDIENCE_ID;

console.log('Mailchimp configuration check:', {
  apiKey: process.env.MAILCHIMP_API_KEY ? 'Set' : 'Not set',
  server: process.env.MAILCHIMP_API_SERVER,
  audienceId: process.env.MAILCHIMP_AUDIENCE_ID,
  isConfigured: isMailchimpConfigured
});

if (isMailchimpConfigured) {
  try {
    mailchimp.setConfig({
      apiKey: process.env.MAILCHIMP_API_KEY,
      server: process.env.MAILCHIMP_API_SERVER,
    });
    console.log('Mailchimp config set successfully');
  } catch (error) {
    console.error('Error setting Mailchimp config:', error);
  }
}

export async function POST(request) {
  try {
    console.log('Newsletter API called');
    console.log('Environment check:', {
      hasApiKey: !!process.env.MAILCHIMP_API_KEY,
      hasServer: !!process.env.MAILCHIMP_API_SERVER,
      hasAudienceId: !!process.env.MAILCHIMP_AUDIENCE_ID,
      isConfigured: isMailchimpConfigured
    });

    const { email } = await request.json();
    console.log('Received email:', email);

    // Validate email
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    // If Mailchimp is not configured, return success (for development)
    if (!isMailchimpConfigured) {
      console.log('Newsletter subscription (development mode):', email);
      return NextResponse.json(
        { 
          success: true, 
          message: 'Successfully subscribed to newsletter!',
          email: email
        },
        { status: 200 }
      );
    }

    // Add subscriber to Mailchimp
    console.log('Adding subscriber to Mailchimp:', {
      audienceId: process.env.MAILCHIMP_AUDIENCE_ID,
      email: email
    });
    
    const response = await mailchimp.lists.addListMember(
      process.env.MAILCHIMP_AUDIENCE_ID,
      {
        email_address: email,
        status: 'subscribed',
        // Optional: Add tags or merge fields
        // tags: ['newsletter'],
        // merge_fields: {
        //   FNAME: firstName,
        //   LNAME: lastName
        // }
      }
    );
    
    console.log('Mailchimp response:', response);

    return NextResponse.json(
      { 
        success: true, 
        message: 'Successfully subscribed to newsletter!',
        data: response 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Newsletter subscription error:', error);
    
    // Handle specific Mailchimp errors
    if (error.response?.body?.title === 'Member Exists') {
      return NextResponse.json(
        { error: 'This email is already subscribed!' },
        { status: 400 }
      );
    }

    // Handle invalid API key or server
    if (error.response?.body?.title === 'Invalid API Key') {
      console.error('Invalid Mailchimp API Key');
      return NextResponse.json(
        { error: 'Newsletter service configuration error. Please try again later.' },
        { status: 500 }
      );
    }

    // Handle invalid audience ID
    if (error.response?.body?.title === 'Invalid Resource') {
      console.error('Invalid Mailchimp Audience ID');
      return NextResponse.json(
        { error: 'Newsletter service configuration error. Please try again later.' },
        { status: 500 }
      );
    }

    console.error('Mailchimp Error Details:', {
      status: error.response?.status,
      title: error.response?.body?.title,
      detail: error.response?.body?.detail,
      message: error.message
    });

    return NextResponse.json(
      { 
        error: 'Something went wrong. Please try again later.',
        details: error.response?.body?.detail || error.message 
      },
      { status: 500 }
    );
  }
}