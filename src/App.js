import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Haircare from './pages/Haircare';
import Skincare from './pages/Skincare';
import HaircareDetailsAlt from './pages/HaircareDetailsAlt';
import SkincareDetailsAlt from './pages/SkincareDetailsAlt';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './index.css';
import About from './pages/About';
import Offers from './pages/Offers';
import ShopAll from './pages/ShopAll';

function App() {
  return (
    <div className="font-sans">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/haircare" element={<Haircare />} />
          <Route path="/skincare" element={<Skincare />} />
          <Route path="/haircare/:id" element={<HaircareDetailsAlt />} /> {/* Route for haircare details */}
          <Route path="/skincare/:id" element={<SkincareDetailsAlt />} /> {/* Route for skincare details */}
          <Route path="/about" element={<About />} /> 
          <Route path="/offers" element={<Offers />} /> {/* Route for Offers page */}
          <Route path="/shop-all" element={<ShopAll />} /> {/* Route for Shop All page */}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
