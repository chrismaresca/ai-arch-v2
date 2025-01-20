// Next and React
import React from "react";
import Link from "next/link";

// Format Date
import { formatDate } from "@/lib/formatDate";

// Shadcn UI
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Author } from "@/types/cms.types";

type ArticleCardProps = {
  title: string;
  slug: string;
  tagName: string;
  dateUpdated: Date;
  author: Author;
  delay?: number;
};

export default function ArticleCard({ title, slug, tagName, dateUpdated, author, delay }: ArticleCardProps) {
  const authorImage = author.image;



  return (
    <Link href={`/articles/${slug}`} className={`w-full rounded-xl flex justify-between px-4 py-6 items-center bg-secondary/80 hover:bg-secondary border border-gray-100 dark:hover:bg-neutral-800/50 hover:cursor-pointer group intersect-once intersect:motion-preset-slide-up intersect:motion-translate-y-in-100 motion-duration-[2s] motion-ease-spring-smooth motion-delay-[${delay}ms]`}>
      <div className="flex flex-col w-[18rem] md:w-[25rem] lg:w-[34rem]">
        <div className="line-clamp-2 flex-grow text-balance">
          <span className="text-foreground dark:text-white text-sm tracking-tight">{title}</span>
        </div>
        <div className="block mt-2 lg:hidden text-muted-foreground text-xs tracking-tighter">{tagName}</div>
      </div>
      <div className="hidden lg:block text-muted-foreground text-xs lg:flex-shrink-0 lg:text-center tracking-tighter">{tagName}</div>
      <div className="flex flex-col lg:flex-row items-end lg:items-center gap-2 ml-4 flex-shrink-0">
        <div className="text-muted-foreground text-xs whitespace-nowrap tracking-tighter lg:hidden">{formatDate(dateUpdated)}</div>
        <Avatar className="w-6 h-6 grayscale-[50%] hidden lg:block">
          <AvatarImage alt="Author" src={authorImage} className="w-6 h-6" />
          <AvatarFallback>
            {author.firstName.charAt(0)}
            {author.lastName.charAt(0)}
          </AvatarFallback>
        </Avatar>
      </div>
    </Link>
  );
}
