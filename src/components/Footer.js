import React from 'react';

export default function Footer() {
  return (
    <>
      {/* Main Footer */}
      <footer className="bg-green-100 text-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Column 1: About */}
            <div>
              <h3 className="font-bold text-lg mb-4">ABOUT THE HSFreshFaces PRODUCTS</h3>
              <p className="text-sm leading-relaxed">
                Welcome to HSFreshFaces, your trusted destination for premium haircare and skincare products. Our mission is to empower you to look and feel your best by providing a curated selection of high-quality, clinically tested, 100% natural and vegan products.
              </p>
            </div>
            
            {/* Column 2: Need Help */}
            <div>
              <h3 className="font-bold text-lg mb-4">NEED HELP?</h3>
              <div className="space-y-2">
                <p className="text-sm"><strong>Email:</strong> hsancientroots@gmail.com</p>
                <div className="text-sm">
                  <p className="font-bold">REGISTERED ADDRESS:</p>
                  <p>Holistique Beauty Products Private Limited,</p>
                  <p>509 Shah & Nahar, Off Dr. E. Moses Road,</p>
                  <p>Worli, Mumbai - 400018</p>
                </div>
              </div>
            </div>
            
            {/* Column 3: Know More */}
            {/* <div>
              <h3 className="font-bold text-lg mb-4">KNOW MORE</h3>
              <div className="space-y-2">
                <a href="/about" className="block text-sm hover:text-green-600 transition">About Us</a>
                {/* <a href="#" className="block text-sm hover:text-green-600 transition">Loyalty Program</a>
                <a href="#" className="block text-sm hover:text-green-600 transition">Redeem Points</a>
                <a href="#" className="block text-sm hover:text-green-600 transition">Affiliate Program</a>
                <a href="#" className="block text-sm hover:text-green-600 transition">Store Locator</a>
                <a href="#" className="block text-sm hover:text-green-600 transition">Blogs</a>
                <a href="#" className="block text-sm hover:text-green-600 transition">Help & FAQ's</a> */}
              {/* </div>
            </div> */} 
            
            {/* Column 4: Subscribe */}
            <div>
              <h3 className="font-bold text-lg mb-4">SUBSCRIBE</h3>
              <div className="space-y-4">
                {/* (optional email subscribe area could remain here) */}

                {/* Social Links */}
                <div>
                  <p className="text-sm font-medium mb-2">Follow us</p>
                  <div className="flex items-center gap-3">
                    {/* Instagram */}
                    <a
                      href="https://instagram.com/your_instagram_handle"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Visit our Instagram"
                      className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-white border hover:bg-gray-100 transition shadow-sm"
                    >
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm5 5.9a4.1 4.1 0 100 8.2 4.1 4.1 0 000-8.2zm5.2-.6a1.08 1.08 0 11-2.16 0 1.08 1.08 0 012.16 0zM12 9.3a2.7 2.7 0 110 5.4 2.7 2.7 0 010-5.4z"/>
                      </svg>
                      <span className="text-sm text-gray-700">Instagram</span>
                    </a>

                    {/* WhatsApp */}
                    <a
                      href="https://wa.me/919999999999?text=Hi%20there!%20I%20have%20a%20question%20about%20your%20products"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Chat on WhatsApp"
                      className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-white border hover:bg-gray-100 transition shadow-sm"
                    >
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path d="M20.52 3.48A11.94 11.94 0 0012 0C5.373 0 .02 5.355.02 12c0 2.12.56 4.2 1.62 6.03L0 24l6.29-1.65A11.96 11.96 0 0012 24c6.627 0 12-5.373 12-12 0-1.99-.49-3.86-1.48-5.52zM12 21.6c-1.4 0-2.77-.36-3.98-1.05l-.28-.16-3.73.98.99-3.63-.18-.3A9.45 9.45 0 012.55 12 9.45 9.45 0 0112 2.55 9.45 9.45 0 0121.45 12 9.45 9.45 0 0112 21.6zM17 14.9c-.2-.1-1.16-.59-1.34-.66-.18-.07-.31-.1-.44.1s-.51.66-.62.8c-.11.14-.22.15-.42.05-.2-.1-.85-.31-1.62-.99-.6-.54-1.01-1.2-1.13-1.4-.11-.2 0-.31.08-.41.08-.08.18-.21.27-.31.09-.1.12-.17.18-.28.06-.11.03-.21-.02-.31-.05-.1-.44-1.06-.6-1.45-.16-.39-.32-.34-.44-.34-.11 0-.24 0-.37 0-.13 0-.34.05-.52.24-.18.19-.65.63-.65 1.54 0 .91.67 1.8.76 1.92.09.12 1.31 2.04 3.18 2.86 1.98.84 2.17.66 2.56.62.39-.04 1.17-.47 1.34-.92.17-.45.17-.84.12-.92-.05-.08-.18-.13-.38-.23z"/>
                      </svg>
                      <span className="text-sm text-gray-700">WhatsApp</span>
                    </a>
                  </div>

                  <p className="text-xs text-gray-600 mt-2">We reply within 24 hours — message us!</p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </footer>
      
      {/* Bottom Footer */}
      <div className="bg-green-100 border-t border-green-200 py-4">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* <div className="flex flex-wrap justify-center md:justify-start space-x-6 mb-4 md:mb-0">
              <a href="#" className="text-sm text-gray-600 hover:text-green-600 transition">Refund policy</a>
              <a href="#" className="text-sm text-gray-600 hover:text-green-600 transition">Privacy policy</a>
              <a href="#" className="text-sm text-gray-600 hover:text-green-600 transition">Terms of service</a>
              <a href="#" className="text-sm text-gray-600 hover:text-green-600 transition">Shipping policy</a>
            </div> */}
            <p className="flex items-center text-sm text-gray-600">©2025, The Face Shop. All rights reserved.</p>
          </div>
        </div>
      </div>
      
      {/* Floating Icons */}
      {/* <div className="fixed bottom-4 left-4 z-50">
        <div className="bg-green-500 text-white p-3 rounded-full shadow-lg">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
          </svg>
        </div>
      </div> */}
      
      {/* <div className="fixed bottom-4 right-4 z-50">
        <div className="bg-green-500 text-white p-3 rounded-full shadow-lg">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
          </svg>
        </div>
      </div> */}
    </>
  );
}
