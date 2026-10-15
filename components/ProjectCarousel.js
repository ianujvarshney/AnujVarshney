import { useCallback, useEffect, useRef, useState } from 'react';

// next image
import Image from 'next/image';

// icons
import { BsArrowUpRight, BsGithub, BsChevronLeft, BsChevronRight } from 'react-icons/bs'

// components
import FeaturedProject from './FeaturedProject';

// data: Ronx, Tempo, iQuincesoft and Caritas Revolution follow the resume;
// Vcoder and SnapshortURL come from their live sites
const projects = [
  {
    title: 'Ronx',
    image: '/project7.png',
    description:
      'DeFi platform built with Next.js and Solidity ERC-20 smart contracts for peer-to-peer financial transactions, deployed on the Ethereum testnet with 1,000+ simulated transactions.',
    tags: ['Next.js', 'Solidity', 'ERC-20', 'Web3.js', 'Hardhat', 'Ethereum'],
    live: 'https://ronx.vercel.app/',
    source: 'https://github.com/ianujvarshney/Ronx',
  },
  {
    title: 'Tempo',
    image: '/project6.png',
    description:
      'Real-time event management platform with live seat booking over WebSockets, supporting 500+ concurrent users, with a MongoDB backend and payment gateway integration.',
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'WebSockets'],
    live: 'https://tempo.live/',
  },
  {
    title: 'iQuincesoft',
    image: '/project1.png',
    description:
      'Official company website, launched with React.js and Next.js SSR: 95+ Google Lighthouse performance score and 40% faster page loads.',
    tags: ['React.js', 'Next.js', 'Node.js', 'SSR', 'Tailwind CSS'],
    live: 'https://iquincesoft.com/',
  },
  {
    title: 'Caritas Revolution',
    image: '/project2.png',
    description:
      'Nonprofit donation platform with Stripe payment integration, enabling $10,000+ in charitable transactions for 200+ registered donors.',
    tags: ['React.js', 'Node.js', 'MongoDB', 'Stripe API'],
    // the live domain no longer resolves, so there is no link
  },
  {
    title: 'Vcoder',
    image: '/project5.png',
    description:
      'Website for a smart-contract development service, where clients book a new decentralized smart contract.',
    tags: ['React'],
    live: 'https://vcoder.io/',
  },
  {
    title: 'SnapshortURL',
    image: '/project4.png',
    description: 'URL shortener: streamlined link shortening for the modern web.',
    tags: ['Next.js'],
    live: 'https://snap-short-url.vercel.app/',
  },
];

const ProjectCard = ({ project, index }) => (
  <article className='card h-full overflow-hidden flex flex-col group hover:border-accent/30'>
    {/* image */}
    <div className='relative aspect-[1400/804] overflow-hidden bg-black/20 shrink-0'>
      <Image
        src={project.image}
        fill
        sizes="(min-width: 640px) 320px, 80vw"
        alt={`Screenshot of ${project.title}`}
        className='object-cover object-top group-hover:scale-[1.03] transition-transform duration-500'
        priority={index < 1}
      />
    </div>
    {/* text */}
    <div className='flex flex-col flex-1 p-5'>
      <h2 className='text-lg font-semibold mb-1'>{project.title}</h2>
      <p className='text-[15px] leading-normal mb-4'>{project.description}</p>
      <ul className='flex flex-wrap gap-2 mb-4' aria-label="Tech stack">
        {project.tags.map((tag) => <li key={tag} className='badge'>{tag}</li>)}
      </ul>
      {/* links */}
      <div className='mt-auto flex flex-wrap gap-x-5 text-sm font-medium'>
        {project.live ? (
          <a href={project.live} target="_blank" rel="noopener noreferrer" className='inline-flex items-center gap-x-1.5 min-h-[44px] text-accent hover:underline underline-offset-4'>
            Live site <BsArrowUpRight aria-hidden="true" /><span className='sr-only'>: {project.title} (opens in a new tab)</span>
          </a>
        ) : (
          <span className='inline-flex items-center min-h-[44px] text-white/50'>Live site offline</span>
        )}
        {project.source && (
          <a href={project.source} target="_blank" rel="noopener noreferrer" className='inline-flex items-center gap-x-1.5 min-h-[44px] hover:text-accent'>
            <BsGithub aria-hidden="true" /> Source<span className='sr-only'>: {project.title} on GitHub (opens in a new tab)</span>
          </a>
        )}
      </div>
    </div>
  </article>
);

