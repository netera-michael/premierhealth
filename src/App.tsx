import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Departments from './pages/Departments';
import PlasticSurgeryDepartment from './pages/PlasticSurgeryDepartment';
import DermatologyDepartment from './pages/DermatologyDepartment';
import SkincareDepartment from './pages/SkincareDepartment';
import LaserDepartment from './pages/LaserDepartment';
import WellnessDepartment from './pages/WellnessDepartment';
import PhysiotherapyDepartment from './pages/PhysiotherapyDepartment';
import OsteopathyDepartment from './pages/OsteopathyDepartment';
import DentalDepartment from './pages/DentalDepartment';
import ObGynDepartment from './pages/ObGynDepartment';
import VitaminDripsDepartment from './pages/VitaminDripsDepartment';
import IntegrativeMedicineDepartment from './pages/IntegrativeMedicineDepartment';
import FertilityIvfDepartment from './pages/FertilityIvfDepartment';
import StepaheadDepartment from './pages/StepaheadDepartment';
import DiabeterDepartment from './pages/DiabeterDepartment';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Routes>
          <Route 
            path="/" 
            element={
              <Layout>
                <Home />
              </Layout>
            } 
          />
          <Route 
            path="/departments" 
            element={
              <Layout>
                <Departments />
              </Layout>
            } 
          />
          <Route 
            path="/departments/plastic-surgery" 
            element={
              <Layout>
                <PlasticSurgeryDepartment />
              </Layout>
            } 
          />
          <Route 
            path="/departments/dermatology" 
            element={
              <Layout>
                <DermatologyDepartment />
              </Layout>
            } 
          />
          <Route 
            path="/departments/skincare" 
            element={
              <Layout>
                <SkincareDepartment />
              </Layout>
            } 
          />
          <Route 
            path="/departments/laser" 
            element={
              <Layout>
                <LaserDepartment />
              </Layout>
            } 
          />
          <Route 
            path="/departments/wellness" 
            element={
              <Layout>
                <WellnessDepartment />
              </Layout>
            } 
          />
          <Route 
            path="/departments/physiotherapy" 
            element={
              <Layout>
                <PhysiotherapyDepartment />
              </Layout>
            } 
          />
          <Route 
            path="/departments/osteopathy" 
            element={
              <Layout>
                <OsteopathyDepartment />
              </Layout>
            } 
          />
          <Route 
            path="/departments/dental" 
            element={
              <Layout>
                <DentalDepartment />
              </Layout>
            } 
          />
          <Route 
            path="/departments/ob-gyn" 
            element={
              <Layout>
                <ObGynDepartment />
              </Layout>
            } 
          />
          <Route 
            path="/departments/vitamin-drips" 
            element={
              <Layout>
                <VitaminDripsDepartment />
              </Layout>
            } 
          />
          <Route 
            path="/departments/integrative-medicine" 
            element={
              <Layout>
                <IntegrativeMedicineDepartment />
              </Layout>
            } 
          />
          <Route 
            path="/departments/fertility-ivf" 
            element={
              <Layout>
                <FertilityIvfDepartment />
              </Layout>
            } 
          />
          <Route 
            path="/departments/stepahead" 
            element={
              <Layout>
                <StepaheadDepartment />
              </Layout>
            } 
          />
          <Route 
            path="/departments/diabeter" 
            element={
              <Layout>
                <DiabeterDepartment />
              </Layout>
            } 
          />
          <Route 
            path="/about" 
            element={
              <Layout>
                <About />
              </Layout>
            } 
          />
          <Route 
            path="/contact" 
            element={
              <Layout>
                <Contact />
              </Layout>
            } 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;