import React from "react";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";

const App = () => {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-200 selection:bg-blue-500/30">
      {/* Background Grid Pattern */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]"></div>
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-77.5 w-77.5 rounded-full bg-blue-500 opacity-20 blur-[100px]"></div>
      </div>

      <main className="relative z-10">
        <Hero />
        <Experience />
        <Projects />
        <TechStack />
      </main>

      <footer className="relative z-10 py-8 text-center text-zinc-500 text-sm border-t border-zinc-800/50 bg-zinc-950/50 backdrop-blur-sm">
        <p>© {new Date().getFullYear()} Arshad Alam. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
