# Deployment Guide - The Light Project

## Current Status

✅ Git repository initialized
✅ Code committed locally
✅ Remote configured: https://github.com/misterlemo/thelightproject.art.git

## Deployment Steps

### 1. Create GitHub Repository (In Progress)

Go to: https://github.com/new

Settings:
- **Name:** thelightproject.art
- **Description:** Contemporary Greek Art Portfolio - Dance of the Shadows
- **Visibility:** Public
- **DO NOT** initialize with README, .gitignore, or license

### 2. Push to GitHub

Once the repository is created, run:

```bash
git push -u origin main
```

This will push all your code to GitHub.

### 3. Deploy to Vercel

**Option A: Automatic (Recommended)**

1. Go to https://vercel.com
2. Sign in with GitHub
3. Click "Add New Project"
4. Import `misterlemo/thelightproject.art`
5. Vercel will auto-detect Next.js settings
6. Click "Deploy"
7. Done! Your site will be live in ~2 minutes

**Option B: CLI Deployment**

```bash
npx vercel --prod
```

Follow the prompts to link your GitHub account.

### 4. Custom Domain Setup (Optional)

To use **thelightproject.art** domain:

1. In Vercel dashboard, go to your project
2. Click "Settings" → "Domains"
3. Add domain: `thelightproject.art`
4. Follow DNS configuration instructions
5. Add these DNS records at your domain registrar:
   - Type: A, Name: @, Value: 76.76.21.21
   - Type: CNAME, Name: www, Value: cname.vercel-dns.com

## Environment Variables

If you need to add environment variables (like Formspree ID):

1. Go to Vercel project settings
2. Click "Environment Variables"
3. Add: `NEXT_PUBLIC_FORMSPREE_ID` = your Formspree form ID
4. Redeploy

## Post-Deployment Checklist

After deployment:

- [ ] Visit the live URL and test all sections
- [ ] Test navigation (smooth scroll)
- [ ] Test portfolio lightbox
- [ ] Test contact form (after adding Formspree ID)
- [ ] Test on mobile devices
- [ ] Check loading speed (should be fast!)
- [ ] Verify SEO meta tags (view page source)
- [ ] Test Instagram link

## Updating the Site

To update the site after deployment:

1. Make changes locally
2. Commit: `git add . && git commit -m "Your update message"`
3. Push: `git push`
4. Vercel will automatically redeploy (takes ~2 minutes)

## Adding Images After Deployment

1. Add images to `public/images/` folders locally
2. Commit and push to GitHub
3. Vercel will automatically redeploy with the new images

## Troubleshooting

**Build fails?**
- Check the build logs in Vercel dashboard
- Ensure all dependencies are in package.json
- Verify Next.js version compatibility

**Images not showing?**
- Ensure images are in `public/images/` folders
- Check file names match exactly (case-sensitive)
- Clear browser cache

**Contact form not working?**
- Add Formspree Form ID in `components/Contact.tsx`
- Redeploy after updating

## Support

- Vercel Docs: https://vercel.com/docs
- Next.js Docs: https://nextjs.org/docs
- GitHub Issues: Create issues in your repository

---

**Your Repository:** https://github.com/misterlemo/thelightproject.art
**Vercel Dashboard:** https://vercel.com/dashboard (after deployment)
