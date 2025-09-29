import React from 'react';
import ProductsList from '../components/ProductsList';
import OffersCarousel from '../components/OffersCarousel';
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Main Promotional Banner with Offers Carousel */}
      <div className="bg-pink-100 py-16 px-8">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
          {/* Left Side - Promotional Text */}
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">Glow More, Spend Less.</h2>
            <div className="mb-6">
              <span className="text-4xl lg:text-5xl font-bold text-gray-800">Upto</span>
              <span className="text-5xl lg:text-6xl font-bold text-gray-800 ml-2">20% OFF</span>
            </div>
<Link to="/shop-all">
  <button className="bg-black text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-gray-800 transition">
    SHOP NOW
  </button>
</Link>
          </div>
          
          {/* Right Side - Offers Carousel (dynamic from backend with fallback) */}
          <div className="lg:w-1/2 w-full">
            <OffersCarousel />
          </div>
        </div>
      </div>

      

      {/* Shop Like Khushi Section */}
      <div className="py-16 px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-green-800 mb-4">Shop Our Featured Products</h2>
            <div className="w-32 h-1 bg-gray-300 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 mb-8">
            <ProductsList />
          </div>
          
          {/* <div className="text-center">
            <a href="/shop-all">
              <button className="bg-green-500 text-white px-12 py-4 rounded-lg font-bold text-lg hover:bg-green-600 transition">
                VIEW ALL
              </button>
            </a>
          </div> */}
        </div>
      </div>

      {/* Most Loved Ranges Section */}
      <div className="py-16 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-green-800 mb-4">Most Loved Ranges</h2>
            <div className="w-32 h-1 bg-gray-300 mx-auto"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <img 
                src="serum1.jpg" 
                alt="Product Range" 
                className="w-full h-80 object-cover rounded-lg mb-4"
              />
            </div>
            <div className="text-center">
              <img 
                src="Cream.jpg" 
                alt="Product Range" 
                className="w-full h-80 object-cover rounded-lg mb-4"
              />
            </div>
            <div className="text-center">
              <img 
                src="Botox.jpg" 
                alt="Product Range" 
                className="w-full h-80 object-cover rounded-lg mb-4"
              />
            </div>
            <div className="text-center">
              <img 
                src="kit.jpeg" 
                alt="Product Range" 
                className="w-full h-80 object-cover rounded-lg mb-4"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



