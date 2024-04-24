import "./App.scss";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <section>
        <Home />
      </section>
      <section>
        <About />
      </section>
      <section>
        <Contact />
      </section>
      <Footer />
    </>
  );
}

export default App;
