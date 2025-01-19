import React from "react";
import { MDXRemote, MDXRemoteProps } from "next-mdx-remote/rsc";
import Image from "next/image";
import { cn } from "@/lib/utils";

import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

type ComponentProps = React.HTMLAttributes<HTMLElement> & { children?: React.ReactNode };

const H1: React.FC<ComponentProps> = ({ children, className, ...props }) => (
  <h1 {...props} className={cn("scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl !mt-8 !mb-4", className)}>
    {children}
  </h1>
);

const H2: React.FC<ComponentProps> = ({ children, className, ...props }) => (
  <h2 {...props} className={cn("scroll-m-20 !mt-8 pb-2 text-3xl font-semibold tracking-tight first:mt-0 !mb-4", className)}>
    {children}
  </h2>
);

const H3: React.FC<ComponentProps> = ({ children, className, ...props }) => (
  <h3 {...props} className={cn("scroll-m-20 !mt-6 text-xl font-semibold tracking-tight !mb-4", className)}>
    {children}
  </h3>
);

const H4: React.FC<ComponentProps> = ({ children, className, ...props }) => (
  <h4 {...props} className={cn("scroll-m-20 !mt-4 text-lg font-semibold tracking-tight !mb-2", className)}>
    {children}
  </h4>
);

const P: React.FC<ComponentProps> = ({ children, className, ...props }) => (
  <p {...props} className={cn("leading-7 !mt-3 [&:not(:first-child)]:!mt-3", className)}>
    {children}
  </p>
);

const A: React.FC<ComponentProps> = ({ children, className, ...props }) => (
  <a {...props} className={cn("font-medium underline underline-offset-4 !my-0", className)}>
    {children}
  </a>
);

const UL: React.FC<ComponentProps> = ({ children, className, ...props }) => (
  <ul {...props} className={cn("!my-3 ml-6 list-disc [&>li]:!mt-1", className)}>
    {children}
  </ul>
);

const OL: React.FC<ComponentProps> = ({ children, className, ...props }) => (
  <ol {...props} className={cn("!my-3 ml-6 list-decimal [&>li]:!mt-1", className)}>
    {children}
  </ol>
);

const LI: React.FC<ComponentProps> = ({ children, ...props }) => (
  <li {...props} className="!my-0">
    {children}
  </li>
);

const BLOCKQUOTE: React.FC<ComponentProps> = ({ children, className, ...props }) => (
  <blockquote {...props} className={cn("!mt-4 !mb-4 border-l-2 pl-6 italic", className)}>
    {children}
  </blockquote>
);

const HR: React.FC<ComponentProps> = (props) => <Separator {...props} className="!my-6" />;

const CODE: React.FC<ComponentProps> = ({ children, className, ...props }) => (
  <code {...props} className={cn("relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold !my-0", className)}>
    {children}
  </code>
);

const PRE: React.FC<ComponentProps> = ({ children, className, ...props }) => (
  <pre {...props} className={cn("!mb-4 !mt-4 overflow-x-auto rounded-lg border bg-black p-4", className)}>
    {children}
  </pre>
);

const TABLE: React.FC<ComponentProps> = ({ children, className, ...props }) => (
  <div className="!my-4 w-full overflow-y-auto">
    <table {...props} className={cn("w-full", className)}>
      {children}
    </table>
  </div>
);

const TH: React.FC<ComponentProps> = ({ children, className, ...props }) => (
  <th {...props} className={cn("border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right", className)}>
    {children}
  </th>
);

const TD: React.FC<ComponentProps> = ({ children, className, ...props }) => (
  <td {...props} className={cn("border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right", className)}>
    {children}
  </td>
);

const IMG: React.FC<React.ImgHTMLAttributes<HTMLImageElement>> = ({ alt, src, ...props }) => (
  <Image {...props} alt={alt || ""} src={src || ""} width={800} height={400} className="rounded-md border !my-4" />
);

const components = {
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  p: P,
  a: A,
  ul: UL,
  ol: OL,
  li: LI,
  blockquote: BLOCKQUOTE,
  hr: HR,
  code: CODE,
  pre: PRE,
  table: TABLE,
  th: TH,
  td: TD,
  img: IMG,
  Card,
  CardContent,
  Button,
};

interface CustomMDXProps extends Omit<MDXRemoteProps, "components"> {
  components?: MDXRemoteProps["components"];
}

export function CustomMDX({ components: userComponents, ...props }: CustomMDXProps) {
  return (
    <div className="prose dark:prose-invert max-w-none space-y-0 font-sans">
      <MDXRemote {...props} components={{ ...components, ...(userComponents || {}) }} />
    </div>
  );
}

