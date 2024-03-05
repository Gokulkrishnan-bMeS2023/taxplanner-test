import React, { ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

type PageWrapperProps={
    children:ReactNode
}
const PageWrapper: React.FC<PageWrapperProps> = ({ children }: PageWrapperProps) => {
  return (
    <>
      <AnimatePresence>
        <motion.div
        initial={{opacity:0,y:15}}
        animate={{opacity:1,y:0}}
        exit={{opacity:0,y:15}}
        transition={{delay:0.25}}
        >{children}</motion.div>
      </AnimatePresence>
    </>
  );
};

export default PageWrapper;
