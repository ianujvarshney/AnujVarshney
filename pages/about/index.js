//import react
import React, { useRef, useState } from "react";

// icons
import { HiChevronDown } from "react-icons/hi2";

//components
import Seo from "../../components/Seo";

//framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import { useReduceMotion } from "../../lib/motion";

//counters
import CountUp from "react-countup";

// all content below follows the resume (github.com/ianujvarshney/Resume)

// work history, newest first
const experience = [
  {
    role: "Full Stack Developer",
    company: "Inriser Consulting Pvt. Ltd.",
    product: "Equitty One",
    period: "Nov 2025 - Present",
    location: "New Delhi, IN",
    points: [
      "Engineered and streamlined market data pipelines: real-time processing of 10,000+ data points per second of live stock data, including LTP, depth and OI.",
      "Implemented low-latency index calculation using Redis, improving processing speed by 60% and reducing database load by 40%.",
      "Designed and maintained a scalable Order Management System (OMS) on PostgreSQL and TimescaleDB for time-series storage and analytics, managing 50,000+ daily transactions.",
      "Developed 10+ admin APIs for KYC, subscriptions and system monitoring with secure JWT authentication, IP logging and device tracking.",
      "Enhanced platform reliability to 99.9% uptime with production-ready backend architecture, CI/CD pipelines with automated rollback and monitoring workflows.",
    ],
  },
  {
    role: "MERN Stack Developer | Blockchain Developer",
    company: "All Digital",
    period: "May 2024 - Jan 2025",
    location: "New Delhi, IN",
    points: [
      "Built DeFi and NFT decentralized applications (DApps) using Next.js, TypeScript, GraphQL and Web3.js with wallet integrations (MetaMask, WalletConnect, Wagmi).",
      "Spearheaded backend systems using MongoDB, Mongoose, Node.js and Express, supporting 5,000+ users with secure and scalable workflows.",
      "Conducted 15+ smart contract audits using Solidity, Hardhat, Ethers.js and The Graph, covering the ERC-20 and ERC-721 token standards.",
      "Crafted responsive UIs using Chakra UI, Tailwind CSS, Framer Motion and React Hook Form with Yup validations, boosting engagement by 25%.",
      "Maintained code quality with ESLint, Prettier, Husky and Lint-Staged, reducing code review time by 30%.",
      "Managed Next.js project setup with static export, sitemap generation and reusable layouts, improving page load speed by 45%.",
    ],
  },
  {
    role: "MERN Stack Developer",
    company: "QHR Solution",
    period: "Aug 2023 - Apr 2024",
    location: "New Delhi, IN",
    points: [
      "Resolved 50+ critical bugs in SaaS applications using Jest unit testing and Postman API validation, improving overall application performance by 30%.",
      "Architected and delivered 15+ RESTful APIs using Node.js and Express.js, documented with Swagger/OpenAPI, for products, users and transaction workflows.",
      "Created secure CRUD APIs with validation, authentication and error handling for 8+ product modules.",
      "Optimized MongoDB models and queries, reducing query response time by 40%.",
      "Boosted UI responsiveness by 35% with mobile-first behavior across cloud-based SaaS platforms.",
    ],
  },
  {
    role: "React Developer",
    company: "iQuincesoft Pvt Ltd.",
    period: "Dec 2021 - Jul 2023",
    location: "New Delhi, IN",
    points: [
      "Delivered 4+ client projects with zero critical defects, achieving a 98% client satisfaction rate.",
      "Introduced reusable React components and custom hooks following SOLID principles, improving code maintainability by 25%.",
      "Collaborated with 10+ stakeholders across Agile sprints, ensuring a 95% on-time release rate.",
      "Integrated third-party APIs (payment gateways, social auth, maps) across 3+ client applications, reducing integration time by 40%.",
      "Reduced React bundle size by 35% with code splitting, lazy loading and tree shaking, cutting initial load time to under 2 seconds.",
    ],
  },
];

