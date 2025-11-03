import React from "react";

import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Products } from "./pages/Products";
import { Quality } from "./pages/Quality";
import { Contact } from "./pages/Contact";
import { LocationMap } from "./components/LocationMap";
import { IsoSection } from "./components/IsoSection";

function App() {

  return (
    <div className="app">
      <Navbar />

      <Home />
      <About />
      <Products />
      <Quality />
      <IsoSection />
      <LocationMap />
      <Contact />

      <Footer />
    </div>
  );
}

export default App;