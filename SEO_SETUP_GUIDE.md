# SEO Setup Guide - AlkynTech

## ✅ What's Already Done

### Technical SEO
- [x] robots.txt created
- [x] sitemap.xml auto-generated
- [x] Schema.org structured data (Organization, Services, FAQ)
- [x] Cookie consent banner (GDPR compliant)
- [x] Google Analytics component (ready to activate)
- [x] Meta tags configured
- [x] OpenGraph setup

### Legal
- [x] Privacy Policy
- [x] Terms of Service
- [x] Contact form consent checkbox
- [x] Footer legal links

---

## 🔧 TODO: Finish Setup

### 1. **Activate Google Analytics** (5 minutes)

#### Step 1: Create GA4 Property
1. Go to [Google Analytics](https://analytics.google.com)
2. Click "Admin" (bottom left)
3. Click "+ Create Property"
4. Name it "AlkynTech"
5. Select timezone and currency
6. Click "Create"

#### Step 2: Get Your Measurement ID
1. In Admin → Data Streams
2. Click "Add stream" → "Web"
3. Enter: `alkyntech.com`
4. Copy your **Measurement ID** (looks like `G-XXXXXXXXXX`)

#### Step 3: Add to Your Site
Open `app/layout.tsx` and add this line after the imports:

```tsx
import GoogleAnalytics from '@/components/seo/GoogleAnalytics'
```

Then add this inside the `<head>` tag (after StructuredData):

```tsx
<GoogleAnalytics measurementId="G-XXXXXXXXXX" /> {/* Replace with your ID */}
```

**Full example:**
```tsx
<head>
  <StructuredData data={organizationSchema} />
  <GoogleAnalytics measurementId="G-XXXXXXXXXX" />
</head>
```

That's it! Analytics will only load after users accept cookies.

---

### 2. **Create OG Images** (30-60 minutes)

OpenGraph images show when your site is shared on social media. You need **1200x630px** images.

#### Tools You Can Use:
- **Canva** (easiest): [canva.com](https://canva.com)
  - Search "Open Graph" templates
  - Use 1200x630px custom size
- **Figma** (professional): [figma.com](https://figma.com)
- **Photoshop/GIMP** (advanced)

#### Images Needed:

1. **Homepage** (`/public/og-default.png`)
   ```
   Text: "AlkynTech"
   Tagline: "Premium Web Development & Automation"
   Background: Dark gradient with your brand colors
   ```

2. **Services** (`/public/og-services.png`)
   ```
   Text: "Our Services"
   Tagline: "Web Development & Automation Solutions"
   Icon: 🌐 or ⚡
   ```

3. **Work/Portfolio** (`/public/og-work.png`)
   ```
   Text: "Our Work"
   Tagline: "Projects & Case Studies"
   Visual: Screenshot or mockup
   ```

4. **Contact** (`/public/og-contact.png`)
   ```
   Text: "Let's Work Together"
   Tagline: "Get in touch to start your project"
   CTA: "Contact Us"
   ```

#### Design Tips:
- Use your brand colors (primary, secondary, accent)
- Keep text large and readable (60px+ for title)
- Safe zone: Keep important content 200px from edges
- Test on multiple social platforms
- Include your logo (top or bottom corner)

#### After Creating Images:
1. Export as PNG
2. Optimize with [TinyPNG](https://tinypng.com) or [Squoosh](https://squoosh.app)
3. Save to `/public/` directory
4. Update page metadata (see next section)

---

### 3. **Add Page-Specific OG Images** (10 minutes)

#### Services Page
Add this to `/app/services/page.tsx` (create metadata export):

```tsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Services | AlkynTech',
  description: 'Premium web development and automation services for growing businesses.',
  openGraph: {
    title: 'Services | AlkynTech',
    description: 'Web Development & Automation Solutions',
    images: [
      {
        url: 'https://alkyntech.com/og-services.png',
        width: 1200,
        height: 630,
        alt: 'AlkynTech Services',
      },
    ],
  },
}
```

**Note:** Since it's a client component (`'use client'`), you'll need to either:
- Convert to server component (remove 'use client' and state), OR
- Keep using the global OG image from layout.tsx

#### Work Page
Same approach - add metadata export if it's a server component.

#### Contact Page
Same approach.

---

### 4. **Set Up Google Search Console** (15 minutes)

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Click "Add Property"
3. Enter: `https://alkyntech.com`
4. Verify ownership (choose "HTML tag" method):
   - Copy the meta tag
   - Add to `app/layout.tsx` in `<head>`:
   ```tsx
   <meta name="google-site-verification" content="YOUR_CODE_HERE" />
   ```
5. Submit sitemap:
   - In Search Console, go to "Sitemaps"
   - Add: `https://alkyntech.com/sitemap.xml`
   - Click "Submit"

---

### 5. **Set Up Conversion Tracking** (20 minutes)

Track when users submit the contact form:

#### In GA4:
1. Admin → Events → Create Event
2. Event name: `contact_form_submission`
3. Mark as conversion

#### In Contact Form (`app/contact/page.tsx`):

After successful submission (line 43), add:

```tsx
if (response.ok) {
  setStatus('success')
  setFormData({ name: '', email: '', phone: '', company: '', website: '', message: '' })
  setConsentGiven(false)

  // Track conversion
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'contact_form_submission', {
      event_category: 'Lead Generation',
      event_label: 'Contact Form',
    })
  }
}
```

---

## 📊 How to Verify Everything Works

### 1. Check Sitemap
Visit: `http://localhost:3000/sitemap.xml`
- Should show all 6 pages
- XML format

### 2. Check Robots.txt
Visit: `http://localhost:3000/robots.txt`
- Should allow all crawlers
- Should reference sitemap

### 3. Check Schema.org Markup
1. Run: `pnpm run build && pnpm run start`
2. Visit homepage
3. Right-click → "View Page Source"
4. Search for: `"@type": "ProfessionalService"`
5. Should see JSON-LD script tags

Or use [Google's Rich Results Test](https://search.google.com/test/rich-results)

### 4. Check Cookie Banner
1. Clear localStorage: Open DevTools → Application → Local Storage → Clear
2. Refresh page
3. Banner should appear after 1 second
4. Test Accept and Decline buttons

### 5. Check OG Images
Use [OpenGraph Preview](https://www.opengraph.xyz/) or share a link on:
- LinkedIn
- Twitter/X
- Facebook
- Slack

---

## 🚀 Post-Launch Checklist

After deploying to production (`alkyntech.com`):

### Week 1:
- [ ] Verify Google Analytics is receiving data
- [ ] Submit sitemap to Google Search Console
- [ ] Check for any crawl errors in Search Console
- [ ] Test all OG images on social platforms
- [ ] Verify Schema.org markup with Google's tool

### Week 2:
- [ ] Check Core Web Vitals in Search Console
- [ ] Set up GA4 goals/conversions
- [ ] Monitor 404 errors
- [ ] Check mobile usability report

### Ongoing:
- [ ] Check GA4 weekly for traffic trends
- [ ] Monitor Search Console for keyword rankings
- [ ] Review and respond to any search appearance issues
- [ ] Update content regularly for SEO

---

## 📈 Expected SEO Timeline

**Week 1-2:**
- Google discovers and starts indexing pages
- Sitemap processed
- First appearance in search results

**Month 1:**
- All pages indexed
- Starting to rank for brand name
- Basic traffic analytics available

**Month 2-3:**
- Ranking for long-tail keywords
- Organic traffic growing
- Backlinks starting to matter

**Month 6+:**
- Established domain authority
- Ranking for competitive keywords
- Consistent organic traffic

---

## 🆘 Troubleshooting

### GA4 Not Showing Data
1. Check if cookies are accepted
2. Open DevTools → Console, look for errors
3. Verify Measurement ID is correct
4. Wait 24 hours (data can be delayed)

### Sitemap Not Found
1. Run `pnpm run build` (generates sitemap)
2. Check `app/sitemap.ts` exists
3. Verify in production at `/sitemap.xml`

### Schema Not Showing in Google
1. Can take weeks to appear
2. Use Rich Results Test to verify markup is valid
3. Check for JSON syntax errors in DevTools

### Cookie Banner Not Appearing
1. Clear localStorage
2. Check console for React errors
3. Verify component is imported in layout.tsx

---

## 📚 Helpful Resources

- [Google Analytics Help](https://support.google.com/analytics)
- [Google Search Console Help](https://support.google.com/webmasters)
- [Schema.org Documentation](https://schema.org/docs/schemas.html)
- [OpenGraph Protocol](https://ogp.me/)
- [Next.js SEO](https://nextjs.org/docs/app/building-your-application/optimizing/metadata)

---

## ✅ Current Status

**SEO Foundation: COMPLETE ✅**
- robots.txt ✅
- sitemap.xml ✅
- Schema.org markup ✅
- Cookie consent ✅
- GA4 component ready ✅

**Next Steps:**
1. Add your GA4 Measurement ID
2. Create and upload OG images
3. Set up Google Search Console
4. Deploy and monitor

You're 90% done! Just need GA4 ID and OG images to be 100% ready.
