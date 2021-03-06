import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import MyParticles from "./components/particles/Particles";

function App() {
  return (
    <>
      <MyParticles />
      <Navbar />
      <Header />
    </>
  );
}

export default App;
