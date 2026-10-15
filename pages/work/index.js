import ProjectCarousel from "../../components/ProjectCarousel";
import Bulb from "../../components/Bulb";
import Seo from "../../components/Seo";

// framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Work = () => {
  return (
    <div className="page-section">
      <Seo
        title="Work"
        path="/work"
        description="Selected work by Anuj Varshney: the Equitty One market news app (Google Play and App Store), Web3 dashboards, DApps, event platforms and company websites."
      />
      <div className="container mx-auto relative z-20">
        <div className="flex flex-col xl:flex-row xl:items-center gap-x-12">
          {/* text */}
          <div className="text-center flex xl:w-[30vw] flex-col xl:text-left mb-6 xl:mb-0 shrink-0">
            <motion.h1
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2"
            >
              My work <span className="text-accent">.</span>
            </motion.h1>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="max-w-[400px] mx-auto xl:mx-0"
            >
              Building the real-time backend behind the Equitty One app at
              Inriser. Before that: DeFi and NFT DApps with Web3.js and The
              Graph, 15+ smart contract audits, SaaS APIs and fast React and
              Next.js web apps.
            </motion.p>
          </div>
          {/* projects, scrolled sideways */}
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full min-w-0 xl:max-w-[65%]"
          >
            <ProjectCarousel />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Work;
