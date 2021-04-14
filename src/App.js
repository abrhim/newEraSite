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
      <About />
      <Services />
      <Clients />
      <Gallery />
      <Contact />
    </div>
  );
}

export default App;
