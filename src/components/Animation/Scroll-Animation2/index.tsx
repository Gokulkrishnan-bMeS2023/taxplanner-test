import { motion, useInView, useScroll } from "framer-motion";
import { useRef, ReactNode } from "react";

interface AnimationProps {
  children: ReactNode;
}

export default function ScrollAnimation({ children }: AnimationProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ container: containerRef });
  const skillRef = useRef<HTMLDivElement>(null);
  const isSkillRefInView = useInView(skillRef, { once: true });

  const containerVariants = {
    hidden: { opacity: 0, y: "75%" },
    visible: { opacity: 1, y: 0, transition: { duration: 0.75 } },
  };

  return (
    <motion.div ref={containerRef} style={{ height: "100%" }}>
      <motion.div ref={skillRef} style={{ height: "100%" }}>
        <motion.div
          style={{ height: "100%" }}
          initial="hidden"
          animate={isSkillRefInView ? "visible" : {}}
          variants={containerVariants}
        >
          {children}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
