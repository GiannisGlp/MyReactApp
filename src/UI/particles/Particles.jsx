import React from "react";
import Particles from "react-particles-js";
import "./Particles.css";

const myParticles = () => {
  return (
    <Particles
      className="particles-canvas"
      params={{
        particles: {
          number: {
            value: 30,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          shape: {
            type: "square",
            stroke: {
              width: 5,
              color: "#f9ab00",
            },
          },
          line_linked: {
            enable: false,
          },
        },
      }}
    />
  );
};

export default myParticles;
