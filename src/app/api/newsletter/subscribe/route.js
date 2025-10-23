import { NextResponse } from 'next/server';
import mailchimp from '@mailchimp/mailchimp_marketing';

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_API_SERVER,
});

export async function POST(request) {
  try {
    const { email } = await request.json();

    // Validate email
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    // Add subscriber to Mailchimp
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

    return NextResponse.json(
      { 
        success: true, 
        message: 'Successfully subscribed to newsletter!',
        data: response 
      },
      { status: 200 }
    );

  } catch (error) {
    // Handle specific Mailchimp errors
    if (error.response?.body?.title === 'Member Exists') {
      return NextResponse.json(
        { error: 'This email is already subscribed!' },
        { status: 400 }
      );
    }

    console.error('Mailchimp Error:', error.response?.body || error);

    return NextResponse.json(
      { 
        error: 'Something went wrong. Please try again later.',
        details: error.response?.body?.detail || error.message 
      },
      { status: 500 }
    );
  }
}