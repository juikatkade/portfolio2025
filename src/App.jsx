import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import YouTube from './components/YouTube';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Footer from './components/Footer';

function App() {
  // Global scroll animation logic
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.fade-in, .fade-in-up');
    animatedElements.forEach(el => observer.observe(el));

    // Cleanup not strictly necessary for single page mount, but good practice
    return () => observer.disconnect();
  });

  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <About />
        {/* <YouTube /> */}
        <Skills />
        <Projects />
        <Achievements />
        <Footer />
      </main>
    </div>
  );
}

export default App;
