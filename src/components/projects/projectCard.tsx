// Next and React
import React from "react";
import Link from "next/link";

// Format Date
import { formatDate } from "@/lib/formatDate";

// Types
import { Project } from "@/types";

export default function ProjectCard({ title, subtitle, projectUrl, target, dateUpdated, delay }: Project) {
  return (
    <Link href={projectUrl} target={target} className={`w-full rounded-xl flex justify-between px-4 py-6 items-center hover:bg-secondary border border-gray-100 dark:hover:bg-neutral-800/50 group intersect-once intersect:motion-preset-slide-up motion-duration-[2s] motion-ease-spring-smooth motion-delay-[${delay}ms]`}>
      <div className="flex flex-col w-2/3">
        <div className="line-clamp-2 flex-grow text-balance">
          <span className="text-foreground dark:text-white text-sm md:text-base tracking-tight">{title}</span>
        </div>
        <div className="block mt-2 text-muted-foreground text-xs md:text-sm tracking-tighter !line-clamp-4">{subtitle}</div>
      </div>
      <div className="flex flex-col items-end gap-2 ml-0 mr-2 flex-shrink-0 mt-1">
        <div className="text-muted-foreground text-xs whitespace-nowrap tracking-tighter">{formatDate(dateUpdated)}</div>

      </div>
    </Link>
  );
}
