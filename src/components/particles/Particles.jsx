import React from "react";
import Particles from "react-particles-js";
import "./Particles.css";

const Myparticles = () => {
  return (
    <Particles
      params={{
        particles: {
          number: {
            value: 30,
            density: {
              enable: true,
              value_area: 900,
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
