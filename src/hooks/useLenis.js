import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

const useLenis = (options) => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easeOutExpo
      smooth: true,
      ...options,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    
    requestAnimationFrame(raf);

    // It's good practice to clean up the Lenis instance on unmount
    return () => {
      lenis.destroy();
    };
  }, [options]);
};

export default useLenis;