"use client";
import React, { useCallback, useState } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const ParticlesBackground = ({ children }) => {
  const [isParticlesLoaded, setParticlesLoaded] = useState(false);

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    console.log(container);
    setParticlesLoaded(true);
  }, []);

  return (
    <>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: -1,
          width: "100%",
          height: "100%",
          backgroundColor: isParticlesLoaded ? "transparent" : "#0e021a",
          transition: "background-color 0.2s ease",
        }}
      >
        <Particles
          className=""
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            fullScreen: { enable: true },
            background: {
              color: {
                value: "#0e021a",
              },
            },
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: false,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: ["grab", "connect"],
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 50,
                  duration: 2,
                },
                grab: {},
              },
            },
            particles: {
              color: {
                value: "#562680",
              },
              links: {
                color: "#861aeb",
                distance: 160,
                enable: true,
                opacity: 1,
                width: 1,
              },
              collisions: {
                enable: true,
              },
              move: {
                directions: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 0.4,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 1200,
                },
                value: 200,
              },
              opacity: {
                value: 0.7,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 5 },
              },
            },
            detectRetina: true,
          }}
        />
      </div>
      {children}
    </>
  );
};

export default ParticlesBackground;
