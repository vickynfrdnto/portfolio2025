import React from 'react';
import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import EducationCertificates from './components/EducationCertificates';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <EducationCertificates />
      <Contact />
      <Footer />

      {/* <div className="bg-red-500 text-white p-4 text-center">
        Test Tailwind aktif
      </div> */}
    </div>
  );
}

export default App;

