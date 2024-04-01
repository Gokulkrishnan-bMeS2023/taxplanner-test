
import React, { useState, useEffect, ReactNode } from 'react';
import { motion, useAnimation } from 'framer-motion';

interface Props{
  children:ReactNode
}
const ScrollRevealText = ({ children }:Props) => {
  const controls = useAnimation();
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(1000);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    setIsVisible(currentScrollY > scrollY);
    setScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollY]);

  useEffect(() => {
    if (isVisible) {
      controls.start({
        opacity: 1,
        x: 0,
        transition: { duration: 0.5, type: 'tween' },
      });
    } else {
      controls.start({
        opacity: 0,
        x: 100,
        transition: { duration: 0.5, type: 'tween' },
      });
    }
  }, [isVisible, controls]);

  return (
    <motion.div
      style={{ overflow: 'hidden' }}
      initial={{ opacity: 0, x: 100 }}
      animate={controls}
    >
      {children}
    </motion.div>
  );
};

export default ScrollRevealText;