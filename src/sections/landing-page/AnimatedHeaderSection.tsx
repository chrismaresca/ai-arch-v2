"use client";

import React, { useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "motion/react";

// interface CursorBlinkerProps {
//   isTypingDone: boolean;
// }

// export const CursorBlinker = ({ isTypingDone }: CursorBlinkerProps) => {
//   const cursorVariants = {
//     blinking: {
//       opacity: [0, 1, 1, 0],
//       transition: {
//         duration: 1.5,
//         repeat: Infinity,
//         ease: "easeInOut",
//         times: [0, 0.5, 0.5, 1],
//         repeatType: "reverse" as const,
//       },
//     },
//     hidden: {
//       opacity: 0,
//       transition: {
//         duration: 0.5,
//         ease: "easeOut",
//       },
//     },
//   };

//   return (
//     <motion.div
//       variants={cursorVariants}
//       animate={isTypingDone ? "hidden" : "blinking"}
//       // Adjust sizing to your preference; h-[1em] helps match typical text line-height
//       className="inline-block w-[2px] h-[1em] bg-black ml-1.5 align-text-top mt-1"
//     />
//   );
// };

export default function AnimatedHeaderSection() {
  const HEADER_TEXT = "AI architects for your startup";
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) => HEADER_TEXT.slice(0, latest));

  useEffect(() => {
    const controls = animate(count, HEADER_TEXT.length, {
      type: "tween",
      duration: 1.25,
      ease: "easeInOut",
      delay: 0.65,
    });
    return controls.stop;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex justify-center lg:h-12">
      
      <h1 data-testid="animated-header" className="text-4xl lg:text-5xl font-medium text-center text-black">
        <span className="lg:hidden">AI architects for your startup</span>
        <span className="hidden lg:inline">
          <motion.span>{displayText}</motion.span>
          {/* <CursorBlinker isTypingDone={isTypingDone} /> */}
        </span>
      </h1>
    </div>
  );
}
