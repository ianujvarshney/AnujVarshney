import ServiceGrid from "../../components/ServiceGrid";
import Bulb from "../../components/Bulb";
import Seo from "../../components/Seo";

// framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Services = () => {
  return (
    <div className="page-section">
      <Seo
        title="Services"
        path="/services"
        description="Full-stack web development, blockchain and smart contracts, API and cloud integration, frontend optimization and CI/CD by Anuj Varshney."
      />
      <div className="container mx-auto relative z-20">
        <div className="flex flex-col xl:flex-row gap-x-12">
          {/* text */}
          <div className="text-center flex xl:w-[30vw] flex-col xl:text-left mb-8 xl:mb-0">
            <motion.h1
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 xl:mt-8"
            >
              My services <span className="text-accent">.</span>
            </motion.h1>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 max-w-[400px] mx-auto xl:mx-0"
            >
              Full-stack, real-time and Web3 development with the MERN stack,
              Next.js and TypeScript: from smart contracts, APIs and data
              pipelines to fast, polished interfaces.
            </motion.p>
          </div>
          {/* cards */}
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[65%]"
          >
            <ServiceGrid />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Services;
