# Email Setup for Contact Form

The contact form is configured to send emails to **thelightproject.art@gmail.com** using Formspree.

## Setup Instructions

### Step 1: Create Formspree Account

1. Go to [https://formspree.io](https://formspree.io)
2. Sign up with your email (use thelightproject.art@gmail.com)
3. Verify your email address

### Step 2: Create a New Form

1. Click "New Form" in your Formspree dashboard
2. Name it: "The Light Project Contact Form"
3. Copy the Form ID (looks like: `xyzabc123`)

### Step 3: Update the Website

Open `components/Contact.tsx` and replace `YOUR_FORM_ID` on line 19 with your actual Form ID:

```typescript
const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
```

Change to:

```typescript
const response = await fetch("https://formspree.io/f/xyzabc123", {  // Your actual ID
```

### Step 4: Test the Form

1. Restart the development server: `npm run dev`
2. Go to the Contact section
3. Fill out and submit the form
4. Check your email at thelightproject.art@gmail.com

## Email Configuration

The form sends emails with:
- **To:** thelightproject.art@gmail.com (configured in Formspree)
- **Reply-To:** The visitor's email address
- **Subject:** "New inquiry from [Name] - The Light Project"
- **Body:** Includes name, email, and message

## Formspree Features (Free Tier)

- ✅ 50 submissions per month
- ✅ Email notifications
- ✅ Spam filtering
- ✅ File uploads (if needed later)
- ✅ Custom thank you page

## Alternative: Netlify Forms

If you deploy to Netlify, you can use Netlify Forms instead:

1. Add `netlify` attribute to the form in `Contact.tsx`
2. Add a hidden input: `<input type="hidden" name="form-name" value="contact" />`
3. Netlify will handle email delivery automatically

## Troubleshooting

**Form not sending?**
- Check that you replaced `YOUR_FORM_ID` with your actual Formspree ID
- Verify your Formspree account is active
- Check browser console for errors

**Not receiving emails?**
- Check spam folder
- Verify email address in Formspree dashboard
- Test with Formspree's test mode first

**Rate limiting?**
- Free tier: 50 submissions/month
- Upgrade to paid plan for unlimited submissions
