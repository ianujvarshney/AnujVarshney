// site-wide details used for SEO tags and social links
export const site = {
  name: 'Anuj Varshney',
  title: 'Anuj Varshney | Full Stack Developer',
  // public URL of the site, used for canonical links, Open Graph and the sitemap
  url: (process.env.NEXT_PUBLIC_SITE_URL || 'https://anujvarshney.tech').replace(/\/$/, ''),
  description:
    'Full Stack Developer with 3+ years of experience building scalable web apps, DApps and real-time systems with the MERN stack, Next.js, TypeScript and Web3.',
  ogImage: '/og-image.png',
  twitter: '@ianujvarshney',
};

export const socials = [
  { name: 'GitHub', href: 'https://github.com/ianujvarshney' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/ianujvarshney' },
  { name: 'X (Twitter)', href: 'https://x.com/ianujvarshney' },
  { name: 'Instagram', href: 'https://www.instagram.com/ianujvarshney/' },
  { name: 'Discord', href: 'https://discord.com/channels/@anujvarshney' },
];
