import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Departments from './pages/Departments';
import PlasticSurgeryDepartment from './pages/PlasticSurgeryDepartment';
import DermatologyDepartment from './pages/DermatologyDepartment';
import SkincareDepartment from './pages/SkincareDepartment';
import LaserDepartment from './pages/LaserDepartment';
import VitaminDripsDepartment from './pages/VitaminDripsDepartment';
import About from './pages/About';
import Contact from './pages/Contact';
// Face procedures
import Blepharoplasty from './pages/procedures/Blepharoplasty';
import BuccalFatRemoval from './pages/procedures/BuccalFatRemoval';
import Septoplasty from './pages/procedures/Septoplasty';
import Otoplasty from './pages/procedures/Otoplasty';
import Facelift from './pages/procedures/Facelift';
import Rhinoplasty from './pages/procedures/Rhinoplasty';
import NeckLift from './pages/procedures/NeckLift';
import DoubleChinLiposuction from './pages/procedures/DoubleChinLiposuction';
import ChinAugmentation from './pages/procedures/ChinAugmentation';
// Body procedures
import Brachioplasty from './pages/procedures/Brachioplasty';
import Panniculectomy from './pages/procedures/Panniculectomy';
import BodyContouring360 from './pages/procedures/BodyContouring360';
import TummyTuck from './pages/procedures/TummyTuck';
import GlutealAugmentation from './pages/procedures/GlutealAugmentation';
import ThighLift from './pages/procedures/ThighLift';
import MommyMakeover from './pages/procedures/MommyMakeover';
import BodyLiftSurgery from './pages/procedures/BodyLiftSurgery';
import JPlasma from './pages/procedures/JPlasma';
import FatGrafting from './pages/procedures/FatGrafting';
import Liposuction from './pages/procedures/Liposuction';
// Breast procedures
import BreastImplantRemoval from './pages/procedures/BreastImplantRemoval';
import BreastLift from './pages/procedures/BreastLift';
import BreastAugmentation from './pages/procedures/BreastAugmentation';
import BreastReduction from './pages/procedures/BreastReduction';
import Gynecomastia from './pages/procedures/Gynecomastia';

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
            path="/departments/vitamin-drips" 
            element={
              <Layout>
                <VitaminDripsDepartment />
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
          {/* Face Procedure Routes */}
          <Route 
            path="/departments/plastic-surgery/blepharoplasty" 
            element={
              <Layout>
                <Blepharoplasty />
              </Layout>
            } 
          />
          <Route 
            path="/departments/plastic-surgery/buccal-fat-removal" 
            element={
              <Layout>
                <BuccalFatRemoval />
              </Layout>
            } 
          />
          <Route 
            path="/departments/plastic-surgery/septoplasty" 
            element={
              <Layout>
                <Septoplasty />
              </Layout>
            } 
          />
          <Route 
            path="/departments/plastic-surgery/otoplasty" 
            element={
              <Layout>
                <Otoplasty />
              </Layout>
            } 
          />
          <Route 
            path="/departments/plastic-surgery/facelift" 
            element={
              <Layout>
                <Facelift />
              </Layout>
            } 
          />
          <Route 
            path="/departments/plastic-surgery/rhinoplasty" 
            element={
              <Layout>
                <Rhinoplasty />
              </Layout>
            } 
          />
          <Route 
            path="/departments/plastic-surgery/neck-lift" 
            element={
              <Layout>
                <NeckLift />
              </Layout>
            } 
          />
          <Route 
            path="/departments/plastic-surgery/double-chin-liposuction" 
            element={
              <Layout>
                <DoubleChinLiposuction />
              </Layout>
            } 
          />
          <Route 
            path="/departments/plastic-surgery/chin-augmentation" 
            element={
              <Layout>
                <ChinAugmentation />
              </Layout>
            } 
          />
          {/* Body Procedure Routes */}
          <Route 
            path="/departments/plastic-surgery/brachioplasty" 
            element={
              <Layout>
                <Brachioplasty />
              </Layout>
            } 
          />
          <Route 
            path="/departments/plastic-surgery/panniculectomy" 
            element={
              <Layout>
                <Panniculectomy />
              </Layout>
            } 
          />
          <Route 
            path="/departments/plastic-surgery/body-contouring-360" 
            element={
              <Layout>
                <BodyContouring360 />
              </Layout>
            } 
          />
          <Route 
            path="/departments/plastic-surgery/tummy-tuck" 
            element={
              <Layout>
                <TummyTuck />
              </Layout>
            } 
          />
          <Route 
            path="/departments/plastic-surgery/gluteal-augmentation" 
            element={
              <Layout>
                <GlutealAugmentation />
              </Layout>
            } 
          />
          <Route 
            path="/departments/plastic-surgery/thigh-lift" 
            element={
              <Layout>
                <ThighLift />
              </Layout>
            } 
          />
          <Route 
            path="/departments/plastic-surgery/mommy-makeover" 
            element={
              <Layout>
                <MommyMakeover />
              </Layout>
            } 
          />
          <Route 
            path="/departments/plastic-surgery/body-lift-surgery" 
            element={
              <Layout>
                <BodyLiftSurgery />
              </Layout>
            } 
          />
          <Route 
            path="/departments/plastic-surgery/j-plasma" 
            element={
              <Layout>
                <JPlasma />
              </Layout>
            } 
          />
          <Route 
            path="/departments/plastic-surgery/fat-grafting" 
            element={
              <Layout>
                <FatGrafting />
              </Layout>
            } 
          />
          <Route 
            path="/departments/plastic-surgery/liposuction" 
            element={
              <Layout>
                <Liposuction />
              </Layout>
            } 
          />
          {/* Breast Procedure Routes */}
          <Route 
            path="/departments/plastic-surgery/breast-implant-removal" 
            element={
              <Layout>
                <BreastImplantRemoval />
              </Layout>
            } 
          />
          <Route 
            path="/departments/plastic-surgery/breast-lift" 
            element={
              <Layout>
                <BreastLift />
              </Layout>
            } 
          />
          <Route 
            path="/departments/plastic-surgery/breast-augmentation" 
            element={
              <Layout>
                <BreastAugmentation />
              </Layout>
            } 
          />
          <Route 
            path="/departments/plastic-surgery/breast-reduction" 
            element={
              <Layout>
                <BreastReduction />
              </Layout>
            } 
          />
          <Route 
            path="/departments/plastic-surgery/gynecomastia" 
            element={
              <Layout>
                <Gynecomastia />
              </Layout>
            } 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;