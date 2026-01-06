# Setup Guide - ABC International Public School Website

## Quick Start

1. **Install Dependencies**

   ```bash
   npm install
   ```

2. **Run Development Server**

   ```bash
   npm run dev
   ```

3. **Open Browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
schoolNextJs/
├── app/                    # Next.js App Router pages
│   ├── about/             # About Us page
│   ├── academics/         # Academics page
│   ├── admissions/        # Admissions page
│   ├── achievements/      # Achievements page
│   ├── contact/           # Contact Us page
│   ├── faculty/           # Faculty page
│   ├── gallery/           # Gallery page
│   ├── infrastructure/    # Infrastructure page
│   ├── news/              # News & Notices page
│   ├── student-life/      # Student Life page
│   ├── layout.tsx         # Root layout
│   └── page.tsx          # Home page
├── components/            # React components
│   ├── layout/           # Header, Footer
│   ├── sections/         # Page sections (Hero, Stats, etc.)
│   └── ui/               # Reusable UI components
├── lib/                  # Utilities and config
│   ├── config.ts         # School configuration
│   └── utils.ts          # Helper functions
├── types/                # TypeScript type definitions
└── public/               # Static assets

```

## Configuration

### School Details

Edit `lib/config.ts` to update:

- School name
- Contact information
- Board (CBSE/ICSE)
- Academic session
- Statistics

### Theme Colors

Edit `tailwind.config.ts` to customize:

- Primary colors
- Secondary colors
- Accent colors

## Features Implemented

✅ **Pages**

- Home with hero carousel, stats, notices
- About Us (history, vision, mission, leadership)
- Academics (curriculum, class structure, methodology)
- Admissions (process, eligibility, fees, enquiry form)
- Infrastructure (facilities, gallery with lightbox)
- Faculty (teacher profiles with hover effects)
- Student Life (activities, houses, events)
- Achievements (awards, accomplishments)
- Gallery (filterable image gallery)
- News & Notices (announcements, circulars)
- Contact (form, map, contact info)

✅ **Features**

- Responsive design (mobile-first)
- Light & Dark theme support
- Framer Motion animations
- SEO optimized
- Form validation
- Image lightbox
- Animated counters
- Smooth scrolling
- Accessible UI

## Customization

### Adding New Pages

1. Create a new folder in `app/` directory
2. Add `page.tsx` file
3. Update `lib/config.ts` navLinks array
4. Add metadata in the page file

### Adding Images

1. Place images in `public/` directory
2. Reference as `/image-name.jpg` in components
3. Or use external URLs (configured in `next.config.js`)

### Modifying Content

- School info: `lib/config.ts`
- Page content: Individual page files in `app/`
- Components: `components/` directory

## Build for Production

```bash
npm run build
npm start
```

## Deployment

The site is ready for deployment on:

- Vercel (recommended for Next.js)
- Netlify
- AWS Amplify
- Any Node.js hosting platform

## Notes

- All images use placeholder URLs from Unsplash
- Replace with actual school images in production
- Google Maps embed URL needs to be updated with actual location
- Form submissions currently show alerts - integrate with backend API
- WhatsApp link uses phone number from config

## Support

For issues or questions, refer to:

- Next.js Documentation: https://nextjs.org/docs
- Tailwind CSS: https://tailwindcss.com/docs
- Framer Motion: https://www.framer.com/motion/
