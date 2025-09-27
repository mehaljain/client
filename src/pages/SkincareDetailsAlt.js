import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

export default function SkincareDetailsAlt() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);

  const API_BASE = "https://hs-project-server.onrender.com";

  useEffect(() => {
    if (!id) {
      setError("No product id provided in URL.");
      setLoading(false);
      return;
    }

    const fetchProduct = async () => {
      setLoading(true);
      setError(null);
      try {
        const url = `${API_BASE}/api/skincare/${encodeURIComponent(id)}?t=${Date.now()}`;
        const res = await axios.get(url, { headers: { "Content-Type": "application/json" } });

        const incoming = res.data && (res.data.product ? res.data.product : res.data);

        if (!incoming || Object.keys(incoming).length === 0) {
          setError("Product not found or backend returned empty object.");
          setProduct(null);
        } else {
          const images = Array.isArray(incoming.images)
            ? incoming.images
                .map((img) => {
                  if (!img) return null;
                  if (typeof img === "string" && (img.startsWith("http://") || img.startsWith("https://"))) return img;
                  // If img looks like an ObjectId, build GridFS image URL
                  if (typeof img === "string" && /^[a-fA-F0-9]{24}$/.test(img)) return `${API_BASE}/api/image/${img}`;
                  if (typeof img === "string" && img.startsWith("/")) return `${API_BASE}${img}`;
                  return `${API_BASE}/${img}`.replace(/([^:]\/)\/+/g, "$1");
                })
                .filter(Boolean)
            : [];

          setProduct({ ...incoming, images });
        }
      } catch (err) {
        console.error("[SkincareDetailsAlt] fetch error:", err);
        const serverMsg = err.response?.data?.message || err.response?.data || null;
        setError(serverMsg || "Failed to fetch product. See console for details.");
        setProduct(null);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-green-500"></div>
          <p className="mt-4 text-gray-600">Loading product details...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-600 mb-4 text-lg">{error}</div>
          <Link to="/skincare" className="inline-block px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition">
            Back to Skincare Products
          </Link>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="text-gray-600 mb-4 text-lg">Product not found.</div>
          <Link to="/skincare" className="inline-block px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition">
            Back to Skincare Products
          </Link>
        </div>
      </div>
    );
  }

  const skinTypes = (product.skinType || []).filter((s) => s && String(s).trim() !== "");
  const skinConcerns = (product.skinConcern || []).filter((s) => s && String(s).trim() !== "");
  const discountPercentage = product.oldPrice 
    ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
    : null;

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="bg-pink-100 py-8 px-8">
        <div className="max-w-7xl mx-auto">
          <Link to="/skincare" className="inline-flex items-center text-green-600 hover:text-green-700 transition mb-4">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Skincare Products
          </Link>
          <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
        </div>
      </div>

      {/* Product Details Section */}
      <div className="py-16 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div className="space-y-4">
              {/* Main Image */}
              <div className="bg-gray-50 rounded-lg p-8 flex items-center justify-center">
                {product.images && product.images.length > 0 ? (
                  <img
                    src={product.images[selectedImage]}
                    alt={product.name}
                    className="max-h-96 max-w-full object-contain rounded-lg"
                    onError={(e) => {
                      e.target.src = "https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?w=400&h=400&fit=crop&crop=center";
                    }}
                  />
                ) : (
                  <div className="text-gray-500 text-center">
                    <svg className="mx-auto h-24 w-24 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p>No images available</p>
                  </div>
                )}
              </div>

              {/* Thumbnail Images */}
              {product.images && product.images.length > 1 && (
                <div className="flex space-x-2 overflow-x-auto">
                  {product.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImage(idx)}
                      className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 ${
                        selectedImage === idx ? 'border-green-500' : 'border-gray-200'
                      }`}
                    >
                      <img
                        src={img}
                        alt={`${product.name} ${idx + 1}`}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.src = "https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?w=80&h=80&fit=crop&crop=center";
                        }}
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Information */}
            <div className="space-y-6">
              {/* Product Title */}
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-2">{product.name}</h2>
                {product.range && (
                  <p className="text-lg text-gray-600">{product.range}</p>
                )}
              </div>

              {/* Price */}
              <div className="space-y-2">
                {product.oldPrice ? (
                  <div className="flex items-center space-x-4">
                    <span className="text-3xl font-bold text-gray-900">₹{product.price}</span>
                    <span className="text-xl text-gray-500 line-through">₹{product.oldPrice}</span>
                    {discountPercentage && (
                      <span className="bg-pink-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                        SAVE {discountPercentage}%
                      </span>
                    )}
                  </div>
                ) : (
                  <span className="text-3xl font-bold text-gray-900">₹{product.price}</span>
                )}
                <p className="text-sm text-gray-500">Inclusive of all taxes</p>
              </div>

              {/* Product Details */}
              <div className="space-y-4">
                {skinTypes.length > 0 && (
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Skin Type:</h3>
                    <div className="flex flex-wrap gap-2">
                      {skinTypes.map((type, idx) => (
                        <span key={idx} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                          {type}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {skinConcerns.length > 0 && (
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Skin Concerns:</h3>
                    <div className="flex flex-wrap gap-2">
                      {skinConcerns.map((concern, idx) => (
                        <span key={idx} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                          {concern}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Description */}
              {product.description && (
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Description:</h3>
                  <p className="text-gray-600 leading-relaxed whitespace-pre-line">{product.description}</p>
                </div>
              )}

              {/* Action Buttons
              <div className="space-y-4 pt-6">
                <button className="w-full bg-green-500 text-white py-3 px-6 rounded-lg font-medium hover:bg-green-600 transition">
                  Add to Cart
                </button>
                <button className="w-full border-2 border-green-500 text-green-500 py-3 px-6 rounded-lg font-medium hover:bg-green-500 hover:text-white transition">
                  Add to Wishlist
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* Product Features Section */}
      <div className="py-16 px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Why Choose This Product?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-white p-6 rounded-lg shadow-md">
              <div className="text-green-500 mb-4 flex justify-center">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Dermatologist Tested</h3>
              <p className="text-gray-600">Clinically tested for safety and skin compatibility</p>
            </div>
            <div className="text-center bg-white p-6 rounded-lg shadow-md">
              <div className="text-green-500 mb-4 flex justify-center">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Natural Ingredients</h3>
              <p className="text-gray-600">Formulated with premium natural and organic ingredients</p>
            </div>
            <div className="text-center bg-white p-6 rounded-lg shadow-md">
              <div className="text-green-500 mb-4 flex justify-center">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Paraben-Free</h3>
              <p className="text-gray-600">Free from harmful chemicals and artificial preservatives</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
