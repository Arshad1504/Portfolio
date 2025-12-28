import React from "react";
import { PROJECTS } from "../data/portfolio";
import { FolderGit2, Github, ExternalLink } from "lucide-react";

const Projects = () => {
  return (
    <section className="py-12 md:py-20 bg-zinc-900/30">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-12">
          <div className="p-2 bg-purple-500/10 rounded-lg">
            <FolderGit2 className="w-6 h-6 text-purple-400" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Featured Projects
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROJECTS.map((project, index) => (
            <div
              key={index}
              className="group relative bg-zinc-800/50 rounded-2xl border border-zinc-700/50 hover:border-purple-500/30 hover:bg-zinc-800/80 transition duration-300 overflow-hidden flex flex-col"
            >
              {/* Hover Gradient */}
              <div className="absolute inset-0 bg-linear-to-br from-purple-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>

              <div className="relative p-6 flex flex-col h-full">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-zinc-900/50 rounded-xl border border-zinc-700/50 group-hover:border-purple-500/30 transition">
                    <FolderGit2 className="w-6 h-6 text-zinc-400 group-hover:text-purple-400 transition" />
                  </div>
                  <div className="flex gap-2">
                    <a
                      href={project.links.github}
                      className="p-2 text-zinc-400 hover:text-white hover:bg-zinc-700/50 rounded-lg transition"
                      aria-label="View Source"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href={project.links.demo}
                      className="p-2 text-zinc-400 hover:text-white hover:bg-zinc-700/50 rounded-lg transition"
                      aria-label="View Demo"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition">
                  {project.title}
                </h3>

                <p className="text-zinc-400 text-sm leading-relaxed mb-6 flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs font-medium px-2.5 py-1 rounded-md bg-zinc-900/50 text-zinc-400 border border-zinc-700/50 group-hover:border-purple-500/20 transition"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
