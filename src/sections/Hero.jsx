import React from "react";
import HeroText from "../components/HeroText";
import Parallaxbackground from "../components/Parallaxbackground";
// import { Astronaut } from "../components/Astronaut";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls } from "@react-three/drei";

const Hero = () => {
  return (
    <section className="flex items-start justify-center min-h-screen overflow-hidden md:items-start md:justify-start c-space">
      <HeroText />
      <Parallaxbackground />

      {/* this was for 3D model */}
      {/* <figure
        className="absolute inset-0"
        style={{ width: "100vw", height: "100vw" }}
      >
        <Canvas>
          <Astronaut />
          <OrbitControls />
        </Canvas>
      </figure> */}
    </section>
  );
};

export default Hero;
