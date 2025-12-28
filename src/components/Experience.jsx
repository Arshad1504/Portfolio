import React from "react";
import { EXPERIENCES } from "../data/portfolio";
import { Briefcase } from "lucide-react";

const Experience = () => {
  return (
    <section className="py-12 md:py-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-12">
          <div className="p-2 bg-blue-500/10 rounded-lg">
            <Briefcase className="w-6 h-6 text-blue-400" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Experience
          </h2>
        </div>

        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-linear-to-b before:from-transparent before:via-zinc-700 before:to-transparent">
          {EXPERIENCES.map((exp, index) => (
            <div
              key={index}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
            >
              {/* Timeline Dot */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-zinc-700 bg-zinc-900 group-hover:border-blue-500/50 group-hover:bg-blue-500/10 transition shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_0_8px_rgba(24,24,27,1)] z-10">
                <div className="w-2.5 h-2.5 rounded-full bg-zinc-500 group-hover:bg-blue-400 transition"></div>
              </div>

              {/* Content Card */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-zinc-800/50 p-6 rounded-2xl border border-zinc-700/50 hover:border-zinc-600 hover:bg-zinc-800/80 transition duration-300 shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-white">{exp.role}</h3>
                    <p className="text-blue-400 font-medium">{exp.company}</p>
                  </div>
                  <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-zinc-700/50 text-zinc-400 border border-zinc-700">
                    {exp.period}
                  </span>
                </div>

                <ul className="space-y-2 mb-4">
                  {exp.description.map((item, i) => (
                    <li
                      key={i}
                      className="text-sm text-zinc-400 leading-relaxed flex items-start gap-2"
                    >
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-zinc-500 shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-2 border-t border-zinc-700/50">
                  {exp.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 rounded bg-zinc-900/50 text-zinc-400 border border-zinc-700/50"
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

export default Experience;
