// src/app/api/lead/submit/route.js
import { NextResponse } from 'next/server';

// Mailchimp embed form URL
const MAILCHIMP_FORM_URL = 'https://xbd.us11.list-manage.com/subscribe/post';
const MAILCHIMP_U = '279a02443a57a9821b4e42c23';
const MAILCHIMP_ID = '345dda8b10';
const MAILCHIMP_F_ID = '00792fe1f0';

export async function POST(request) {
  try {
    const formData = await request.json();
    
    const { 
      email, 
      name,
      message,
      organization,
      designation,
      country
    } = formData;

    // Validate email
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    // Prepare form data for Mailchimp
    const mailchimpData = new URLSearchParams({
      u: MAILCHIMP_U,
      id: MAILCHIMP_ID,
      f_id: MAILCHIMP_F_ID,
      EMAIL: email,
      FNAME: name || '',
      ORG: organization || '',
      DES: designation || '',
      COUNTRY: country || '',
      MESSAGE: message || '',
      // Honeypot field (leave empty to prove we're not a bot)
      [`b_${MAILCHIMP_U}_${MAILCHIMP_ID}`]: '',
    });

    console.log('Submitting to Mailchimp:', { email, name, organization });

    // Submit to Mailchimp
    const response = await fetch(MAILCHIMP_FORM_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: mailchimpData.toString(),
    });

    // Mailchimp returns HTML even on success, so we check if the response is ok
    const responseText = await response.text();
    
    // Check if the response contains success indicators
    if (responseText.includes('Almost finished') || 
        responseText.includes('Thank you for subscribing') ||
        responseText.includes('already subscribed')) {
      
      console.log('Mailchimp submission successful');
      
      return NextResponse.json(
        { 
          success: true, 
          message: 'Thank you! We will contact you soon.',
        },
        { status: 200 }
      );
    }

    // Check for common error messages
    if (responseText.includes('already subscribed')) {
      return NextResponse.json(
        { 
          success: true, 
          message: 'You are already subscribed. We\'ll be in touch soon!',
        },
        { status: 200 }
      );
    }

    if (responseText.includes('invalid') || responseText.includes('error')) {
      console.error('Mailchimp error response:', responseText.substring(0, 500));
      return NextResponse.json(
        { error: 'Please check your email address and try again.' },
        { status: 400 }
      );
    }

    // If we get here, assume success (Mailchimp's response format can vary)
    console.log('Mailchimp response received, assuming success');
    
    return NextResponse.json(
      { 
        success: true, 
        message: 'Thank you! We will contact you soon.',
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Mailchimp submission error:', error);

    return NextResponse.json(
      { 
        error: 'Something went wrong. Please try again later.',
        details: error.message 
      },
      { status: 500 }
    );
  }
}