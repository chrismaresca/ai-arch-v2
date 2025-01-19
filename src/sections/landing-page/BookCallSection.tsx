'use client'
import React from "react";

// Constants
import { BOOK_CALL_CTA, CALENDAR_LINK } from "@/constants";


// Our components
import { MotionButtonWithCustomIcon } from "@/components/buttons/MotionButtonWithIcon";
import { MotionButton } from "@/components/buttons/MotionButton";
import SocialProof from "@/components/landing-page/SocialProof";


// const ScrollArrow = () => {
//   const scrollToProjects = () => {
//     const projectsSection = document.getElementById('projects');
//     if (projectsSection) {
//       projectsSection.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   return (
//     <div className="flex flex-col items-center gap-2 py-8">
//       <span className="text-sm text-muted-foreground">View Projects</span>
//       <motion.div
//         onClick={scrollToProjects}
//         className="cursor-pointer"
//         whileHover={{ scale: 1.1 }}
//         whileTap={{ scale: 0.9 }}
//         animate={{ y: [0, 10, 0] }}
//         transition={{ repeat: Infinity, duration: 2 }}
//       >
//         <svg 
//           width="24" 
//           height="24" 
//           viewBox="0 0 24 24" 
//           fill="none" 
//           stroke="currentColor" 
//           strokeWidth="2" 
//           strokeLinecap="round" 
//           strokeLinejoin="round"
//         >
//           <path d="M12 5v14M19 12l-7 7-7-7"/>
//         </svg>
//       </motion.div>
//     </div>
//   );
// };

export default function BookCallSection() {
  return (
    <div className="flex flex-col items-center gap-6">
      <div className="flex items-center gap-3 motion-opacity-in-0 motion-translate-y-in-100 motion-blur-in-md motion-duration-[800ms] motion-delay-300 motion-ease-in-out">
        <MotionButton href={CALENDAR_LINK} buttonText={BOOK_CALL_CTA} size="default" />
        <div className="hidden md:block">
          <MotionButtonWithCustomIcon size="default" />
        </div>
      </div>

      <div className="mt-4">
        <SocialProof />
      </div>


      {/* <div className="flex flex-col items-center gap-2 py-8">
        <ScrollArrow />
      </div> */}

    </div>
  );
}
