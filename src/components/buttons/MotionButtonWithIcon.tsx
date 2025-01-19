import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import Link from "next/link";

// Shadcn
import { Button } from "@/components/ui/button";

// Icons
import { ArrowRightIcon } from "lucide-react";

type MotionButtonWithCustomIconProps = {
  size?: "sm" | "lg" | "default" | "icon" | null | undefined;
  fromColor?: string;
  toColor?: string;
  CustomIcon?: React.ElementType;
};

export function MotionButtonWithCustomIcon({
  size = "lg",
  fromColor = "bg-black",
  toColor = "bg-white",
  CustomIcon = ArrowRightIcon,
}: MotionButtonWithCustomIconProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  const textOptions = [
    { text: "View Our Projects", href: "/projects" },
    { text: "Read Our Blog", href: "/articles" }
  ];

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (!isHovered) {
      timer = setInterval(() => {
        setCurrentTextIndex((prev) => (prev + 1) % textOptions.length);
      }, 2500);
    }
    return () => clearInterval(timer);
  }, [textOptions.length, isHovered]);

  const getIconSize = () => {
    switch (size) {
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
    <motion.div
      className={`relative ${fromColor} hover:${fromColor} z-0 overflow-hidden animate-fade-up delay-700 duration-1000 rounded-md group`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      transition={{
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }}
    >
      <Button
        size={size}
        className="bg-inherit hover:bg-transparent relative z-20 w-[200px] group-hover:text-black transition-all duration-400 ease-[0.22,1,0.36,1]"
      >
        <Link href={textOptions[currentTextIndex].href} className="flex items-center justify-between w-full">
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.span
                key={currentTextIndex}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{
                  duration: 0.3,
                  ease: "easeInOut"
                }}
                className="block text-center tracking-tight"
              >
                {textOptions[currentTextIndex].text}
              </motion.span>
            </AnimatePresence>
          </div>
          <CustomIcon
            className={`transition-all duration-700 ease-[0.22,1,0.36,1] ${getIconSize()} group-hover:text-black flex-shrink-0`}
            style={{ 
              transform: isHovered ? "translateX(8px)" : "translateX(0)",
              transition: "all 0.5s cubic-bezier(0.22, 1, 0.36, 1)"
            }}
          />
        </Link>
      </Button>
      <motion.div
        className={`absolute inset-0 ${toColor} rounded-md z-10 group-hover:border-2 group-hover:border-black transition-[border] ease-[0.22,1,0.36,1]`}
        initial={{ y: "100%" }}
        animate={{ y: isHovered ? "0%" : "100%" }}
        exit={{ y: "100%" }}
        transition={{
          duration: 0.2,
          ease: [0.22, 1, 0.36, 1],
        }}
      />
    </motion.div>
  );
}
