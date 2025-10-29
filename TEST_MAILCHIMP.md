# How to Test Mailchimp Integration

## Quick Test (5 minutes)

### Step 1: Start the Server
```bash
cd /Users/aniketjha/Desktop/work/clients/xbd/xbd
npm run dev
```

### Step 2: Open Your Browser
Go to: `http://localhost:3000`

### Step 3: Open Browser DevTools
Press `F12` or right-click → Inspect → Go to **Console** tab

### Step 4: Trigger the Lead Form
Click any button that opens the Lead Form Modal (e.g., "Book a Call", "Contact Us", etc.)

### Step 5: Fill Out the Form
Enter the following test data:

```
Name: John Doe
Email: john.doe@example.com (use a real email to test confirmation)
Organization: Test Company
Designation: CEO
Country: United States
Message: Testing the Mailchimp integration
```

### Step 6: Submit and Watch
Click **Submit** and observe:

✅ **In the form**:
- Button shows "Submitting..."
- After ~1-2 seconds: Success message appears
- Form fields clear automatically
- Modal closes after 2 seconds

✅ **In DevTools Console**:
- Should see: "Submitting to Mailchimp: {email: 'john.doe@example.com', ...}"
- No errors in red

✅ **In DevTools Network tab**:
- Look for a request to `xbd.us11.list-manage.com`
- Should show status: completed successfully

### Step 7: Verify in Mailchimp
1. Log in to your Mailchimp account at https://mailchimp.com
2. Go to **Audience** → **All contacts**
3. Search for the email you just submitted
4. Verify all fields are populated:
   - First Name: John Doe
   - Email: john.doe@example.com
   - Organization: Test Company
   - Designation: CEO
   - Country: United States
   - Message: Testing the Mailchimp integration

## Visual Confirmation

When it works, you should see:

```
┌─────────────────────────────────────┐
│  Book a Strategy Call          ✕    │
├─────────────────────────────────────┤
│                                     │
│  [Success message in green box]     │
│  Thank you! We will contact you     │
│  soon.                              │
│                                     │
│  Name: [cleared]                    │
│  Email: [cleared]                   │
│  ...                                │
│                                     │
│  [Submit button]                    │
└─────────────────────────────────────┘

→ Modal closes automatically after 2s
```

## Testing Edge Cases

### Test 1: Duplicate Email
Submit the same email twice. Both should succeed with the success message.

### Test 2: Invalid Email
Try: `notanemail` → Should show validation error

### Test 3: Empty Fields
Leave some fields empty → Should show: "Please fill in all fields."

### Test 4: Special Characters
Try:
- Name: José García
- Organization: Company & Co.
- Message: Testing with "quotes" and 'apostrophes'

All should work fine!

## Expected Results

✅ **Success Case**: 
- Green success message
- Form clears
- Modal closes
- Contact appears in Mailchimp

❌ **If it fails**:
- Check console for red errors
- Verify internet connection
- Check Mailchimp credentials in the code

## Debugging

If something doesn't work:

1. **Open DevTools Console** (F12)
2. Look for errors in red
3. Check the Network tab for failed requests
4. Take a screenshot and share it

## Contact Appears in Mailchimp Like This:

```
Email Address: john.doe@example.com
First Name: John Doe
Organization: Test Company
Designation: CEO
Country: United States
Message: Testing the Mailchimp integration
Status: Subscribed
Date Added: [Today's date]
```

---

**That's it!** If you see the success message and the contact in Mailchimp, the integration is working perfectly! 🎉



