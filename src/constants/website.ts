import { Project } from "@/types";

// Copyright Year
export const COPYRIGHT_YEAR = "2025";

// NAVIGATION
export const SITE_NAV_LINKS = [
  { href: "/projects", label: "Projects" },
  { href: "/articles", label: "Blog" },
];

// -----------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------// -----------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------// -----------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------
// DEFAULT METADATA

const DEFAULT_METADATA_TITLE = "Chris Maresca";
const DEFAULT_METADATA_DESCRIPTION = "A space dedicated to building, learning, and exploring my curiosities.";
const DEFAULT_METADATA_URL = "www.chrismaresca.dev";

export const DEFAULT_METADATA = {
  title: DEFAULT_METADATA_TITLE,
  description: DEFAULT_METADATA_DESCRIPTION,
  openGraph: {
    title: DEFAULT_METADATA_TITLE,
    description: DEFAULT_METADATA_DESCRIPTION,
    type: "website",
    locale: "en_US",
    siteName: DEFAULT_METADATA_TITLE,
    url: DEFAULT_METADATA_URL,
  },
  twitter: {
    title: DEFAULT_METADATA_TITLE,
    description: DEFAULT_METADATA_DESCRIPTION,
  },
  alternates: {
    canonical: DEFAULT_METADATA_URL,
  },
};

// -----------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------// -----------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------// -----------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------
// ARTICLES

export const ARTICLES_TITLE = "Writing on the art of building exceptional AI-driven tools and applications.";
export const ARTICLES_MOBILE_TITLE = "Writing on the art of building exceptional AI-driven tools and applications.";

export const ARTICLES_DESC = "A collection of our thoughts, experiences, and learnings on artificial intelligence and the art of building.";
// -----------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------

// ARTICLES DEFAULT METADATA

const DEFAULT_ARTICLES_METADATA_TITLE = "Articles";
const DEFAULT_ARTICLES_METADATA_DESCRIPTION = "Articles about artificial intelligence and reflections on the art of building.";
const DEFAULT_ARTICLES_METADATA_URL = "/articles";

export const ARTICLES_DEFAULT_METADATA = {
  title: ARTICLES_TITLE,
  description: ARTICLES_DESC,
  openGraph: {
    title: DEFAULT_ARTICLES_METADATA_TITLE,
    description: DEFAULT_ARTICLES_METADATA_DESCRIPTION,
    url: DEFAULT_ARTICLES_METADATA_URL,
  },
  twitter: {
    title: DEFAULT_ARTICLES_METADATA_TITLE,
    description: DEFAULT_ARTICLES_METADATA_DESCRIPTION,
  },
  alternates: {
    canonical: DEFAULT_ARTICLES_METADATA_URL,
  },
};

// Solution Section
export const SOLUTION_TEXT_WHO = "We help founders build AI flywheels";
export const SOLUTION_TEXT_WHAT_v2 = "to raise capital, scale products, and dominate their markets.";

// Experience Section
export const EXPERIENCE_TEXT_PRE = "we previously worked at and with";
export const EXPERIENCE_TEXT_MAIN = "Meta, Tesla, BlackRock, IBM, and dozens of startups over the last 8 years.";
export const EXPERIENCE_CTA = "Talk to Chris&Karn (co-founders)";

// Book Call Section
export const BOOK_CALL_CTA = "Book a call";
export const BOOK_CALL_TEXT = "14 founders booked a call this week!";

export const CALENDAR_LINK = "https://cal.com/team/architects/30min";

// -----------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------// -----------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------// -----------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------
// PROJECTS INFO

export const PROJECTS_TITLE = "Our Past Projects";
export const PROJECTS_MOBILE_TITLE = "Our Past Projects";
export const PROJECTS_DESC = "A collection of our past projects and experiments.";
export const PROJECT_CTA = "Visit Project";

// PROJECTS DEFAULT METADATA
export const PROJECTS_DEFAULT_METADATA = {
  title: PROJECTS_TITLE,
  description: PROJECTS_DESC,
  openGraph: {
    title: PROJECTS_TITLE,
    description: PROJECTS_DESC,
    url: DEFAULT_ARTICLES_METADATA_URL,
  },
};