//  data
const aboutData = [
  {
    title: "experience",
    jobs: experience,
  },
  {
    title: "skills",
    skills: [
      {
        title: "Languages",
        items: ["JavaScript", "TypeScript", "Python"],
      },
      {
        title: "Frontend",
        items: ["React.js", "Next.js", "Redux", "Tailwind CSS", "Chakra UI", "Bootstrap", "Framer Motion"],
      },
      {
        title: "Backend",
        items: ["Node.js", "Express.js", "RESTful APIs", "GraphQL", "WebSockets", "Socket.io", "OAuth/SSO", "JWT", "Swagger/OpenAPI"],
      },
      {
        title: "Databases",
        items: ["MongoDB", "Mongoose", "PostgreSQL", "Redis", "TimescaleDB"],
      },
      {
        title: "Blockchain & Web3",
        items: ["Solidity", "Web3.js", "Ethers.js", "Wagmi", "ERC-20", "ERC-721", "DeFi", "NFT", "MetaMask", "WalletConnect", "Hardhat", "Infura", "The Graph"],
      },
      {
        title: "DevOps & Tools",
        items: ["GitHub", "GitHub Actions", "Docker", "AWS", "CI/CD", "Nginx", "Vercel", "Firebase", "Postman", "Jira", "Linux"],
      },
      {
        title: "Testing",
        items: ["Jest", "Vitest", "Postman API Testing"],
      },
      {
        title: "Engineering practices",
        items: ["Microservices", "Event-driven architecture", "SSR / CSR / SSG / ISR", "SOLID principles", "System design", "Agile", "Performance optimization"],
      },
    ],
  },
  {
    title: "education",
    info: [
      {
        title: "Master of Computer Applications (MCA) in Computer Science",
        detail: "Chandigarh University, Mohali · Coursework: Data Structures & Algorithms, DBMS, Software Engineering, Cloud Computing, Operating Systems, Computer Networks",
        stage: "Aug 2022 - Apr 2024",
      },
      {
        title: "Bachelor of Computer Applications (BCA) in Computer Science",
        detail: "Dr. B.R. Ambedkar University, Mathura",
        stage: "Aug 2018 - Mar 2022",
      },
    ],
  },
  {
    title: "awards",
    info: [
      {
        title: "5-Star Coder in C++",
        stage: "HackerRank",
      },
      {
        title: "200+ DSA problems solved",
        detail: "Competitive programming",
        stage: "Codeforces · CodeChef",
      },
      {
        title: "Open source contributor",
        detail: "Hacktoberfest",
        stage: "2020",
      },
    ],
  },
];

// headline numbers (from the resume)
const stats = [
  { value: 3, suffix: "+", label: "Years of experience" },
  { value: 4, suffix: "", label: "Companies" },
  { value: 15, suffix: "+", label: "Smart contract audits" },
];

