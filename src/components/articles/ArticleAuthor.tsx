// React
import React from "react";

// Next.js
import Link from "next/link";

// Shadcn Components
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

// Lucide Icons
import { Author } from "@/types";
import { Github, X, Linkedin } from "../social-icons";

// Constants

export function ArticleAuthor({ author }: { author: Author }) {
  // TODO: Fix this
  const LINKEDIN_URL = `https://www.linkedin.com/in/${author.linkedInHandle}`;
  const GITHUB_URL = `https://github.com/${author.githubHandle}`;
  const TWITTER_URL = `https://x.com/${author.twitterHandle}`;

  return (
    <Card className="px-2 py-4 mb-6 rounded-xl bg-card border dark:border-gray-700">
      <CardHeader className="pb-4">
        <div className="flex flex-col xl:flex-row xl:items-center xl:gap-12 mb-4">
          <Link href={LINKEDIN_URL} target="_blank" rel="noreferrer" className="flex items-center">
            <div className="mr-3 shrink-0">
              <Avatar className="w-10 h-10 grayscale-[20%] mt-1">
                <AvatarImage alt="Author" src={author.image} className="w-10 h-10" />
                <AvatarFallback>
                  {author.firstName.charAt(0)}
                  {author.lastName.charAt(0)}
                </AvatarFallback>
              </Avatar>
            </div>
            <div className="mr-3">
              <CardTitle className="text-gray-900 dark:text-white">
                <div className="font-bold mt-3 ml-1">
                  {author.firstName} {author.lastName}
                </div>
              </CardTitle>
              <span className="text-sm text-nowrap ml-1">{author.title}</span>
            </div>
          </Link>
        </div>
      </CardHeader>
      <CardContent className="pb-0 space-y-6">

        {/* Start social links */}
        <div className="flex items-center">
          <p className="text-sm font-bold text-gray-900 uppercase dark:text-white">Follow Me On:</p>
          <div className="flex items-center space-x-2 ml-6">
            <SocialLink href={LINKEDIN_URL} icon={<Linkedin />} label="LinkedIn" />
            <SocialLink href={GITHUB_URL} icon={<Github />} label="GitHub" />
            <SocialLink href={TWITTER_URL} icon={<X />} label="Twitter" />
          </div>
          </div>
        {/* End social links */}

        {/* Start bio */}
        <div>
          <p className="text-sm font-bold text-gray-900 uppercase dark:text-white">Bio:</p>
          <p className="mb-4 text-sm text-gray-500 dark:text-gray-400 mt-2">{author.bio}</p>
        </div>
        {/* End bio */}

        {/* Start location */}
        <div className="mb-12">
          <p className="text-sm font-bold text-gray-900 uppercase dark:text-white">Location</p>
          <p className="mb-3 text-sm text-gray-500 dark:text-gray-400 mt-2">{author.location}</p>
          {!author.isHuman && (
            <>
              <p className="text-sm font-bold text-gray-900 uppercase dark:text-white">I Was Created On:</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">{new Date(author.dateCreated).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</p>
            </>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

export default ArticleAuthor;

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <Link href={href} target="_blank" rel="noreferrer" className="group">
      <span className="sr-only">{label}</span>
      <div className="p-1 transition-colors duration-200">{icon}</div>
    </Link>
  );
}
