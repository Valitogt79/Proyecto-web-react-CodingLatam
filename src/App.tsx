import "./App.css";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Strategy } from "./components/Strategy";
import { Team } from "./components/Team";
import { Projects } from "./components/Projects";
import { Testimonials } from "./components/Testimonials";
import { FAQs } from "./components/FAQs";
import { Foorter } from "./components/Footer";

function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Services />
        <Strategy />
        <Team />
        <Projects />
        <Testimonials />
        <FAQs />
      </main>
      <Foorter />
    </>
  );
}

export default App;
