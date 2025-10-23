// src/app/api/lead/submit/route.js
import { NextResponse } from 'next/server';
import mailchimp from '@mailchimp/mailchimp_marketing';

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_API_SERVER,
});

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

    // Prepare merge fields (only include fields that have values)
    const mergeFields = {};
    if (name) {
      // Split name into first and last name
      const nameParts = name.trim().split(' ');
      mergeFields.FNAME = nameParts[0] || '';
      if (nameParts.length > 1) {
        mergeFields.LNAME = nameParts.slice(1).join(' ');
      }
    }
    if (message) mergeFields.MESSAGE = message;
    if (organization) mergeFields.MMERGE2 = organization; // Update with your actual merge tag
    if (designation) mergeFields.MMERGE8 = designation;   // Update with your actual merge tag
    if (country) mergeFields.MMERGE9 = country;           // Update with your actual merge tag

    console.log('Submitting lead to Mailchimp:', { email, mergeFields });

    // Try to add the subscriber
    try {
      const response = await mailchimp.lists.addListMember(
        process.env.MAILCHIMP_AUDIENCE_ID,
        {
          email_address: email,
          status: 'subscribed',
          merge_fields: mergeFields,
          tags: ['lead-form'], // Tag to identify lead form submissions
        }
      );

      console.log('Mailchimp success:', response);

      return NextResponse.json(
        { 
          success: true, 
          message: 'Thank you! We will contact you soon.',
          data: response 
        },
        { status: 200 }
      );

    } catch (addError) {
      // If member already exists, update their information instead
      if (addError.response?.body?.title === 'Member Exists') {
        console.log('Member exists, updating instead...');

        // Get the subscriber hash (MD5 of lowercase email)
        const crypto = require('crypto');
        const subscriberHash = crypto
          .createHash('md5')
          .update(email.toLowerCase())
          .digest('hex');

        // Update the existing member
        const updateResponse = await mailchimp.lists.updateListMember(
          process.env.MAILCHIMP_AUDIENCE_ID,
          subscriberHash,
          {
            merge_fields: mergeFields,
            // Also add the lead-form tag
          }
        );

        // Add tag separately (tags need to be added via a different endpoint)
        await mailchimp.lists.updateListMemberTags(
          process.env.MAILCHIMP_AUDIENCE_ID,
          subscriberHash,
          {
            tags: [{ name: 'lead-form', status: 'active' }]
          }
        );

        console.log('Mailchimp update success:', updateResponse);

        return NextResponse.json(
          { 
            success: true, 
            message: 'Your information has been updated!',
            data: updateResponse 
          },
          { status: 200 }
        );
      }

      // If it's a different error, throw it to be caught by outer catch
      throw addError;
    }

  } catch (error) {
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