// one role in the experience list; the points open and close
const Job = ({ job, open, onToggle, id }) => (
  <li className="py-3 first:pt-0 last:pb-0">
    <button
      type="button"
      onClick={onToggle}
      aria-expanded={open}
      aria-controls={id}
      className="w-full flex items-start justify-between gap-x-4 text-left group"
    >
      <span className="flex flex-col gap-y-1">
        <span className="text-white/90 group-hover:text-accent transition-colors duration-300">
          {job.role}
        </span>
        <span className="text-sm text-white/60">
          {job.company}
          {job.product && <span className="text-white/40"> · {job.product}</span>}
        </span>
        <span className="text-sm text-accent/90 sm:hidden">{job.period}</span>
      </span>
      <span className="flex items-center gap-x-3 shrink-0">
        <span className="hidden sm:inline text-sm text-accent/90">{job.period}</span>
        <HiChevronDown
          aria-hidden="true"
          className={`text-lg text-white/60 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </span>
    </button>
    {open && (
      <ul id={id} className="mt-3 flex flex-col gap-y-2">
        {job.points.map((point) => (
          <li key={point} className="flex gap-x-2 text-sm leading-relaxed text-white/70">
            <span className="text-accent" aria-hidden="true">▹</span>
            <span>{point}</span>
          </li>
        ))}
      </ul>
    )}
  </li>
);

const About = () => {
  const [index, setIndex] = useState(0);
  const [openJob, setOpenJob] = useState(0);
  const tabRefs = useRef([]);
  const reduceMotion = useReduceMotion();

  // arrow keys move between tabs (WAI-ARIA tabs pattern)
  const onTabKeyDown = (e) => {
    const last = aboutData.length - 1;
    let next = null;
    if (e.key === "ArrowRight") next = index === last ? 0 : index + 1;
    if (e.key === "ArrowLeft") next = index === 0 ? last : index - 1;
    if (e.key === "Home") next = 0;
    if (e.key === "End") next = last;
    if (next === null) return;
    e.preventDefault();
    setIndex(next);
    tabRefs.current[next]?.focus();
  };

  const current = aboutData[index];

  return (
    <div className="page-section text-center xl:text-left">
      <Seo
        title="About"
        path="/about"
        description="Experience, skills, education and awards of Anuj Varshney, Full Stack Developer building web apps, DApps and real-time market-data systems."
      />

      <div className="container mx-auto flex flex-col items-center xl:items-start xl:flex-row gap-x-12 gap-y-10 w-full">
        {/* text */}
        <div className="flex-1 flex flex-col justify-center w-full xl:pt-8">
          <motion.h1
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            <span className="text-accent">Full Stack </span>Developer
          </motion.h1>
          <motion.div
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[540px] mx-auto xl:mx-0 mb-8 xl:mb-12 space-y-4"
          >
            <p>
              I have 3+ years of experience building scalable web applications,
              decentralized applications (DApps) and real-time systems with the
              MERN stack, Next.js, TypeScript and Web3.
            </p>
            <p>
              Today I work on high-performance APIs and production systems that
              handle 50,000+ daily transactions. I&apos;m proficient in DeFi
              smart contract development, microservices, AWS/Docker cloud
              infrastructure and Agile workflows.
            </p>
          </motion.div>
          <motion.ul
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex justify-center xl:justify-start"
          >
            {stats.map((stat) => (
              <li
                key={stat.label}
                className="flex-1 max-w-[150px] relative px-3 first:pl-0 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0 last:after:hidden"
              >
                <div className="text-3xl xl:text-4xl font-extrabold text-accent mb-2">
                  {reduceMotion ? stat.value : <CountUp start={0} end={stat.value} duration={3} />}
                  {stat.suffix}
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[110px] mx-auto xl:mx-0">
                  {stat.label}
                </div>
              </li>
            ))}
          </motion.ul>
        </div>

        {/* info */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[52%]"
        >
          <div role="tablist" aria-label="About me" className="flex flex-wrap justify-center xl:justify-start gap-x-6 gap-y-2 mb-6">
            {aboutData.map((item, itemIndex) => {
              const selected = index === itemIndex;
              return (
                <button
                  key={item.title}
                  ref={(el) => (tabRefs.current[itemIndex] = el)}
                  type="button"
                  role="tab"
                  id={`tab-${item.title}`}
                  aria-selected={selected}
                  aria-controls={`panel-${item.title}`}
                  tabIndex={selected ? 0 : -1}
                  onClick={() => setIndex(itemIndex)}
                  onKeyDown={onTabKeyDown}
                  className={`${selected
                    ? "text-accent after:w-full after:bg-accent"
                    : "after:w-8 after:bg-white hover:text-accent"
                    } py-2 capitalize xl:text-lg relative after:h-[2px] after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-300`}
                >
                  {item.title}
                </button>
              );
            })}
          </div>

          <div
            role="tabpanel"
            id={`panel-${current.title}`}
            aria-labelledby={`tab-${current.title}`}
            className="card p-5 sm:p-6 text-left"
          >
            {current.jobs && (
              <ul className="flex flex-col divide-y divide-white/10">
                {current.jobs.map((job, jobIndex) => (
                  <Job
                    key={job.company + job.role}
                    job={job}
                    id={`job-${jobIndex}`}
                    open={openJob === jobIndex}
                    onToggle={() => setOpenJob(openJob === jobIndex ? -1 : jobIndex)}
                  />
                ))}
              </ul>
            )}

            {current.info && (
              <ul className="flex flex-col divide-y divide-white/10">
                {current.info.map((item) => (
                  <li
                    key={item.title}
                    className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-x-4 gap-y-1 py-3 first:pt-0 last:pb-0"
                  >
                    <span className="flex flex-col gap-y-1">
                      <span className="text-white/90">{item.title}</span>
                      {item.detail && <span className="text-sm text-white/60 leading-normal">{item.detail}</span>}
                    </span>
                    <span className="text-sm text-accent/90 shrink-0">{item.stage}</span>
                  </li>
                ))}
              </ul>
            )}

            {current.skills && (
              <div className="flex flex-col gap-y-5">
                {current.skills.map((group) => (
                  <div key={group.title}>
                    <h2 className="text-sm uppercase tracking-[0.15em] text-white/60 mb-2">{group.title}</h2>
                    <ul className="flex flex-wrap gap-2">
                      {group.items.map((skill) => (
                        <li key={skill} className="badge">{skill}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
