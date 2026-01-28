# Push Code to GitHub

Your code is ready to push, but you need to authenticate with GitHub first.

## Quick Method: Use GitHub CLI

Run this command to authenticate and push:

```bash
gh auth login
```

Follow the prompts, then:

```bash
git push -u origin main
```

## Alternative: Use Personal Access Token

1. Go to https://github.com/settings/tokens
2. Click "Generate new token" → "Generate new token (classic)"
3. Give it a name: "The Light Project"
4. Select scopes: `repo` (full control of private repositories)
5. Click "Generate token"
6. Copy the token (you won't see it again!)

Then push with:

```bash
git push -u origin main
```

When prompted for password, paste your token (not your GitHub password).

## Or: Push Manually from GitHub Desktop

If you have GitHub Desktop installed:

1. Open GitHub Desktop
2. File → Add Local Repository
3. Choose: `/Users/leonidasdimokas/Projects/Personal/thelightproject.art`
4. Click "Publish repository"
5. Select account: misterlemo
6. Click "Publish"

## After Pushing

Once the code is on GitHub, we'll deploy to Vercel:

1. Go to https://vercel.com
2. Sign in with GitHub
3. Import your repository: `misterlemo/thelightproject.art`
4. Click Deploy
5. Your site will be live in ~2 minutes!

---

**Let me know when you've pushed the code and I'll help you deploy to Vercel!**
