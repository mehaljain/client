// src/components/ProductsList.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ProductsList() {
  const [skincare, setSkincare] = useState([]);
  const [haircare, setHaircare] = useState([]);
  const API_BASE = "https://hs-project-server.onrender.com";

  useEffect(() => {
    // helper to prefix images if backend returns relative paths or ids
    const normalizeImage = (img) => {
      if (!img) return null;

      // If it's an object like { fileId } or { _id }
      if (typeof img === "object") {
        const id = img.fileId || img._id || img.id;
        if (typeof id === "string" && /^[a-f\d]{24}$/i.test(id)) {
          return `${API_BASE}/api/image/${id}`;
        }
        // if object has a url/path in another property
        if (img.url || img.path) {
          const u = img.url || img.path;
          if (typeof u === "string" && u.startsWith("/")) return `${API_BASE}${u}`;
          if (typeof u === "string" && (u.startsWith("http://") || u.startsWith("https://"))) return u;
        }
        return null;
      }

      // If it's a 24-hex string (GridFS file id)
      if (typeof img === "string" && /^[a-f\d]{24}$/i.test(img)) {
        return `${API_BASE}/api/image/${img}`;
      }

      // Full absolute url
      if (typeof img === "string" && (img.startsWith("http://") || img.startsWith("https://"))) return img;

      // Backend relative path (starts with '/')
      if (typeof img === "string" && img.startsWith("/")) return `${API_BASE}${img}`;

      // Fallback: treat as relative filename/path and prefix
      if (typeof img === "string") return `${API_BASE}/${img}`.replace(/([^:]\/)\/+/g, "$1");

      return null;
    };

    fetch("http://localhost:5000/api/skincare")
      .then((res) => res.json())
      .then((data) => {
        const arr = Array.isArray(data) ? data : (data.products || []);
        setSkincare(
          arr.map((p) => ({
            ...p,
            type: "skincare",
            images: Array.isArray(p.images) ? p.images.map(normalizeImage) : [],
          }))
        );
      })
      .catch(() => setSkincare([]));

    fetch("http://localhost:5000/api/haircare")
      .then((res) => res.json())
      .then((data) => {
        const arr = Array.isArray(data) ? data : (data.products || []);
        setHaircare(
          arr.map((p) => ({
            ...p,
            type: "haircare",
            images: Array.isArray(p.images) ? p.images.map(normalizeImage) : [],
          }))
        );
      })
      .catch(() => setHaircare([]));
  }, []);

  const allProducts = [...skincare, ...haircare];

  const renderProductCard = (product, index) => {
    const id = product._id || product.id;
    const imageSrc =
      product.images && product.images.length > 0
        ? product.images[0]
        : "https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?w=200&h=200&fit=crop&crop=center";

    // Discount badge color logic
    const discountIsSave = typeof product.discount === "string" && product.discount.includes("SAVE");

    return (
      <div
        key={id || index}
        className="bg-white rounded-lg shadow-md overflow-hidden relative"
        style={{ minWidth: 0 }}
      >
        {/* Discount Badge (top-left) */}
        {product.discount && (
          <div className="absolute top-2 left-2 z-10">
            <span
              className={`px-2 py-1 text-xs font-bold text-white rounded ${
                discountIsSave ? "bg-pink-500" : "bg-green-500"
              }`}
            >
              {product.discount}
            </span>
          </div>
        )}

        {/* Product Type Badge (top-right) */}
        <div className="absolute top-2 right-2 z-10">
          <span className="inline-flex items-center gap-2 px-2 py-1 text-xs font-semibold text-white rounded-full bg-indigo-600">
            <span
              className={`inline-block w-2 h-2 rounded-full ${
                product.type === "skincare" ? "bg-pink-300" : "bg-yellow-300"
              }`}
            />
            {product.type ? product.type.charAt(0).toUpperCase() + product.type.slice(1) : "Product"}
          </span>
        </div>

        <div className="relative">
          <img
            src={imageSrc}
            alt={product.name}
            className="w-full h-48 object-cover"
            onError={(e) => {
              // use currentTarget to be safe
              e.currentTarget.src =
                "https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?w=200&h=200&fit=crop&crop=center";
              console.warn("Image failed to load:", imageSrc);
            }}
          />
          {product.badges && (
            <div className="absolute bottom-2 left-2">
              {product.badges.map((badge, idx) => (
                <div key={idx} className="bg-pink-100 text-pink-800 text-xs px-2 py-1 rounded mb-1">
                  {badge}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="p-4">
          <h3 className="text-sm font-medium text-gray-800 mb-2 line-clamp-2">{product.name}</h3>

          <div className="mb-2">
            {product.oldPrice ? (
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold text-gray-900">₹{product.price}</span>
                <span className="text-sm text-gray-500 line-through">₹{product.oldPrice}</span>
              </div>
            ) : (
              <span className="text-lg font-bold text-gray-900">₹{product.price}</span>
            )}
          </div>

          <Link
            to={`/${product.type || "skincare"}/${id}`}
            className="w-full block border-2 border-green-500 text-green-500 py-2 px-4 rounded-lg font-medium hover:bg-green-500 hover:text-white transition text-center"
          >
            See Details
          </Link>
        </div>
      </div>
    );
  };

  return <>{allProducts.map((product, index) => renderProductCard(product, index))}</>;
}

export default ProductsList;
