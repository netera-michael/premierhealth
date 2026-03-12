import React from 'react';
import Hero from '../components/Hero';
import VitaminDrips from '../components/VitaminDrips';
import Benefits from '../components/Benefits';
import Process from '../components/Process';
import About from '../components/About';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import Locations from '../components/Locations';

const Home: React.FC = () => {

  return (
    <div className="min-h-screen">
      <main>
        <Hero />
        <VitaminDrips />
        <Benefits />
        <Process />
        <About />
        <Locations />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
    </div>
  );
};

export default Home;