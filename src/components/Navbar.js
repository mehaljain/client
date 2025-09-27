import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [showDropdown, setShowDropdown] = React.useState(false);
  return (
    <>
      {/* Top promotional banner
      <div className="bg-green-600 text-white text-center py-2 text-sm relative">
        <div className="flex items-center justify-center">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span>Free Pomegranate Kit On ₹2999+ orders</span>
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div> */}
      
      {/* Main navigation */}
      <nav className="flex items-center justify-between px-8 py-4 bg-white shadow">
        {/* Left side - Logo */}
        <div className="flex items-center">
          <div className="text-black font-bold text-xl">
            <div>HSFreshFaces</div>
            {/* <div className="text-xs text-gray-600">CLEAN BEAUTY</div> */}
          </div>
        </div>
        
        {/* Center navigation links */}
        <div className="flex items-center gap-8">
        <Link to="/" className="text-black font-medium hover:text-gray-600 transition">HOME</Link>
          <Link to="/skincare" className="text-black font-medium hover:text-gray-600 transition">SKINCARE</Link>
          <Link to="/haircare" className="text-black font-medium hover:text-gray-600 transition">HAIRCARE</Link>
          <Link to="/shop-all" className="text-black font-medium hover:text-gray-600 transition">SHOP ALL</Link>
          <Link to="/about" className="text-black font-medium hover:text-gray-600 transition">ABOUT US</Link>
        </div>
        
        {/* Right side icons */}
        {/* <div className="flex items-center gap-6">
          <span className="text-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z" />
            </svg>
          </span>
          
        </div> */}
      </nav>
    </>
  );
}
