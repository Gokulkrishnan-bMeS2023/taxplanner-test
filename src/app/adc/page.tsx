"use client";
import ScrollRevealText from "@/components/Animation/LeftToRight-Animation";
// import React from "react";
// import { motion } from "framer-motion";
// const LeftRightAnimation = () => {
//   return (
//     <div>
//       <motion.div
//         initial={{ x: '-100vw' }} // Initial position, off-screen left
//         animate={{ x: 0 }} // Final position, at the center
//         transition={{ type: 'spring', stiffness: 120 }} // Animation transition
//         style={{ width: '100px', height: '100px', backgroundColor: 'blue' }} // Custom styles
//       />
//     </div>
//   );
// };

// export default LeftRightAnimation;

// const LeftToRightTextAnimation = () => {
//   return (
//     <div
//       style={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         height: "100vh",
//       }}
//     >
//       <motion.div
//         initial={{ x: "-100vw" }} // Initial position, off-screen left
//         animate={{ x: 0 }} // Final position, at the center
//         transition={{ type: "spring", stiffness: 120 }} // Animation transition
//         style={{ fontSize: "24px" }} // Custom styles
//       >
//         Framer Motion Left to Right Animation
//       </motion.div>
//     </div>
//   );
// };

// export default LeftToRightTextAnimation;

// const LeftToRightHiddenTextAnimation = () => {
//   return (
//     <div
//       style={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         height: "100vh",
//       }}
//     >
//       <motion.div
//         initial={{ x: "-100vw", opacity: 0 }} // Initial position, off-screen left and hidden
//         animate={{ x: 0, opacity: 1 }} // Final position, at the center and visible
//         transition={{ type: "spring", stiffness: 120 }} // Animation transition
//         style={{ fontSize: "24px" }} // Custom styles
//       >
//         Framer Motion Left to Right Animation
//       </motion.div>
//     </div>
//   );
// };

// export default LeftToRightHiddenTextAnimation;

// import React, { ReactNode, useEffect, useRef } from 'react';
// import { motion, useAnimation } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// interface Props{
//   children:ReactNode
// }
// const TextAnimation = ({ children }:Props) => {
//   const controls = useAnimation();
//   const { ref, inView } = useInView();

//   useEffect(() => {
//     if (inView) {
//       controls.start('visible');
//     }
//   }, [controls, inView]);

//   return (
//     <motion.div
//       ref={ref}
//       initial="hidden"
//       animate={controls}
//       variants={{
//         visible: { opacity: 1, x: 0 },
//         hidden: { opacity: 0, x: -50 },
//       }}
//       transition={{ duration: 0.5 }}
//     >
//       {children}
//     </motion.div>
//   );
// };

// const App = () => {
//   return (
//     <div>
//       <TextAnimation>
//         <h1>This is the first text</h1>
//       </TextAnimation>
//       <TextAnimation>
//         <h1>This is the second text</h1>
//       </TextAnimation>
//       <TextAnimation>
//         <h1>This is the third text</h1>
//       </TextAnimation>
//       <TextAnimation>
//         <h1>This is the first text</h1>
//       </TextAnimation>
//       <TextAnimation>
//         <h1>This is the second text</h1>
//       </TextAnimation>
//       <TextAnimation>
//         <h1>This is the third text</h1>
//       </TextAnimation><TextAnimation>
//         <h1>This is the first text</h1>
//       </TextAnimation>
//       <TextAnimation>
//         <h1>This is the second text</h1>
//       </TextAnimation>
//       <TextAnimation>
//         <h1>This is the third text</h1>
//       </TextAnimation>
//       <TextAnimation>
//         <h1>This is the second text</h1>
//       </TextAnimation>
//       <TextAnimation>
//         <h1>This is the third text</h1>
//       </TextAnimation>
//     </div>
//   );
// };

// export default App;

// import { motion } from "framer-motion";

// const MyComponent = () => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: -50 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//     >
//       Hello, world!
//     </motion.div>
//   );
// };

// export default MyComponent

import React from "react";

const page = () => {
  return (
    <div style={{height:"100vh"}}>
      <ScrollRevealText>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus
          deserunt, nesciunt cumque in architecto, nisi necessitatibus odio
          sequi, possimus tenetur nemo aspernatur harum! Nam obcaecati, quidem
          sunt omnis quia ea?
        </p>
      </ScrollRevealText>
    </div>
  );
};

export default page;
