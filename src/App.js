import {
  Nav,
  Hero,
  About,
  Services,
  Gallery,
  Contact,
  Clients,
} from "./components";

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <Services />
      <About />
      <Clients />
      <Gallery />
      <Contact />
    </div>
  );
}

export default App;
