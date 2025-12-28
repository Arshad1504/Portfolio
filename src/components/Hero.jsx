import React from "react";
import { PROFILE } from "../data/portfolio";
import { MapPin, Circle } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative pt-20 pb-12 md:pt-32 md:pb-20 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl -z-10 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl mix-blend-screen animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl mix-blend-screen animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-pink-500 rounded-full blur-3xl mix-blend-screen animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start gap-8 md:gap-12">
          {/* Avatar */}
          <div className="relative group shrink-0">
            <div className="absolute -inset-1 bg-linear-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative w-32 h-32 md:w-40 md:h-40 bg-zinc-800 rounded-2xl overflow-hidden border border-zinc-700/50 shadow-2xl">
              {PROFILE.image ? (
                <img
                  src={PROFILE.image}
                  alt={PROFILE.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-zinc-900 text-4xl font-bold text-zinc-700">
                  {PROFILE.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
              )}
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 space-y-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-2">
                {PROFILE.name}
              </h1>
              <h2 className="text-xl md:text-2xl text-zinc-400 font-medium">
                {PROFILE.role}
              </h2>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-sm text-zinc-400">
              <div className="flex items-center gap-1.5 bg-zinc-800/50 px-3 py-1.5 rounded-full border border-zinc-700/50">
                <MapPin className="w-4 h-4 text-zinc-300" />
                {PROFILE.location}
              </div>
              <div className="flex items-center gap-1.5 bg-green-500/10 text-green-400 px-3 py-1.5 rounded-full border border-green-500/20">
                <Circle className="w-2.5 h-2.5 fill-current animate-pulse" />
                Available
              </div>
            </div>

            <p className="text-zinc-300 leading-relaxed text-lg max-w-2xl whitespace-pre-line">
              {PROFILE.bio}
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              {PROFILE.social.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white rounded-lg transition-all border border-zinc-700/50 hover:border-zinc-600"
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
