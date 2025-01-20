"use client";

import { useState, useEffect } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { motion, AnimatePresence } from "motion/react";

const builders = [
  {
    name: "MIT",
    image: "https://storage.googleapis.com/ai-cms-v2/ai-arch/mit-2.png",
  },
  {
    name: "Y Combinator",
    image: "https://storage.googleapis.com/ai-cms-v2/ai-arch/cornell.png",
  },
  {
    name: "Meta",
    image: "https://storage.googleapis.com/ai-cms-v2/ai-arch/meta.png",
  },
  {
    name: "Cornell",
    image: "https://storage.googleapis.com/ai-cms-v2/ai-arch/yc.png",
  }
];

export default function SocialProof() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % builders.length);
    }, 4000); // Change name every 4 seconds to allow for animation and pause

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="inline-flex items-center gap-2 rounded-full text-sm px-4 py-2">
      <ul className=" flex">
        {builders.map((builder, i) => (
          <li key={i} className="w-10 h-10 rounded-full -ml-4 first:ml-0 overflow-hidden border-2 border-background">
            <Avatar className="w-full h-full">
              <AvatarImage src={builder.image} alt={`${builder.name}'s avatar`} className="object-cover" />
              <AvatarFallback>{builder.name[0]}</AvatarFallback>
            </Avatar>
          </li>
        ))}
        <li className="text-xs font-bold leading-none mt-1 -ml-0">+12</li>
      </ul>
      <div className="flex flex-col ml-2">
        <p className="leading-none text-nowrap text-xs sm:text-sm tracking-tight">Trusted by great builders from</p>
        <div className="relative h-5 font-bold overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ y: -20, opacity: 0 }}
              animate={{
                y: 0,
                opacity: 1,
                transition: {
                  y: { type: "spring", stiffness: 300, damping: 25 },
                  opacity: { duration: 0.2 },
                },
              }}
              exit={{
                y: 20,
                opacity: 0,
                transition: {
                  y: { duration: 0.2 },
                  opacity: { duration: 0.2 },
                },
              }}
              className="absolute whitespace-nowrap font-bold mt-[0.2rem]"
            >
              {builders[currentIndex].name}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
