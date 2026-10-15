// icons
import {
  RxLayers,
  RxCube,
  RxLightningBolt,
  RxDesktop,
  RxRocket,
  RxCheckCircled,
} from "react-icons/rx";

// data (skills and tools follow the resume)
const serviceData = [
  {
    icon: <RxLayers />,
    title: 'Full-Stack Web Development',
    description:
      'Scalable web apps with the MERN stack, Next.js and TypeScript: RESTful and GraphQL APIs, secure CRUD workflows and clean, modular architecture.',
  },
  {
    icon: <RxLightningBolt />,
    title: 'Real-Time & Data Systems',
    description:
      'Low-latency pipelines over WebSockets and Redis, time-series storage on PostgreSQL and TimescaleDB, and event-driven services for live data.',
  },
  {
    icon: <RxCube />,
    title: 'Blockchain & Smart Contracts',
    description:
      'DeFi and NFT DApps, and Solidity smart contract audits (ERC-20, ERC-721) with Hardhat, Ethers.js and The Graph; MetaMask, WalletConnect and Wagmi wallets.',
  },
  {
    icon: <RxDesktop />,
    title: 'Frontend & Performance',
    description:
      'Responsive UIs with React, Next.js, Tailwind CSS, Chakra UI and Framer Motion; SSR, SSG and code splitting for fast page loads.',
  },
  {
    icon: <RxRocket />,
    title: 'Cloud, DevOps & CI/CD',
    description:
      'Deployments on AWS, Docker, Nginx and Vercel, with GitHub Actions CI/CD pipelines, automated rollback and monitoring.',
  },
  {
    icon: <RxCheckCircled />,
    title: 'Testing & Code Quality',
    description:
      'Jest and Vitest unit tests, Postman API testing and Swagger/OpenAPI docs, with ESLint, Prettier and Husky keeping the codebase consistent.',
  },
];

const ServiceGrid = () => {
  return <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
    {
      serviceData.map((item) => {
        return <li key={item.title} className='card p-6 flex flex-col hover:bg-[rgba(89,65,169,0.15)] hover:border-accent/30'>
          {/* icon */}
          <div className='text-4xl text-accent mb-4' aria-hidden="true">{item.icon}</div>
          {/* title & desc*/}
          <h2 className='mb-2 text-lg font-medium leading-snug'>{item.title}</h2>
          <p className='leading-normal text-[15px]'>{item.description}</p>
        </li>
      })
    }
  </ul>;
};

export default ServiceGrid;
