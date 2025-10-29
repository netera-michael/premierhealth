import React from 'react';
import { useTranslation } from 'react-i18next';
import Hero from '../components/Hero';
import PlasticSurgery from '../components/PlasticSurgery';
import VitaminDrips from '../components/VitaminDrips';
import Benefits from '../components/Benefits';
import Process from '../components/Process';
import About from '../components/About';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';

const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen">
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
    </div>
  );
};

export default Home;