// PROJECTS

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "AI First CMS Platform",
    subtitle:
      "Engineered a frontend dashboard and REST API using Next.js to centralize content creation and management with an AI-first approach. The platform includes a built-in markdown editor powered by TipTap, leveraging TipTap's AI features to capture and replicate user-specific writing styles, significantly accelerating content development. It also implements custom agentic web scrapers for knowledge retrieval and resource aggregation, streamlining the content generation process. Integrated with APIs from major blog providers (Medium, LinkedIn, Dev.to) to enable efficient distribution across multiple platforms.",
    projectUrl: "https://github.com/chrismaresca/AI-CMS-API-LIVE",
    target: "_blank",
    dateCreated: new Date("2024-12-20"),
    dateUpdated: new Date("2025-01-14"),
    delay: 0,
  },
  {
    id: 2,
    title: "Janet",
    subtitle: "Janet is a conversational AI phone receptionist for service business. She handles calls just like a human receptionist can, except 100x cheaper. She'll answer questions, book appointments, and take payment to get your clients booked!",
    projectUrl: "https://getjanetai.com",
    target: "_blank",
    dateCreated: new Date("2023-12-17"),
    dateUpdated: new Date("2025-01-09"),
    delay: 100,
  },
  {
    id: 3,
    title: "Jarvis v2",
    subtitle:
      "Built a CLI tool that lets me control my computer with voice commands using OpenAI’s Real-Time API. It’s tailored for coding workflows like running shell commands, web scraping documentation, and saving it in an AI-friendly markdown format, as well as file and directory creation. Designed with a modular structure, it’s ready for adding more tools in future iterations. I also integrated the audio buffer mechanism from my Twilio Phone Assistant, ensuring smooth and responsive voice interactions, even when I interrupt the AI mid-task.",
    projectUrl: "https://github.com/chrismaresca/jarvis-v2",
    target: "_blank",
    dateCreated: new Date("2024-11-25"),
    dateUpdated: new Date("2024-12-17"),
    delay: 200,
  },
  {
    id: 4,
    title: "MedChron",
    subtitle: "MedChron summarizes thousands of pages of medical records into concise, useful medical summaries for personal injury lawyers. Get the key facts and always stay ahead in strategy.",
    projectUrl: "https://gomedchron.com",
    target: "_blank",
    dateCreated: new Date("2024-11-02"),
    dateUpdated: new Date("2024-12-12"),
    delay: 300,
  },
  {
    id: 5,
    title: "Twilio Realtime​ AI Phone Assistant",
    subtitle: "Developed a Twilio Phone Assistant powered by OpenAI's Real-Time Assistant API to deliver immediate, context-aware responses during live phone conversations. The system is built with FastAPI to handle the API layer and Twilio for seamless call management. Implemented an integrated audio buffer to enhance interaction quality and effectively manage interruptions, improving the overall user experience.",
    projectUrl: "https://github.com/chrismaresca/twilio-realtime",
    target: "_blank",
    dateCreated: new Date("2024-10-11"),
    dateUpdated: new Date("2024-11-28"),
    delay: 400,
  },
  {
    id: 6,
    title: "Scribe",
    subtitle: "Scribe listens, transcribes, and writes medical documentation for you. It's the fastest way to get your SOAP notes done. Saving doctors time, one SOAP note at a time.",
    projectUrl: "https://scribeai.framer.website/",
    target: "_blank",
    dateCreated: new Date("2024-10-23"),
    dateUpdated: new Date("2024-11-24"),
    delay: 500,
  },
  {
    id: 7,
    title: "PrimeProspects",
    subtitle: "Automate Your Lead Qualification with AI-Powered Insights. PrimeProspects will engage with your leads just like a team of expert assistants. Answer questions, rank prospects, and book showings faster than ever.",
    projectUrl: "https://primeprospectsai.framer.website/",
    target: "_blank",
    dateCreated: new Date("2023-10-14"),
    dateUpdated: new Date("2024-11-06"),
    delay: 600,
  },
  {
    id: 8,
    title: "AI Slide Creation Workflow",
    subtitle:
      "Developed an automated pipeline for generating tailored slide deck content from meeting transcripts and AI-generated notes (via Circleback.ai). Leveraged LlamaIndex with Pydantic output parsing, implemented prior to OpenAI's structured output response model. Built with FastAPI and Jinja2 templates for prompt templating, the system enables efficient slide content generation. The use of Jinja2 allows for highly flexible prompt injection, offering extensive customization to adapt outputs to specific requirements.",
    projectUrl: "https://github.com/chrismaresca/simpleLLMworkflow",
    target: "_blank",
    dateCreated: new Date("2024-10-15"),
    dateUpdated: new Date("2024-10-30"),
    delay: 700,
  },
  {
    id: 9,
    title: "RAG Knowledge Repository Orchestrator",
    subtitle: "A FastAPI Microservices Architecture leveraging Redis for messaging, enabling dynamic public and private knowledge repositories for Retrieval-Augmented Generation workflows. Integrates Pinecone for embeddings and Neo4j for graph-based data, with a scalable CI/CD pipeline for seamless deployment of containerized microservices.",
    projectUrl: "https://github.com/chrismaresca/knowledge-micro-ex",
    target: "_blank",
    dateCreated: new Date("2024-09-13"),
    dateUpdated: new Date("2024-10-12"),
    delay: 800,
  },
];
