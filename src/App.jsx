import React from 'react';
import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import DevTrainer from "./components/sections/DevTrainer";
import Experience from "./components/sections/Experience";
import Projects from "./components/sections/Projects";
import Education from "./components/sections/Education";
import Services from "./components/sections/Services";
import Testimonials from "./components/sections/Testimonials";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";

const App = () => {
  return (
    <div className="min-h-screen bg-bg">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <DevTrainer />
        <Experience />
        <Projects />
        <Education />
        <Services />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default App;