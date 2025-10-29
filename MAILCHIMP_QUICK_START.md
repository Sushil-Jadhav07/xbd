# Mailchimp Lead Form - Quick Start

## ✅ Ready to Use!

Your Lead Form Modal is now integrated with Mailchimp using JSONP (client-side submission). **No configuration needed** - it works out of the box!

## How to Use

1. **Start your dev server:**
   ```bash
   npm run dev
   ```

2. **Open your site and trigger the Lead Form Modal** (e.g., click "Book a Call")

3. **Fill out the form** with:
   - Name
   - Email (required)
   - Organization
   - Designation
   - Country
   - Message

4. **Submit** - the data goes directly to your Mailchimp list!

## Where Data Goes

All form submissions are sent to your Mailchimp audience:
- **List ID:** `345dda8b10`
- **Server:** `us11` (xbd.us11.list-manage.com)

## Check Your Mailchimp

After submitting a test form:
1. Log in to Mailchimp
2. Go to **Audience** → **All contacts**
3. You should see the new contact with all the information filled in

## Form Fields in Mailchimp

| Your Form Field | Mailchimp Field |
|----------------|-----------------|
| Name | FNAME |
| Email | EMAIL |
| Organization | ORG |
| Designation | DES |
| Country | COUNTRY |
| Message | MESSAGE |

## Need More Details?

See `MAILCHIMP_LEAD_SETUP.md` for complete documentation.

---

**That's it!** 🎉 Your lead form is now capturing contacts in Mailchimp automatically.

