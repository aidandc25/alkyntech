# Manual Setup Tasks - AlkynTech

This document lists everything you need to do manually to complete the site setup.

---

## 🎯 **Priority Tasks** (Do These When Ready)

### 1. **Google Analytics 4** (5 minutes)
**Why:** Track visitors, conversions, and measure marketing ROI
**When:** Before launching or starting marketing
**Required:** Cookie consent banner (see #2)

#### Steps:
1. Go to [analytics.google.com](https://analytics.google.com)
2. Click "Admin" → "+ Create Property"
3. Name it "AlkynTech"
4. Get your **Measurement ID** (looks like `G-XXXXXXXXXX`)
5. Open `app/layout.tsx` and:
   - Uncomment line 6: `import CookieConsent from '@/components/shared/CookieConsent'`
   - Uncomment line 68: `<CookieConsent />`
   - Add this import at top: `import GoogleAnalytics from '@/components/seo/GoogleAnalytics'`
   - Add in `<head>` section: `<GoogleAnalytics measurementId="G-XXXXXXXXXX" />`

**Full example in `app/layout.tsx`:**
```tsx
// At the top
import GoogleAnalytics from '@/components/seo/GoogleAnalytics'
import CookieConsent from '@/components/shared/CookieConsent'

// Inside <head>
<head>
  <StructuredData data={organizationSchema} />
  <GoogleAnalytics measurementId="G-XXXXXXXXXX" /> {/* Replace with your ID */}
</head>

// Inside <body>
<CookieConsent />
```

---

### 2. **Cookie Consent Banner** (Already Built - Just Activate)
**Why:** Legal requirement for EU visitors when using analytics/tracking
**When:** Before adding Google Analytics or any tracking cookies
**Status:** Built and ready, currently disabled

#### What It Does:
- Shows a premium cookie banner to visitors
- Users can Accept or Decline cookies
- Only loads Google Analytics if user accepts
- GDPR/CCPA compliant
- Saves choice in localStorage

#### To Enable:
Just uncomment the 2 lines in `app/layout.tsx`:
- Line 6: Cookie import
- Line 68: Cookie component

**Note:** The banner is currently hidden because you don't have analytics installed yet. No point showing cookie consent if there are no cookies!

---

### 3. **OG Images for Social Sharing** (30-60 minutes)
**Why:** Professional appearance when sharing links on social media
**When:** Before sharing site on LinkedIn, Twitter, Facebook
**Impact:** 5-10× more clicks on social shares

#### Images Needed (1200x630px):
1. **Homepage** → `/public/og-default.png`
2. **Services** → `/public/og-services.png`
3. **Work** → `/public/og-work.png`
4. **Contact** → `/public/og-contact.png`

#### Tools:
- **Canva** (easiest): canva.com → Search "Open Graph" templates
- **Figma** (professional): figma.com
- **Online Tools**: [canva.com/create/og-images](https://www.canva.com/create/og-images/)

#### Design Guidelines:
- Size: 1200x630px (exact)
- Keep text 200px from edges (safe zone)
- Use your brand colors (primary, secondary, accent)
- Large readable text (60px+ for title)
- Include logo somewhere
- Dark background (matches your brand)

#### Suggested Content:

**Homepage (og-default.png):**
```
Title: "AlkynTech"
Subtitle: "Premium Web Development & Automation"
Background: Dark gradient (purple → blue)
Logo: Bottom right corner
```

**Services (og-services.png):**
```
Title: "Our Services"
Subtitle: "Web Development & Automation Solutions"
Icon: 🌐 or ⚡
```

**Work (og-work.png):**
```
Title: "Our Work"
Subtitle: "Projects & Case Studies"
Visual: Laptop mockup or code screenshot
```

**Contact (og-contact.png):**
```
Title: "Let's Work Together"
Subtitle: "Get in touch to start your project"
CTA: "Contact Us →"
```

#### After Creating:
1. Export as PNG
2. Optimize at [tinypng.com](https://tinypng.com) or [squoosh.app](https://squoosh.app)
3. Save to `/public/` folder with exact names above
4. The site already references these paths - they'll work automatically!

#### Test Your Images:
- Share link on LinkedIn/Twitter to preview
- Use [opengraph.xyz](https://www.opengraph.xyz/) to test before sharing

---

### 4. **Google Search Console** (15 minutes)
**Why:** Monitor how Google sees your site, submit sitemap, see keywords
**When:** After deploying to production (alkyntech.com)

#### Steps:
1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Click "Add Property" → Enter `https://alkyntech.com`
3. Choose "HTML tag" verification method
4. Copy the meta tag
5. Add to `app/layout.tsx` in `<head>`:
   ```tsx
   <meta name="google-site-verification" content="YOUR_CODE_HERE" />
   ```
6. Deploy and click "Verify"
7. Go to "Sitemaps" → Add: `https://alkyntech.com/sitemap.xml`

---

## 📊 **What Each Thing Does**

| Feature | Purpose | Required? | When |
|---------|---------|-----------|------|
| **Google Analytics** | Track visitors, conversions, traffic sources | Highly Recommended | Before marketing |
| **Cookie Banner** | Legal compliance (EU law) | Required with GA4 | With analytics |
| **OG Images** | Professional social sharing | Recommended | Before social posts |
| **Search Console** | Monitor Google performance | Recommended | After launch |

---

## 🚫 **What You DON'T Need Right Now**

These are built but disabled:
- ✅ Cookie consent banner (hidden until GA4 added)
- ✅ Google Analytics component (ready for your ID)

Why? No point showing cookie banner if you're not using cookies yet!

---

## ✅ **What's Already Done & Working**

No action needed - these are live:
- ✅ robots.txt (tells Google how to crawl)
- ✅ sitemap.xml (lists all pages for Google)
- ✅ Schema.org markup (rich snippets in search)
- ✅ Meta tags (titles, descriptions)
- ✅ Privacy Policy + Terms of Service
- ✅ Contact form with consent checkbox
- ✅ Footer legal links

---

## 🎯 **Recommended Setup Order**

### Before Launch:
1. ✅ Deploy site (Vercel/Netlify)
2. Create OG images (nice to have)

### Week 1 After Launch:
1. Set up Google Analytics
2. Enable cookie banner
3. Set up Google Search Console

### Week 2:
1. Monitor analytics
2. Check Search Console for errors
3. Test OG images on social

---

## 📚 **Detailed Guide**

For step-by-step instructions with screenshots and troubleshooting, see:
**`SEO_SETUP_GUIDE.md`** in the root directory

---

## 🆘 **Quick Reference**

**To Enable Cookie Banner:**
```tsx
// app/layout.tsx - Uncomment these lines:
import CookieConsent from '@/components/shared/CookieConsent' // Line 6
<CookieConsent /> // Line 68
```

**To Add Google Analytics:**
```tsx
// app/layout.tsx - Add this:
import GoogleAnalytics from '@/components/seo/GoogleAnalytics'
<GoogleAnalytics measurementId="G-XXXXXXXXXX" />
```

**Files You'll Edit:**
- `app/layout.tsx` - To enable analytics & cookies
- `/public/` folder - To add OG images

---

## ✅ **Current Status**

| Task | Status | Notes |
|------|--------|-------|
| Legal Pages | ✅ DONE | Privacy + Terms live |
| SEO Foundation | ✅ DONE | robots.txt + sitemap + schema |
| Cookie Banner | ⏳ BUILT | Hidden until GA4 added |
| Google Analytics | ⏳ READY | Need your ID |
| OG Images | ❌ TODO | Create manually |
| Search Console | ❌ TODO | After production launch |

---

## 💡 **Pro Tips**

1. **Don't rush analytics** - Your site works fine without it. Add when ready to start measuring.
2. **OG images are worth it** - Huge difference in social engagement. Use Canva templates to save time.
3. **Test cookie banner locally** - Clear localStorage to see it again: DevTools → Application → Local Storage → Clear
4. **Google takes time** - Search Console data can take days/weeks. Be patient.

---

**Need help?** Check `SEO_SETUP_GUIDE.md` for detailed instructions or reach out!
