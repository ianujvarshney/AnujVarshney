# Anuj Varshney – Portfolio

Personal portfolio of Anuj Varshney, Full Stack Developer. Built with Next.js 13 (Pages Router), Tailwind CSS and Framer Motion, deployed on Vercel.

## Pages

| Route | Content |
|---|---|
| `/` | Hero with role typewriter, particles and avatar |
| `/about` | Summary, experience, skills, education and awards (tabs) |
| `/services` | What I offer |
| `/work` | Project cards with live and source links |
| `/contact` | Contact form (saved to Firestore, emailed via EmailJS) |

## Getting started

```bash
npm install
cp .env.example .env.local   # then fill in the values
npm run dev                  # http://localhost:3000
```

Other scripts: `npm run build`, `npm start`, `npm run lint`.

## Configuration

All variables are listed in `.env.example`:

- `NEXT_PUBLIC_SITE_URL`: public URL used for canonical links and Open Graph tags (defaults to `https://anujvarshney.tech`). Also update `public/robots.txt` and `public/sitemap.xml` if the domain changes.
- `NEXT_PUBLIC_FIREBASE_*`: Firebase web config; contact messages go to the Firestore `contacts` collection.
- `NEXT_PUBLIC_EMAILJS_*`: EmailJS service, template and public key for the notification email.

## Where things live

- Site details and social links: `lib/site.js`
- SEO tags per page: `components/Seo.js`
- Projects: `components/ProjectGrid.js`
- Services: `components/ServiceGrid.js`
- About tabs (experience, skills, education, awards): `pages/about/index.js`
