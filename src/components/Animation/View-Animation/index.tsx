import { Box} from "@chakra-ui/react";
import { motion, useInView, useScroll } from "framer-motion";
import { useRef, ReactNode } from "react";

interface AnimationProps {
  children: ReactNode;
  duration?: number;
}

export default function ViewAnimation({ children, duration }: AnimationProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ container: containerRef });
  const skillRef = useRef<HTMLDivElement>(null);
  const isSkillRefInView = useInView(skillRef, { once: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: duration } },
  };

  return (
    <Box width={{ base: "100%", md: "100%", lg: "50" }} maxHeight={"100%"}>
      <motion.div ref={containerRef} style={{ width: "100%", height: "100%" }}>
        <motion.div ref={skillRef} style={{ width: "100%", height: "100%" }}>
          <motion.div
            initial="hidden"
            animate={isSkillRefInView ? "visible" : {}}
            variants={containerVariants}
            style={{ width: "100%", height: "100%" }}
          >
            {children}
          </motion.div>
        </motion.div>
      </motion.div>
    </Box>
  );
}
