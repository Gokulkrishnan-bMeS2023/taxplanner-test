import { motion, useInView, useScroll } from "framer-motion";
import { useRef, ReactNode } from "react";
interface AnimationProps {
  children: ReactNode;
}
export default function SideAnimation({ children }: AnimationProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ container: containerRef });
  const skillRef = useRef<HTMLDivElement>(null);
  const isSkillRefInView = useInView(skillRef, { once: true });
  const containerVariants = {
    hidden: { opacity: 0, x: "25%" }, // Start off-screen to the right
    visible: { opacity: 1, x: 0, transition: { duration: 0.75 } }, // Move to center
  };
  return (
    <>
      <motion.div ref={containerRef} style={{overflow:"hidden"}}>
        <motion.div ref={skillRef}>
          <motion.div
            initial="hidden"
            animate={isSkillRefInView ? "visible" : {}}
            variants={containerVariants}
          >
            {children}
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
}