const ProjectCarousel = () => {
  const trackRef = useRef(null);
  const [edges, setEdges] = useState({ start: true, end: false });

  // which arrow buttons can still move the row
  const updateEdges = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setEdges({
      start: el.scrollLeft <= 2,
      end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 2,
    });
  }, []);

  // move to the start of the next (1) or previous (-1) card; cards have
  // different widths, so this goes by their real positions, and it lands on
  // the same points the scroll snapping uses
  const scrollByCard = useCallback((direction) => {
    const el = trackRef.current;
    if (!el) return;
    const left = el.getBoundingClientRect().left;
    const starts = [...el.children].map((li) => el.scrollLeft + li.getBoundingClientRect().left - left);
    const target = direction > 0
      ? starts.find((x) => x > el.scrollLeft + 4)
      : [...starts].reverse().find((x) => x < el.scrollLeft - 4);
    el.scrollTo({ left: target ?? (direction > 0 ? el.scrollWidth : 0), behavior: 'smooth' });
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    updateEdges();

    // a vertical mouse wheel over the row moves it one card sideways per
    // gesture; at either end the wheel scrolls the page as usual
    let pending = 0;
    let lockedUntil = 0;
    const onWheel = (e) => {
      if (Math.abs(e.deltaY) <= Math.abs(e.deltaX)) return; // sideways trackpad swipe: native
      const max = el.scrollWidth - el.clientWidth;
      const atStart = el.scrollLeft <= 2 && e.deltaY < 0;
      const atEnd = el.scrollLeft >= max - 2 && e.deltaY > 0;
      if (max <= 0 || atStart || atEnd) return;
      e.preventDefault();
      const now = Date.now();
      if (now < lockedUntil) return; // one card per flick
      pending += e.deltaY;
      if (Math.abs(pending) < 40) return; // trackpads send many tiny steps
      scrollByCard(Math.sign(pending));
      pending = 0;
      lockedUntil = now + 450;
    };

    el.addEventListener('wheel', onWheel, { passive: false });
    el.addEventListener('scroll', updateEdges, { passive: true });
    window.addEventListener('resize', updateEdges);
    return () => {
      el.removeEventListener('wheel', onWheel);
      el.removeEventListener('scroll', updateEdges);
      window.removeEventListener('resize', updateEdges);
    };
  }, [updateEdges, scrollByCard]);

  const arrowClass = 'w-11 h-11 rounded-full border border-white/20 flex items-center justify-center hover:border-accent hover:text-accent disabled:opacity-30 disabled:hover:border-white/20 disabled:hover:text-white disabled:cursor-default transition-colors duration-300';

  return (
    <div>
      {/* controls */}
      <div className='flex items-center justify-between gap-x-4 mb-4'>
        <p className='text-sm text-white/50 leading-normal'>
          {projects.length + 1} projects · scroll or swipe sideways
        </p>
        <div className='flex gap-x-2 shrink-0'>
          <button type="button" className={arrowClass} onClick={() => scrollByCard(-1)} disabled={edges.start} aria-label="Previous projects">
            <BsChevronLeft aria-hidden="true" />
          </button>
          <button type="button" className={arrowClass} onClick={() => scrollByCard(1)} disabled={edges.end} aria-label="Next projects">
            <BsChevronRight aria-hidden="true" />
          </button>
        </div>
      </div>

      {/* row */}
      <ul
        ref={trackRef}
        tabIndex={0}
        aria-label="Projects, scrollable sideways"
        className='flex items-start sm:items-stretch gap-5 overflow-x-auto overflow-y-hidden snap-x snap-mandatory scroll-smooth overscroll-x-contain pb-4 scrollbar-thin scrollbar-thumb-accent/40 scrollbar-track-white/5 rounded-xl'
      >
        <li className='snap-start shrink-0 w-[88%] sm:w-[600px]'>
          <FeaturedProject />
        </li>
        {projects.map((project, index) => (
          <li key={project.title} className='snap-start shrink-0 w-[80%] sm:w-[320px]'>
            <ProjectCard project={project} index={index} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectCarousel;
