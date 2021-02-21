import React from "react";
import Particles from "react-particles-js";
import "./Particles.css";

const Myparticles = () => {
  return (
    <Particles
      params={{
        particles: {
          number: {
            value: 35,
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
        },
      }}
    />
  );
};

export default Myparticles;
