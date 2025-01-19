import {
  EXPERIENCE_TEXT_PRE,
  EXPERIENCE_TEXT_MAIN,
  // EXPERIENCE_CTA,
  // CALENDAR_LINK
} from "@/constants";

// // Icons
// import { CircleUserRound } from "lucide-react";
// import { ArrowRight } from "lucide-react";

// // Shadcn
// import { Button } from "@/components/ui/button";
// import Link from "next/link";

export default function ExperienceSection() {
  return (
    <div className="mt-4 flex flex-col items-center gap-3 max-w-xl">
      <p className="text-sm">
        <span className="font-semibold">{EXPERIENCE_TEXT_PRE} </span>
        <span className="text-muted-foreground tracking-tighter">{EXPERIENCE_TEXT_MAIN}</span>
      </p>

      {/* TODO:  once we have a logos, add it here */}
      {/* <div className="flex items-center gap-2 mt-4 group">
        <div className="flex -space-x-2">
          <CircleUserRound className="h-8 w-8 text-muted-foreground group-hover:text-foreground" />
          <CircleUserRound className="h-8 w-8 text-muted-foreground group-hover:text-foreground" />
        </div>
        <Link href={CALENDAR_LINK} target="_blank" className="text-sm font-medium tracking-tighter text-black transition-opacity flex items-center gap-1 group-hover">
          <span className="font-semibold underline decoration-1">Talk to Chris + Karn{"  "}</span> <span className="text-muted-foreground"> (co-founders)</span>
          <span className="ml-1">→</span>
        </Link>
      </div> */}
    </div>
  );
}
