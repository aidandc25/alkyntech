# AlkynTech

A premium marketing website for AlkynTech - a software engineering company specializing in custom websites and workflow automation for businesses worldwide.

## 🎨 Design Features

- **OKLCH Color System**: Perceptually uniform colors for a premium feel
- **Glass Morphism**: Backdrop blur effects throughout
- **Gradient Text**: Multi-color gradient text effects
- **Framer Motion Animations**: Smooth, professional animations
- **Interactive Hover States**: Background inversions, scale transforms
- **Mobile-First**: Fully responsive design
- **Accessibility**: WCAG AA compliant with proper ARIA labels

## 🛠️ Tech Stack

- **Next.js 15** - React framework with static export
- **React 19** - Latest React with improved performance
- **TypeScript 5** - Type safety
- **Tailwind CSS 4** - Modern CSS framework with `@theme inline`
- **Framer Motion 12** - Premium animations
- **Radix UI** - Accessible component primitives
- **Lenis** - Smooth scrolling (optional)

## 📁 Project Structure

```
alkyntech/
├── app/                 # Next.js app directory
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Homepage
│   └── globals.css     # Global styles with OKLCH colors
├── components/
│   ├── ui/             # Base components (Button, Tag, Card)
│   ├── sections/       # Page sections (Hero, Services, etc.)
│   └── shared/         # Shared components (Header, Footer)
├── lib/                # Utilities
└── public/             # Static assets
```

## 🚀 Getting Started

### Development

```bash
# Install dependencies
pnpm install

# Run development server
pnpm run dev

# Open http://localhost:3000
```

### Build

```bash
# Create production build
pnpm run build

# Preview production build
pnpm run start
```

### Deploy to Vercel

The easiest way to deploy is using Vercel:

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or push to GitHub and connect the repository in Vercel dashboard.

## 🎯 Key Sections

1. **Hero** - Gradient background with animated text and CTAs
2. **Services Grid** - Interactive cards with hover inversions
3. **Who I Help** - Tag-based target audience display
4. **Timeline** - Expandable 3-step process cards
5. **Trust Signals** - Glass morphism cards highlighting value props
6. **CTA Section** - Contact form and booking integration
7. **Footer** - Quick links and contact information

## 🎨 Design System

### Colors

The site uses an OKLCH color system for perceptually uniform colors:

- **Primary (Blue)**: Trust and professionalism
- **Secondary (Orange)**: Energy and action
- **Base (Neutrals)**: Grayscale with slight purple tint

### Typography

- **Font**: Inter (body and headings)
- **Sizes**: Responsive scale from 14px to 72px
- **Weights**: 400-600 (never bold for elegance)

### Animation Patterns

```tsx
// Fade up on scroll
initial={{ opacity: 0, y: 40 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true, margin: '-100px' }}
transition={{ duration: 0.6 }}

// Hover scale
whileHover={{ scale: 1.02, y: -4 }}
transition={{ duration: 0.3 }}
```

## 📝 Customization

### Update Content

Edit the content in each section component:

- `components/sections/Hero.tsx` - Headline and CTAs
- `components/sections/ServicesGrid.tsx` - Service descriptions
- `components/sections/TrustSignals.tsx` - Value propositions

### Update Colors

Modify OKLCH colors in `app/globals.css`:

```css
:root {
  --primary-700: oklch(0.4924 0.0665 220.5);
  --secondary-600: oklch(0.5866 0.2102 29.04);
  /* ... */
}
```

### Update Metadata

Edit SEO metadata in `app/layout.tsx`:

```tsx
export const metadata: Metadata = {
  title: 'AlkynTech | ...',
  description: '...',
  // ...
}
```

## 🔗 Integration

### Cal.com Booking

Replace the placeholder in `components/sections/CTASection.tsx`:

```tsx
onClick={() => {
  // Replace with your Cal.com link
  window.open('https://cal.com/your-username', '_blank')
}}
```

### Contact Email

Update email in:
- `components/sections/CTASection.tsx`
- `components/shared/Footer.tsx`

## 📊 Performance

- Lighthouse Score: 95+ (Performance, Accessibility, SEO)
- Core Web Vitals: All green
- Static site generation for fast loading
- Optimized animations with Framer Motion

## 🎓 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/)
- [Radix UI](https://www.radix-ui.com)

## 📄 License

Private project for AlkynTech.

---

Built with ❤️ by AlkynTech
