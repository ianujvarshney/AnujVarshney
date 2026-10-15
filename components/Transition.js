//framer motion
import { motion } from 'framer-motion'

import { useReduceMotion } from '../lib/motion'

//variants
const transitionVariants = {
  initial: {
    x: '100%',
    width: '100%'
  },
  animate: {
    x: '0%',
    width: '0%'
  },
  exit: {
    x: ['0%', '100%'],
    width: ['0%', '100%']
  }
}

// three layered curtains, slightly staggered
const layers = [
  { className: 'z-30 bg-[#2e2257]', delay: 0.1 },
  { className: 'z-20 bg-[#3b2d71]', delay: 0.2 },
  { className: 'z-10 bg-[#4b3792]', delay: 0.3 },
]

const Transition = () => {
  // no full-screen curtains for people who ask for less motion
  if (useReduceMotion()) return null

  return (
    <>
      {layers.map((layer) => (
        <motion.div
          key={layer.className}
          aria-hidden="true"
          className={`fixed top-0 bottom-0 right-full w-screen h-screen pointer-events-none ${layer.className}`}
          variants={transitionVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ delay: layer.delay, duration: 0.4, ease: 'easeInOut' }}
        />
      ))}
    </>
  );
};

export default Transition;
