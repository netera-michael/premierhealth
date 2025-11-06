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
        </Routes>
      </div>
    </Router>
  );
}

export default App;