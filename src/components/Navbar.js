// import React from 'react';
// import { Link } from 'react-router-dom';

// export default function Navbar() {
//   const [showDropdown, setShowDropdown] = React.useState(false);
//   return (
//     <>
//       <nav className="flex items-center justify-between px-8 py-4 bg-white shadow">
//         {/* Left side - Logo */}
//         <div className="flex items-center">
//           <div className="text-black font-bold text-xl">
//             <div>HSFreshFaces</div>
//             {/* <div className="text-xs text-gray-600">CLEAN BEAUTY</div> */}
//           </div>
//         </div>
        
//         {/* Center navigation links */}
//         <div className="flex items-center gap-8">
//         <Link to="/" className="text-black font-medium hover:text-gray-600 transition">HOME</Link>
//           <Link to="/skincare" className="text-black font-medium hover:text-gray-600 transition">SKINCARE</Link>
//           <Link to="/haircare" className="text-black font-medium hover:text-gray-600 transition">HAIRCARE</Link>
//           <Link to="/shop-all" className="text-black font-medium hover:text-gray-600 transition">SHOP ALL</Link>
//           <Link to="/about" className="text-black font-medium hover:text-gray-600 transition">ABOUT US</Link>
//         </div>
        
//         {/* Right side icons */}
//         {/* <div className="flex items-center gap-6">
//           <span className="text-gray-500">
//             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
//               <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z" />
//             </svg>
//           </span>
          
//         </div> */}
//       </nav>
//     </>
//   );
// }
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-black font-bold text-xl">
          HSFreshFaces
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-black font-medium hover:text-gray-600 transition">HOME</Link>
          <Link to="/skincare" className="text-black font-medium hover:text-gray-600 transition">SKINCARE</Link>
          <Link to="/haircare" className="text-black font-medium hover:text-gray-600 transition">HAIRCARE</Link>
          <Link to="/shop-all" className="text-black font-medium hover:text-gray-600 transition">SHOP ALL</Link>
          <Link to="/about" className="text-black font-medium hover:text-gray-600 transition">ABOUT US</Link>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-800 focus:outline-none"
          >
            {isMobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-2 px-2 pb-4 space-y-1 bg-white shadow rounded-b-lg">
          <Link to="/" className="block text-black font-medium py-2 px-3 rounded hover:bg-gray-100">HOME</Link>
          <Link to="/skincare" className="block text-black font-medium py-2 px-3 rounded hover:bg-gray-100">SKINCARE</Link>
          <Link to="/haircare" className="block text-black font-medium py-2 px-3 rounded hover:bg-gray-100">HAIRCARE</Link>
          <Link to="/shop-all" className="block text-black font-medium py-2 px-3 rounded hover:bg-gray-100">SHOP ALL</Link>
          <Link to="/about" className="block text-black font-medium py-2 px-3 rounded hover:bg-gray-100">ABOUT US</Link>
        </div>
      )}
    </nav>
  );
}
