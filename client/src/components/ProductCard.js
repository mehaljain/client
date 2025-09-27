import React from "react";

const API_BASE = "http://localhost:5000";

export default function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center">
      {/* Show first image if available */}
      {Array.isArray(product.images) && product.images.length > 0 ? (
        <img
          src={`${API_BASE}/api/image/${product.images[0]}`}
          alt={product.name}
          className="h-40 w-40 object-cover rounded mb-4"
        />
      ) : (
        <div className="h-40 w-40 bg-gray-200 flex items-center justify-center rounded mb-4">No Image</div>
      )}
      <h3 className="text-lg font-bold mb-2">{product.name}</h3>
      <p className="text-sm text-gray-600 mb-2">₹{product.price}</p>
      <p className="text-sm text-gray-600 mb-2">{product.description}</p>
      {/* ...other product details... */}
    </div>
  );
}
