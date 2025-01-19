"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

// Motion
import { motion } from "motion/react";

// Shadcn
import { Button } from "../ui/button";

type MotionButtonProps = {
  buttonText: string;
  href: string;
  size?: "sm" | "lg" | "default" | "icon" | null | undefined;
  fromColor?: string;
  toColor?: string;
  hideOnMobile?: boolean;
};

export function MotionButton({ 
  buttonText, 
  href, 
  size = "lg",
  fromColor = "bg-blue-600",
  toColor = "bg-black",
  hideOnMobile = false
}: MotionButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // metaKey indicates the Command key on macOS
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        window.open(href, "_blank");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [href]);

  const getIconSize = () => {
    switch(size) {
      case "sm":
        return "h-[1.2rem] w-[1.2rem]";
      case "lg":
        return "h-[1.35rem] w-[1.35rem]";
      case "default":
        return "h-[1.2rem] w-[1.2rem]";
      default:
        return "h-[1.35rem] w-[1.35rem]";
    }
  };

  return (
    <motion.div className={`relative ${fromColor} hover:${fromColor} z-0 overflow-hidden rounded-md`} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <Button size={size} className="bg-inherit hover:bg-transparent relative z-20 px-4">
        {/* Clicking opens in a new tab, typically with focus. 
            Actual behavior may depend on user/browser settings. */}
        <Link href={href} target="_blank" className="flex items-center gap-2">
          {buttonText}

            <div className={`flex items-center gap-2 ml-2 ${hideOnMobile ? "hidden lg:flex" : ""}`}>
              <div className={`bg-white/25 border border-white/10 rounded flex items-center justify-center ${getIconSize()}`}>
                <p className="text-center text-white text-[14px] leading-none">⌘</p>
              </div>
              <div className={`bg-white/25 border border-white/10 rounded flex items-center justify-center px-2 ${getIconSize()}`}>
                <p className="text-center text-white text-[14px] leading-none">K</p>
              </div>
            </div>
      
        </Link>
      </Button>
      <motion.div className={`absolute inset-0 ${toColor} rounded-md z-10`} initial={{ y: "100%" }} animate={{ y: isHovered ? "0%" : "100%" }} transition={{ duration: 0.15, ease: "easeInOut" }} />
    </motion.div>
  );
}
