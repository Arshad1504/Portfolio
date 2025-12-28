import React from "react";
import { TECH_STACK } from "../data/portfolio";
import { Cpu } from "lucide-react";

const TechStack = () => {
  return (
    <section className="py-12 md:py-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-12">
          <div className="p-2 bg-emerald-500/10 rounded-lg">
            <Cpu className="w-6 h-6 text-emerald-400" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Tech Stack
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {TECH_STACK.map((tech, index) => (
            <div
              key={index}
              className="flex items-center gap-3 p-4 bg-zinc-800/50 rounded-xl border border-zinc-700/50 hover:border-emerald-500/30 hover:bg-zinc-800/80 transition duration-300 group"
            >
              <div className="p-2 bg-zinc-900 rounded-lg group-hover:bg-emerald-500/10 transition">
                <tech.icon className="w-5 h-5 text-zinc-400 group-hover:text-emerald-400 transition" />
              </div>
              <span className="text-sm font-medium text-zinc-300 group-hover:text-white transition">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
