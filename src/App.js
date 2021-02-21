import "./App.css";
import Particles from "react-particles-js";
import Header from "./components/header/Header";

function App() {
  return (
    <>
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
          },
        }}
      />
      <Header />
    </>
  );
}

export default App;
