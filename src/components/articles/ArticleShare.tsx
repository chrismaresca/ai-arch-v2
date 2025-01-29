"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const FacebookShare = ({ url }: { url: string }) => {
  console.log(url);

  const encodedUrl = encodeURIComponent(url);

  const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
  return (
    <Button variant="outline" className="text-muted-foreground hover:text-foreground" asChild>
      <Link href={facebookShareUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
        <svg className="mr-2 w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
          <path fillRule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clipRule="evenodd" />
        </svg>
        Share
      </Link>
    </Button>
  );
};

const TwitterShare = ({ url, text }: { url: string; text: string }) => {
  const encodedUrl = encodeURIComponent(url);
  const encodedText = encodeURIComponent("Check out this article: \n\n" + text + "\n\n");
  const twitterShareUrl = `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedText}`;
  return (
    <Button variant="outline" className="text-muted-foreground hover:text-foreground">
      <Link href={twitterShareUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
        <svg className="mr-2 w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
          <path fill="currentColor" d="M12.186 8.672 18.743.947h-2.927l-5.005 5.9-4.44-5.9H0l7.434 9.876-6.986 8.23h2.927l5.434-6.4 4.82 6.4H20L12.186 8.672Zm-2.267 2.671L8.544 9.515 3.2 2.42h2.2l4.312 5.719 1.375 1.828 5.731 7.613h-2.2l-4.699-6.237Z" />
        </svg>
        Tweet
      </Link>
    </Button>
  );
};

const CopyLink = ({ url }: { url: string }) => {
  const { toast } = useToast();

  const handleCopy = async () => {
    await navigator.clipboard.writeText(url);
    toast({
      title: "Link copied to clipboard!",
      description: "You can now share this link with your friends.",
    });
  };

  return (
    <Button variant="outline" className="text-muted-foreground hover:text-foreground" onClick={handleCopy}>
      <span className="inline-flex items-center">
        <svg className="mr-2 w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 19 19">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.013 7.962a3.519 3.519 0 0 0-4.975 0l-3.554 3.554a3.518 3.518 0 0 0 4.975 4.975l.461-.46m-.461-4.515a3.518 3.518 0 0 0 4.975 0l3.553-3.554a3.518 3.518 0 0 0-4.974-4.975L10.3 3.7" />
        </svg>
        Copy link
      </span>
    </Button>
  );
};

type ArticleShareProps = {
  path: string;
  title: string;
};

export const ArticleShare = ({ path, title }: ArticleShareProps) => {
  const url = `${process.env.NEXT_PUBLIC_URL}${path}`;

  return (
    <div className="flex lg:items-center space-x-4 pt-3 pb-6 lg:justify-center align-center">
      <FacebookShare url={url} />
      <TwitterShare url={url} text={title} />
      <CopyLink url={url} />
    </div>
  );
};
