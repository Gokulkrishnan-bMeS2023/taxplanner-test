import React, { ReactNode } from "react";
import { motion } from "framer-motion";

type AnimatedTextProp = {
  children: ReactNode;
};

const AnimatedText = ({ children }: AnimatedTextProp) => {
  const containerVariants = {
    hidden: { opacity: 0, y: "-75%" },
    visible: { opacity: 1, y: 0, transition: { duration: 0.25 } },
  };

  return (
    <motion.div initial="hidden" animate="visible" variants={containerVariants}>
      {children}
    </motion.div>
  );
};

export default AnimatedText;
