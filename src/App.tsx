import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import PlasticSurgery from './components/PlasticSurgery';
import VitaminDrips from './components/VitaminDrips';
import Benefits from './components/Benefits';
import Process from './components/Process';
import About from './components/About';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <PlasticSurgery />
        <VitaminDrips />
        <Benefits />
        <Process />
        <About />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;