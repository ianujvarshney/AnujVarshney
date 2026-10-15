import { useEffect, useState } from 'react';
import { useReducedMotion } from 'framer-motion';

// true when the visitor asks for reduced motion. Only reported after mount,
// so the server HTML and the first client render always match.
export const useReduceMotion = () => {
  const reduceMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted && !!reduceMotion;
};
