import "./App.css";
import {
  Nav,
  Hero,
  Services,
  Strategy,
  Team,
  Projects,
  Testimonials,
  FAQs,
  Foorter,
} from "./components";

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
