// icons
import { FaGooglePlay, FaApple } from 'react-icons/fa';
import { HiDevicePhoneMobile } from 'react-icons/hi2';

// data: app details from the public Google Play and App Store listings,
// role and stack from the resume (Inriser Consulting, Nov 2025 - Present)
const equitty = {
  name: 'Equitty One',
  publisher: 'Inriser Consulting Private Limited',
  description:
    'Mobile app to explore market news, get timely alerts and follow the latest financial updates in one simple, secure place.',
  features: ['Market news in one place', 'Timely alerts & notifications', 'Clean, organized layout'],
  role: 'Full Stack Developer at Inriser (Nov 2025 - Present)',
  highlights: [
    'Market data pipelines processing 10,000+ live stock data points per second (LTP, depth, OI).',
    'Low-latency index calculation on Redis: 60% faster processing, 40% less database load.',
    'Order Management System on PostgreSQL and TimescaleDB, managing 50,000+ daily transactions.',
    '10+ admin APIs for KYC, subscriptions and monitoring with JWT auth; 99.9% platform uptime.',
  ],
  tags: ['Redis', 'PostgreSQL', 'TimescaleDB', 'JWT', 'CI/CD'],
  stores: [
    {
      name: 'Google Play',
      href: 'https://play.google.com/store/apps/details?id=com.inriser.equitty',
      label: 'Get it on',
      icon: <FaGooglePlay />,
    },
    {
      name: 'App Store',
      href: 'https://apps.apple.com/in/app/equitty-one/id6809347155',
      label: 'Download on the',
      icon: <FaApple />,
    },
  ],
};

const FeaturedProject = () => {
  return (
    <article className='card h-full p-5 sm:p-6 border-accent/30' aria-labelledby="featured-equitty">
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 h-full'>
        {/* app */}
        <div className='flex flex-col'>
          <div className='flex items-center gap-x-3 mb-4'>
            <div className='w-12 h-12 shrink-0 rounded-xl bg-accent/15 text-accent text-2xl flex items-center justify-center' aria-hidden="true">
              <HiDevicePhoneMobile />
            </div>
            <div>
              <p className='text-xs uppercase tracking-[0.2em] text-accent leading-normal font-medium'>Featured · Live app</p>
              <h2 id="featured-equitty" className='text-xl sm:text-2xl font-semibold leading-tight'>{equitty.name}</h2>
            </div>
          </div>
          <p className='text-[15px] leading-normal mb-2'>{equitty.description}</p>
          <p className='text-sm text-white/50 mb-5'>Published by {equitty.publisher}</p>

          {/* features */}
          <ul className='flex flex-wrap gap-2 mb-5' aria-label="App features">
            {equitty.features.map((feature) => <li key={feature} className='badge'>{feature}</li>)}
          </ul>

          {/* store links */}
          <div className='mt-auto flex flex-col gap-3'>
            {equitty.stores.map((store) => (
              <a
                key={store.name}
                href={store.href}
                target="_blank"
                rel="noopener noreferrer"
                className='inline-flex items-center gap-x-3 min-h-[52px] px-5 rounded-xl border border-white/20 bg-black/30 hover:border-accent hover:text-accent transition-colors duration-300'
              >
                <span className='text-2xl' aria-hidden="true">{store.icon}</span>
                <span className='flex flex-col text-left leading-tight'>
                  <span className='text-[11px] text-white/60'>{store.label}</span>
                  <span className='font-semibold'>{store.name}</span>
                </span>
                <span className='sr-only'> (opens in a new tab)</span>
              </a>
            ))}
          </div>
        </div>

        {/* my role */}
        <div className='border-t sm:border-t-0 sm:border-l border-white/10 pt-6 sm:pt-0 sm:pl-6'>
          <h3 className='text-sm uppercase tracking-[0.15em] text-white/60 mb-1'>My role</h3>
          <p className='text-white/90 mb-3'>{equitty.role}</p>
          <ul className='flex flex-col gap-y-2 mb-4'>
            {equitty.highlights.map((item) => (
              <li key={item} className='flex gap-x-2 text-sm leading-snug text-white/70'>
                <span className='text-accent mt-[2px]' aria-hidden="true">▹</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <ul className='flex flex-wrap gap-2' aria-label="Tech stack">
            {equitty.tags.map((tag) => <li key={tag} className='badge'>{tag}</li>)}
          </ul>
        </div>
      </div>
    </article>
  );
};

export default FeaturedProject;
