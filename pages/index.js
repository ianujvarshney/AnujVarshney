//next dynamic
import dynamic from "next/dynamic";

// next link
import Link from "next/link";

// component
import ProjectBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";
import Seo from "../components/Seo";
import { useTypewriter, Cursor } from "react-simple-typewriter";
//framer motion
import { motion } from "framer-motion";
import { useReduceMotion } from "../lib/motion";

//variants
import { fadeIn } from "../variants";

// particles are decorative and heavy, so they load after the page is interactive
const ParticlesContainer = dynamic(() => import("../components/ParticlesContainer"), { ssr: false });

const roles = [
  "Full Stack Developer",
  "React Developer",
  "Next.js Developer",
  "MERN Stack Developer",
  "Node.js Developer",
  "Blockchain Developer",
  "Real-Time Systems Developer",
  "Open Source Contributor",
];

const Home = () => {
  const reduceMotion = useReduceMotion();
  const [text] = useTypewriter({
    words: roles,
    loop: 0,
  });
  return (
    <div className="bg-primary/60 min-h-screen">
      <Seo path="/" jsonLd />
      {/* text */}
      <div className="w-full min-h-screen bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="relative z-10 text-center flex flex-col justify-center xl:pt-40 xl:text-left min-h-screen container mx-auto pt-24 pb-28 xl:pb-0">
          {/* eyebrow */}
          <motion.p
            variants={fadeIn("down", 0.1)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-accent font-medium tracking-[0.2em] uppercase text-sm mb-3"
          >
            Hi, I&apos;m Anuj Varshney
          </motion.p>
          {/* title */}
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1 min-h-[2.5em] md:min-h-[2.6em] xl:min-h-[1.3em] mb-6 xl:mb-8"
          >
            <span className="sr-only">Anuj Varshney, Full Stack Developer</span>
            <span aria-hidden="true">
              {text}
              <Cursor cursorColor="#fed43a" />
            </span>
          </motion.h1>
          {/* subtitle */}
          <motion.p
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm sm:max-w-md xl:max-w-xl mx-auto xl:mx-0 mb-8 xl:mb-12"
          >
            3+ years of experience building scalable web apps, DApps and
            real-time systems with the MERN stack, Next.js, TypeScript and
            Web3. Transforming ideas into digital reality.
          </motion.p>
          {/* buttons */}
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex items-center justify-center xl:justify-start gap-x-4 sm:gap-x-8"
          >
            <ProjectBtn />
            <Link href="/contact" className="btn-outline px-6 sm:px-8">
              Let&apos;s talk
            </Link>
          </motion.div>
        </div>
      </div>
      {/* image */}
      <div className="w-[1200px] h-full absolute right-0 bottom-0 pointer-events-none xl:pointer-events-auto">
        {/* particles*/}
        {!reduceMotion && <ParticlesContainer />}
        {/* Avatar image */}
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="hidden xl:block w-full h-full max-w-[1200px] max-h-[680px] absolute bottom-0 right-[1%] pointer-events-none"
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
