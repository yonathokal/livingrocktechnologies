import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./styles.css";

import Header from './components/Header';
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    AOS.init({
      // duration: 800,        // animation duration
      // easing: "ease-in-out",
       once: true,           // animate only once
      // offset: 120,          // trigger position
    });
  }, []);
  return (
    <div >
      <Header/>
      <Hero/>
      <Services />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
