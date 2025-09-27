import React from 'react';
import { Link } from 'react-router-dom';

const API_BASE = "http://localhost:5000";

export default function ProductCard({ product }) {
  // Helper to get image src
  const getImageSrc = (img) => {
    if (!img) return "";
    // If image is a MongoDB ObjectId (24 hex chars)
    if (typeof img === "string" && /^[a-f\d]{24}$/i.test(img)) {
      return `${API_BASE}/api/image/${img}`;
    }
    // Fallback to previous logic
    if (img.startsWith("http")) return img;
    if (img.startsWith("/")) return `${API_BASE}${img}`;
    return `${API_BASE}/${img}`.replace(/([^:]\/)+/g, "$1");
  };

  // Calculate discount percentage if oldPrice exists
  const discountPercentage = product.oldPrice 
    ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
    : null;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 relative">
      {/* Discount Badge */}
      {discountPercentage && (
        <div className="absolute top-3 left-3 z-10">
          <span className="bg-pink-500 text-white text-xs font-bold px-2 py-1 rounded">
            SAVE {discountPercentage}%
          </span>
        </div>
      )}

      {/* Product Badge */}
      {product.badge && (
        <div className="absolute top-3 right-3 z-10">
          <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
            {product.badge}
          </span>
        </div>
      )}

      {/* Product Image */}
      <div className="relative">
        <img 
          src={getImageSrc(product.images[0])}
          alt={product.name} 
          className="w-full h-48 object-cover"
          onError={(e) => {
            e.target.src = "https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?w=200&h=200&fit=crop&crop=center";
          }}
        />
        
        {/* Product Type Badge */}
        <div className="absolute bottom-2 left-2">
          <span className="bg-white text-gray-800 text-xs px-2 py-1 rounded border">
            {product.type === 'skincare' ? 'Skincare' : 'Haircare'}
          </span>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4">
        <h3 className="text-sm font-medium text-gray-800 mb-2 line-clamp-2 h-10">{product.name}</h3>
        
        
        {/* Price */}
        <div className="mb-3">
          {product.oldPrice ? (
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold text-gray-900">₹{product.price}</span>
              <span className="text-sm text-gray-500 line-through">₹{product.oldPrice}</span>
            </div>
          ) : (
            <span className="text-lg font-bold text-gray-900">₹{product.price}</span>
          )}
        </div>
        
        {/* Rating (if available) */}
        {product.rating && (
          <div className="flex items-center mb-3">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-current' : 'text-gray-300'}`} viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                </svg>
              ))}
            </div>
            <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
          </div>
        )}
        
        {/* CTA Button */}
        <Link 
          to={`/${product.type || 'products'}/${product._id || product.id}`}
          className="block w-full border-2 border-green-500 text-green-500 py-2 px-4 rounded-lg font-medium hover:bg-green-500 hover:text-white transition text-center"
        >
          See Details
        </Link>
      </div>
    </div>
  );
}
