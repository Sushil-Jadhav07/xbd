# Mailchimp Lead Form Integration Setup

This document explains how the Mailchimp integration works for the Lead Form Modal.

## Overview

The Lead Form Modal (`/src/components/common/LeadFormModal.js`) integrates with Mailchimp using the embed form URL to automatically add subscribers when users submit the form. This approach requires **no API keys or environment variables** - it works out of the box!

## Form Fields Mapping

The form fields are mapped to Mailchimp merge fields as follows:

| Form Field | Mailchimp Field | Description |
|------------|----------------|-------------|
| email | EMAIL | Email address (required) |
| name | FNAME | Full name |
| organization | ORG | Organization name |
| designation | DES | Job designation/title |
| country | COUNTRY | Country |
| message | MESSAGE | User's message |

## How It Works

The integration uses Mailchimp's JSONP endpoint directly from the client-side, which means:
- ✅ **No API keys required**
- ✅ **No environment variables needed**
- ✅ **No CORS issues** (uses JSONP technique)
- ✅ **Works immediately without configuration**
- ✅ **Direct submission to Mailchimp**

The form submits data using JSONP to:
```
https://xbd.us11.list-manage.com/subscribe/post-json
```

With the following parameters:
- `u`: User ID (`279a02443a57a9821b4e42c23`)
- `id`: List ID (`345dda8b10`)

These values are extracted from your Mailchimp embed form and are in the component code for reliability.

## Implementation Details

The integration uses JSONP (JSON with Padding) technique in the React component:

1. **Client-Side Submission**: Form data is submitted directly from the browser to Mailchimp
2. **JSONP Technique**: Bypasses CORS restrictions by dynamically creating a `<script>` tag
3. **Dynamic Callbacks**: Each submission creates a unique callback function
4. **Validation**: All fields are validated before submission
5. **Error Handling**: Gracefully handles errors, timeouts, and duplicate subscriptions
6. **User Feedback**: Shows success/error messages in real-time
7. **Auto-cleanup**: Removes callback functions and script tags after completion

## Testing

To test the integration:

1. Run the development server: `npm run dev`
2. Open any page with the Lead Form Modal (e.g., clicking a "Book a Call" button)
3. Fill out and submit the form with test data
4. Check your Mailchimp audience to verify the contact was added
5. Try submitting the same email again to test duplicate handling

## Error Handling

The form includes comprehensive error handling:
- Network errors are caught and displayed to the user
- Invalid email addresses are detected and rejected
- Mailchimp responses are parsed for success/error indicators
- Duplicate subscriptions are handled gracefully
- Form validation ensures all required fields are filled

## Anti-Spam Protection

The integration includes Mailchimp's built-in honeypot field:
- The field `b_279a02443a57a9821b4e42c23_345dda8b10` is included but left empty
- Bots that auto-fill all fields will be blocked by Mailchimp
- Legitimate users won't see or interact with this field

## Notes

- **No dependencies on external packages** - uses native browser JavaScript
- **No API keys needed** - works with public Mailchimp JSONP endpoint
- **Client-side submission** - data goes directly from browser to Mailchimp
- **No server-side proxy needed** - the `/api/lead/submit` route is not used
- Contacts are subscribed directly to your Mailchimp list
- The form automatically closes after successful submission (2-second delay)
- Handles duplicate subscriptions gracefully (treats "already subscribed" as success)
- All form submissions are stored in your Mailchimp audience with the provided merge fields
- Timeout protection: Requests timeout after 10 seconds to prevent hanging

## Updating the Mailchimp Form

If you need to update the Mailchimp form URL or list ID in the future:

1. Get a new embed code from Mailchimp
2. Extract the values from the form action URL:
   ```
   https://xbd.us11.list-manage.com/subscribe/post?u=USER_ID&id=LIST_ID&f_id=FORM_ID
   ```
3. Update the constants in the `submitToMailchimp` function in `/src/components/common/LeadFormModal.js`:
   - `u`: The user/account ID
   - `id`: The list/audience ID
   - Honeypot field name: `b_USER_ID_LIST_ID`

