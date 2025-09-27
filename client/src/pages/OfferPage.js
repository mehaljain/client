import React, { useEffect, useState } from "react";

const API_BASE = "http://localhost:5000";

export default function OfferPage() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchImages() {
      try {
        const res = await fetch(`${API_BASE}/api/offers/images`);
        const data = await res.json();
        setImages(Array.isArray(data.images) ? data.images : []);
      } catch (err) {
        setImages([]);
      } finally {
        setLoading(false);
      }
    }
    fetchImages();
  }, []);

  return (
    <div className="max-w-3xl mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6 text-center">Current Offers</h1>
      {loading ? (
        <div className="text-center py-12">Loading...</div>
      ) : images.length === 0 ? (
        <div className="text-center py-12">No offers available.</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {images.map((img) => (
            <div key={img._id} className="bg-white rounded-xl shadow p-4 flex flex-col items-center">
              <img src={`${API_BASE}/api/image/${img.url}`} alt="Offer" className="h-48 w-48 object-cover rounded mb-2" />
              <div className="text-sm text-gray-500">{new Date(img.uploadedAt).toLocaleString()}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
