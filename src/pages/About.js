import React from 'react';

export default function About() {
  const features = [
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Clinically Tested",
      description: "All our products undergo rigorous clinical testing to ensure safety and effectiveness."
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: "100% Natural",
      description: "We use only natural ingredients sourced from the finest locations worldwide."
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      ),
      title: "100% Vegan",
      description: "Cruelty-free products that are completely vegan and environmentally conscious."
    }
  ];

  const stats = [
    { number: "600+", label: "Natural Ingredients" },
    { number: "25", label: "Countries Sourced" },
    { number: "100%", label: "Cruelty Free" },
    { number: "20+", label: "Years Experience" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="bg-pink-100 py-16 px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">About HSFreshFaces</h1>
          <p className="text-lg text-gray-600 mb-8">Your trusted destination for premium haircare and skincare products</p>
          <div className="w-32 h-1 bg-gray-300 mx-auto"></div>
        </div>
      </div>

      {/* Hero Image Section */}
      <div className="py-16 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?w=1200&h=600&fit=crop&crop=center"
              alt="HSFreshFaces About"
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
              <div className="text-center text-white">
                <h2 className="text-3xl font-bold mb-4">Quality You Can Trust</h2>
                <p className="text-lg">Premium products for your hair and skin</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Content */}
      <div className="py-16 px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Welcome to HSFreshFaces, your trusted destination for premium haircare and skincare products. Our mission is to empower you to look and feel your best by providing a curated selection of high-quality, clinically tested, 100% natural and vegan products.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                At HSFreshFaces, we believe in transparency, safety, and effectiveness. Every product in our collection is carefully crafted and certified to meet the highest standards, ensuring you receive only the best for your hair and skin.
              </p>
              <p className="text-lg text-gray-600">
                We are committed to sustainability and ethical practices, offering products that are cruelty-free and environmentally conscious. Our team is passionate about helping you discover solutions that truly work, with ingredients you can trust.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center bg-white p-6 rounded-lg shadow-md">
                  <div className="text-3xl font-bold text-green-600 mb-2">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose HSFreshFaces?</h2>
            <div className="w-32 h-1 bg-gray-300 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center bg-white p-8 rounded-lg shadow-lg">
                <div className="text-green-500 mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-16 px-8 bg-green-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Mission</h2>
          <p className="text-lg text-gray-600 mb-8">
            To provide you with the highest quality, natural, and effective haircare and skincare products that enhance your natural beauty while maintaining the highest standards of safety and sustainability.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Quality First</h3>
              <p className="text-gray-600">Every product is carefully selected and tested for the highest quality standards.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Natural Ingredients</h3>
              <p className="text-gray-600">We source the finest natural ingredients from around the world.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Customer Care</h3>
              <p className="text-gray-600">Your satisfaction and well-being are our top priorities.</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Ready to Start Your Journey?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Explore our collection and experience the difference of quality, care, and innovation in every bottle.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/shop-all">
              <button className="bg-green-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-green-600 transition">
                Shop Now
              </button>
            </a>
            <button className="border-2 border-green-500 text-green-500 px-8 py-3 rounded-lg font-medium hover:bg-green-500 hover:text-white transition">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
