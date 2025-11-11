import React from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Products } from './pages/Products';
import { Quality } from './pages/Quality';
import { IsoSection } from './components/IsoSection';
import { LocationMap } from './components/LocationMap';
import { FaqAccordion } from './components/FaqAccordion'; 
import { Contact } from './pages/Contact';

import './App.css'; 

function App() {
  return (
    <div className="app">
      <Navbar />
      
      <Home /> 
      
      <main className="main-container">
        <About />
        <Products />
        <Quality />
        <IsoSection />
        <LocationMap />
        <FaqAccordion /> 
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;