// React and Next Imports
import React, { Suspense } from "react";
import { Metadata } from "next";

// Constants
import { ARTICLES_DEFAULT_METADATA, ARTICLES_DESC, ARTICLES_MOBILE_TITLE, ARTICLES_TITLE, BRAND_ID } from "@/constants";

// Data Fetching
import { fetchArticlesByBrand } from "@/data/getPosts";
import { fetchTagsByBrand } from "@/data/getTags";
import { getTagMetadataBySlug } from "@/data/getMetadata";

// Types
import { Article, Tag, ArticleResponse, NextParamsAndSearchParams, TagResponse } from "@/types";

// Components
import ArticleListClient from "@/sections/articles/ArticlesList.client";

// -----------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------
// Metadata

export async function generateMetadata(props: NextParamsAndSearchParams): Promise<Metadata> {
  const searchParams = await props.searchParams;
  const tagName = searchParams.tags?.split(",").slice(-1)[0] || null;

  if (tagName) {
    const tagMetadata = await getTagMetadataBySlug(tagName);
    return tagMetadata;
  } else {
    return ARTICLES_DEFAULT_METADATA;
  }
}

// -----------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------
// Page

export default async function ArticlesPage() {
  if (!BRAND_ID) {
    throw new Error("No brand ID found. You must set the BRAND_ID environment variable.");
  }

  const articlesResponse: ArticleResponse = await fetchArticlesByBrand(BRAND_ID);
  const tagsResponse: TagResponse = await fetchTagsByBrand(BRAND_ID);

  const articleObjects: Article[] = articlesResponse?.docs ?? [];
  const tagObjects: Tag[] = tagsResponse?.docs ?? [];


  return (
    <>
      <div className="min-h-screen max-w-7xl sm:px-8 mb-12 motion-blur-in-sm motion-duration-[800ms] motion-ease-in-out">
        <div className="relative px-4 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-2xl lg:max-w-5xl flex flex-col flex-grow">
            <header className="mx-2 md:mx-0 md:max-w-[39rem] motion-ease-in">
              <h1 className="hidden md:block text-4xl font-bold tracking-tighter text-zinc-800 dark:text-zinc-100 leading-[2.75rem] sm:leading-[3.5rem]">{ARTICLES_TITLE}</h1>
              <h1 className="md:hidden text-2xl max-w-[28rem] font-bold tracking-tighter text-zinc-800 dark:text-zinc-100 leading-[2.5rem]">{ARTICLES_MOBILE_TITLE}</h1>
              <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400 tracking-tighter leading-7 mr-4"> {ARTICLES_DESC}</p>
            </header>
            <Suspense fallback={<div>Loading Articles...</div>}>
              <ArticleListClient articles={articleObjects} tags={tagObjects} />
            </Suspense>
          </div>
        </div>
      </div>
    </>
  );
}
