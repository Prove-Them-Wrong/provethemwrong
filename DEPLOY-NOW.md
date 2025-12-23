# 🚀 DEPLOY IN 5 MINUTES

## Domain: provethemwrong.now
## Status: READY TO LAUNCH

---

## FASTEST PATH: Vercel Drag-and-Drop

### Step 1: Go to Vercel (30 seconds)
1. Open: **https://vercel.com**
2. Sign in (or create free account with GitHub/Email)
3. Click **"Add New..."** → **"Project"**

### Step 2: Upload Files (1 minute)
1. Scroll down to **"Import Third-Party Git Repository"** section
2. OR look for **drag-and-drop zone**
3. **Drag entire `ptw-site` folder** onto the page
4. Wait for upload to complete

### Step 3: Deploy (30 seconds)
1. Click **"Deploy"**
2. Wait ~60 seconds
3. You'll get a URL like: `ptw-site-xxxx.vercel.app`
4. **Click it to verify site works!**

### Step 4: Add Custom Domain (2 minutes)
1. In Vercel dashboard, go to **Settings** → **Domains**
2. Click **"Add"**
3. Enter: `provethemwrong.now`
4. Vercel shows DNS instructions

### Step 5: Update Porkbun DNS (1 minute)
1. Open: **https://porkbun.com**
2. Go to: **Domains** → `provethemwrong.now` → **DNS**
3. **DELETE existing A/CNAME records**
4. **ADD these records:**

| Type | Host | Value |
|------|------|-------|
| A | @ | 76.76.21.21 |
| CNAME | www | cname.vercel-dns.com |

5. Click **Save**

### Step 6: Wait & Verify (5-15 minutes)
1. Back in Vercel, domain shows ✓ when ready
2. Visit: **https://provethemwrong.now**
3. Should see your site with green padlock 🔒

---

## IF DNS TAKES TOO LONG (Alternative: Use Vercel Nameservers)

Instead of A/CNAME records, use Vercel's nameservers directly:

1. In Porkbun → Domain → **Nameservers**
2. Change to:
```
ns1.vercel-dns.com
ns2.vercel-dns.com
```
3. This gives Vercel full control (simpler but takes longer to propagate)

---

## POST-LAUNCH CHECKLIST

- [ ] Site loads at https://provethemwrong.now
- [ ] HTTPS works (padlock icon)
- [ ] Test contact form (should submit to HubSpot)
- [ ] Replace `G-XXXXXXXXXX` with real GA4 ID in index.html
- [ ] Submit sitemap to Google Search Console

---

## FILES IN THIS BUNDLE

| File | Purpose |
|------|---------|
| index.html | Complete website |
| robots.txt | SEO crawling rules |
| sitemap.xml | Search engine sitemap |
| vercel.json | Security headers + routing |

---

## SUPPORT

**Having trouble?**
- Vercel docs: https://vercel.com/docs
- Porkbun DNS: https://kb.porkbun.com/article/63-how-to-manage-dns
- Email: hello@provethemwrong.now

**GO LIVE NOW** 🔥
