import React from 'react';
import Hero from '../components/Hero';
import ServiceCategories from '../components/ServiceCategories';
import ConcernNav from '../components/ConcernNav';
import VitaminDrips from '../components/VitaminDrips';
import Benefits from '../components/Benefits';
import Process from '../components/Process';
import About from '../components/About';
import Locations from '../components/Locations';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';

const Home: React.FC = () => {

  return (
    <div className="min-h-screen">
      <main>
        <Hero />
        <ServiceCategories />
        <ConcernNav />
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