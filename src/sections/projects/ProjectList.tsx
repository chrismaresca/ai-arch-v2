import React from "react";

// Components
import ProjectCard from "@/components/projects/projectCard";

// Constants
import { PROJECTS } from "@/constants/website";

export default function ProjectList() {
  return (
    <div className="flex flex-col w-full pt-12">
      <div className="flex flex-col gap-6 pt-4">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
}
