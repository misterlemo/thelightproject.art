# The Light Project

A contemporary art portfolio website for Greek artist Maria-Efimia Dimoka, showcasing the "Dance of the Shadows" series—nine original acrylic paintings exploring light and shadow in Greek architecture.

## Features

- **One-page scrolling design** with smooth navigation
- **Sticky header** with mobile-responsive menu
- **Portfolio gallery** organized by color series (Blue, Red, Yellow)
- **Interactive lightbox** for detailed artwork viewing
- **Contact form** for inquiries and commissions
- **SEO optimized** with semantic HTML and meta tags
- **Fully accessible** (WCAG AA compliant)
- **Responsive design** for all devices

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Playfair Display & Inter** - Google Fonts

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
thelightproject.art/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page component
│   └── globals.css         # Global styles
├── components/
│   ├── Navigation.tsx      # Sticky navigation header
│   ├── Hero.tsx            # Hero section
│   ├── TheProject.tsx      # Project concept section
│   ├── Portfolio.tsx       # Portfolio gallery
│   ├── ArtworkCard.tsx     # Individual artwork cards
│   ├── Lightbox.tsx        # Artwork detail modal
│   ├── About.tsx           # Artist biography
│   ├── Contact.tsx         # Contact form
│   ├── Footer.tsx          # Footer component
│   └── BackToTop.tsx       # Scroll to top button
├── public/
│   └── images/             # Artwork images (to be added)
└── website-specification.md # Complete design specification
```

## Adding Artwork Images

Replace the placeholder gradients with actual artwork images:

1. Add images to `public/images/portfolio/` organized by series:
   - `/blue/` - Shadows in Blue series
   - `/red/` - Shadows in Red series
   - `/yellow/` - Shadows in Yellow series

2. Use the naming convention:
   - `thelightproject-blue-01-ship-deck.jpg`
   - `thelightproject-blue-02-cycladic-house.jpg`
   - etc.

3. Update the `ArtworkCard.tsx` and `Lightbox.tsx` components to use actual images instead of placeholders.

## Customization

### Colors

Edit `tailwind.config.ts` to customize the color palette:
- `background`: Off-white background
- `accent`: Primary accent color (blue)
- `blue-accent`, `red-accent`, `yellow-accent`: Series colors

### Typography

Fonts are configured in `app/layout.tsx`:
- Serif: Playfair Display (headings)
- Sans-serif: Inter (body text)

### Content

All content is extracted from the PDF portfolio and can be found in:
- `website-specification.md` - Complete content and design documentation
- Component files - Section-specific content

## Form Integration

The contact form currently uses a simulated submission. To integrate with a real backend:

1. **Using Formspree:**
   - Sign up at [formspree.io](https://formspree.io)
   - Replace the form action in `Contact.tsx`

2. **Using Netlify Forms:**
   - Add `netlify` attribute to the form
   - Deploy to Netlify

3. **Custom API:**
   - Create an API route in `app/api/contact/route.ts`
   - Update the form submission handler

## Deployment

### Netlify

1. Connect your repository to Netlify
2. Build command: `npm run build`
3. Publish directory: `.next`

### Vercel

1. Import your repository to Vercel
2. Framework preset: Next.js
3. Deploy

## SEO

The site includes:
- Semantic HTML structure
- Meta tags for search engines
- Open Graph tags for social media
- Alt text for all images
- Proper heading hierarchy

## Accessibility

- Keyboard navigation support
- ARIA labels and landmarks
- Focus visible states
- Screen reader compatible
- Color contrast compliant (WCAG AA)

## Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)
- Mobile browsers (iOS Safari 12+, Chrome Android)

## License

All artwork and content © 2026 Maria-Efimia Dimoka. All rights reserved.

## Contact

For inquiries about the artwork or website:
- Instagram: [@thelightproject.art](https://instagram.com/thelightproject.art)
- Website: [thelightproject.art](https://thelightproject.art)
