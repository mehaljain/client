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
                Founded in 2003 and headquartered in Seoul, The Face Shop is inspired by nature and believes that there is natural beauty to everyone. We have been in search of better nature, wading through sharp thorns, into hard husks and we have added great care to deliver the best for your skin which is why we source over 600 natural ingredients from across 25 countries across the world and marry them with Korean technology so that you can be a part of our natural story.
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
            <div>
              <h3 className="font-bold text-lg mb-4">KNOW MORE</h3>
              <div className="space-y-2">
                <a href="/about" className="block text-sm hover:text-green-600 transition">About Us</a>
                <a href="#" className="block text-sm hover:text-green-600 transition">Loyalty Program</a>
                <a href="#" className="block text-sm hover:text-green-600 transition">Redeem Points</a>
                <a href="#" className="block text-sm hover:text-green-600 transition">Affiliate Program</a>
                <a href="#" className="block text-sm hover:text-green-600 transition">Store Locator</a>
                <a href="#" className="block text-sm hover:text-green-600 transition">Blogs</a>
                <a href="#" className="block text-sm hover:text-green-600 transition">Help & FAQ's</a>
              </div>
            </div>
            
            {/* Column 4: Subscribe */}
            <div>
              <h3 className="font-bold text-lg mb-4">SUBSCRIBE</h3>
              <div className="space-y-4">
                {/* Email Subscription
                <div>
                  <div className="flex">
                    <input 
                      type="email" 
                      placeholder="Enter email here" 
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                    <button className="bg-green-500 text-white px-4 py-2 rounded-r-lg hover:bg-green-600 transition">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                  <p className="text-xs text-gray-600 mt-1">Sign up to our mailing list</p>
                </div> */}
                
                {/* App Downloads */}
                {/* <div className="space-y-2">
                  <button className="flex items-center w-full bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition">
                    <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                    </svg>
                    GET IT ON Google Play
                  </button>
                  <button className="flex items-center w-full bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition">
                    <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z"/>
                    </svg>
                    Download on the App Store
                  </button>
                  <p className="text-xs text-gray-600">Shop Smarter: Download the App Now</p>
                </div>
                
                {/* Social Media */}
                {/* <div className="flex space-x-4">
                  <a href="#" className="text-gray-600 hover:text-green-600 transition">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-gray-600 hover:text-green-600 transition">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                    </svg>
                  </a>
                </div>  */}
              </div>
            </div>
          </div>
        </div>
      </footer>
      
      {/* Bottom Footer */}
      <div className="bg-green-100 border-t border-green-200 py-4">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex flex-wrap justify-center md:justify-start space-x-6 mb-4 md:mb-0">
              <a href="#" className="text-sm text-gray-600 hover:text-green-600 transition">Refund policy</a>
              <a href="#" className="text-sm text-gray-600 hover:text-green-600 transition">Privacy policy</a>
              <a href="#" className="text-sm text-gray-600 hover:text-green-600 transition">Terms of service</a>
              <a href="#" className="text-sm text-gray-600 hover:text-green-600 transition">Shipping policy</a>
            </div>
            <p className="text-sm text-gray-600">©2025, The Face Shop. All rights reserved.</p>
          </div>
        </div>
      </div>
      
      {/* Floating Icons */}
      <div className="fixed bottom-4 left-4 z-50">
        <div className="bg-green-500 text-white p-3 rounded-full shadow-lg">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
          </svg>
        </div>
      </div>
      
      <div className="fixed bottom-4 right-4 z-50">
        <div className="bg-green-500 text-white p-3 rounded-full shadow-lg">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
          </svg>
        </div>
      </div>
    </>
  );
}
