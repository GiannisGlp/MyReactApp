import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./UI/navbar/Navbar";
import Header from "./components/header/Header";
import MyParticles from "./UI/particles/Particles";

function App() {
  return (
    <div>
      <MyParticles />
      <Navbar />
      <Header />
    </div>
  );
}

export default App;
