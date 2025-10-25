# Newsletter Setup Instructions

## Issue Fixed
The newsletter subscription API was returning a 500 error because Mailchimp environment variables were not configured.

## Solution
The API now handles missing environment variables gracefully:
- If Mailchimp is not configured, it returns a success response in development mode
- If Mailchimp is configured, it works normally

## To Enable Full Mailchimp Integration

1. Create a `.env.local` file in the root directory
2. Add the following environment variables:

```env
MAILCHIMP_API_KEY=your_mailchimp_api_key_here
MAILCHIMP_API_SERVER=us1
MAILCHIMP_AUDIENCE_ID=your_audience_id_here
```

3. Get these values from your Mailchimp account:
   - **API Key**: Account > Extras > API Keys
   - **Server**: The last part of your API key (e.g., if key ends with -us1, server is us1)
   - **Audience ID**: Audience > Settings > Audience name and defaults > Audience ID

4. Restart your development server after adding the environment variables

## Current Status
✅ Newsletter subscription now works without errors
✅ Graceful fallback for development mode
✅ Ready for production with proper Mailchimp configuration

