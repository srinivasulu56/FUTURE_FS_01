import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Trackademy",
    description:
      "An academic tracking platform built during a college hackathon. Allows students to track progress, assignments, and learning goals. Developed using basic HTML, CSS.",
    github: "https://github.com/srinivasulu56/Trackademy",
  },
  {
    title: "Profit Guru",
    description:
      "A financial insights tool that helps analyze profits and trends using visual dashboards and smart categorization. Focused on simplifying business analysis.",
    github: null, // Coming soon
  },
  {
    title: "CopAi",
    description:
      "AI-powered tool that checks if any content being uploaded is AI-generated. Labels AI content or gives a score to verify real vs. generated. Ideal for content authenticity.",
    github: null, // Coming soon
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 px-6 lg:px-24 bg-[#0a192f] text-white"
    >
      <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>
      <div className="grid gap-10 md:grid-cols-2">
        {projects.map((project, index) => (
          <div
            key={index}
            className="p-6 rounded-2xl bg-[#112240] shadow-xl transition-all duration-300 transform group hover:shadow-[0_0_25px_#64ffda] hover:-translate-y-1"
          >
            <h3 className="text-xl font-semibold mb-2 group-hover:text-accent">
              {project.title}
            </h3>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <div className="flex items-center space-x-4">
              {project.github ? (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline flex items-center gap-1"
                >
                  <FaGithub /> GitHub
                </a>
              ) : (
                <span className="text-gray-400 italic">Coming soon...</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
