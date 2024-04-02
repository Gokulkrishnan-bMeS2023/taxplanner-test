import React, { ReactNode } from "react";
import { motion } from "framer-motion";

type AnimatedTextProp = {
  children: ReactNode;
};

const AnimationBox = ({ children }: AnimatedTextProp) => {
  const containerVariants = {
    hidden: { opacity: 0, y: "25%" },
    visible: { opacity: 1, y: 0, transition: { duration: 0.50 } },
  };

  return (
    <motion.div initial="hidden" animate="visible" variants={containerVariants}>
      {children}
    </motion.div>
  );
};

export default AnimationBox;
