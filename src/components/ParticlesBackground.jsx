import React from "react";
import Particles from "react-tsparticles";

const ParticlesBackground = () => {
  return (
    <Particles
      options={{
        fullScreen: { enable: false },
        fpsLimit: 60,
        particles: {
          number: { value: 80, density: { enable: true, area: 800 } },
          color: { value: "#ffffff" },
          shape: { type: "circle" },
          opacity: { value: 0.5 },
          size: { value: { min: 1, max: 3 } },
          move: {
            enable: true,
            speed: 0.3,
            direction: "none",
            outModes: { default: "out" },
          },
        },
        interactivity: {
          events: {
            onHover: { enable: false, mode: "repulse" },
            onClick: { enable: false },
          },
        },
        detectRetina: true,
      }}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 1,
      }}
    />
  );
};

export default ParticlesBackground;
