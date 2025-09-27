import React from 'react';
import axios from 'axios';

export default function Offers() {
  const [offers, setOffers] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  const API_BASE = 'http://localhost:5000';

  React.useEffect(() => {
    let cancelled = false;
    const fetchOffers = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await axios.get(`${API_BASE}/api/offers`, { headers: { 'Content-Type': 'application/json' } });
        const raw = Array.isArray(res.data) ? res.data : (res.data?.offers || []);
        const normalized = raw.map((o, idx) => ({
          id: o.id || o._id || idx,
          title: o.title || 'Offer',
          subtitle: o.subtitle || '',
          description: o.description || '',
          image: typeof o.imageUrl === 'string' ? o.imageUrl : (typeof o.image === 'string' ? o.image : (typeof o.path === 'string' ? o.path : '')),
          discount: o.discount || o.badge || '',
          category: o.category || '',
          validUntil: o.validUntil || o.expiry || 'Ongoing',
        })).map((o) => ({
          ...o,
          image: o.image
            ? (o.image.startsWith('http') ? o.image : (o.image.startsWith('/') ? `${API_BASE}${o.image}` : `${API_BASE}/${o.image}`.replace(/([^:]\/)\/+/g, '$1')))
            : '',
        }));
        if (!cancelled) setOffers(normalized);
      } catch (err) {
        if (!cancelled) setError('Failed to load offers.');
      } finally {
        if (!cancelled) setLoading(false);
      }
    };
    fetchOffers();
    return () => { cancelled = true; };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="bg-pink-100 py-16 px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">Special Offers</h1>
          <p className="text-lg text-gray-600 mb-8">Discover amazing deals and discounts on premium skincare and haircare products</p>
          <div className="w-32 h-1 bg-gray-300 mx-auto"></div>
        </div>
      </div>

      {/* Offers Grid or Empty State */}
      <div className="py-16 px-8">
        <div className="max-w-7xl mx-auto">
          {loading ? (
            <div className="py-16 text-center text-gray-600">Loading offers...</div>
          ) : offers.length === 0 ? (
            <div className="py-16 text-center">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">OOPS! There is no offer going on</h2>
              <p className="text-gray-600">Please check back later.</p>
            </div>
          ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offers.map((offer) => (
              <div key={offer.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                {/* Offer Image */}
                <div className="relative">
                  <img 
                    src={offer.image && /^[a-f\d]{24}$/i.test(offer.image)
                      ? `${API_BASE}/api/image/${offer.image}`
                      : offer.image}
                    alt={offer.title} 
                    className="w-full h-48 object-cover"
                    onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=300&fit=crop&crop=center'; }}
                  />
                  {/* Discount Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 text-sm font-bold text-white rounded-full ${
                      offer.discount?.includes('FREE') ? 'bg-green-500' : 
                      offer.discount?.includes('50%') ? 'bg-red-500' :
                      offer.discount?.includes('40%') ? 'bg-purple-500' :
                      offer.discount?.includes('35%') ? 'bg-pink-500' :
                      offer.discount?.includes('33%') ? 'bg-blue-500' :
                      'bg-orange-500'
                    }`}>
                      {offer.discount || 'OFFER'}
                    </span>
                  </div>
                  {/* Category Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="bg-white text-gray-800 px-2 py-1 text-xs font-medium rounded">
                      {offer.category || 'Promo'}
                    </span>
                  </div>
                </div>

                {/* Offer Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{offer.title}</h3>
                  {offer.subtitle && <p className="text-lg font-semibold text-green-600 mb-3">{offer.subtitle}</p>}
                  {offer.description && <p className="text-gray-600 mb-4">{offer.description}</p>}
                  
                  {/* Valid Until */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-gray-500">
                      Valid until: {offer.validUntil}
                    </span>
                  </div>

                  {/* CTA Button */}
                  <button className="w-full bg-green-500 text-white py-3 px-4 rounded-lg font-medium hover:bg-green-600 transition">
                    Shop Now
                  </button>
                </div>
              </div>
            ))}
          </div>
          )}
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-gray-50 py-16 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Don't Miss Out!</h2>
          <p className="text-lg text-gray-600 mb-8">Subscribe to our newsletter and be the first to know about exclusive offers and new products</p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button className="bg-green-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-600 transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Terms & Conditions */}
      <div className="py-8 px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Terms & Conditions</h3>
          <div className="text-sm text-gray-600 space-y-2">
            <p>• Offers are valid for limited time only and subject to availability</p>
            <p>• Discounts cannot be combined with other promotional offers</p>
            <p>• Free shipping on orders above ₹999</p>
            <p>• All offers are subject to terms and conditions</p>
            <p>• HSFreshFaces reserves the right to modify or cancel offers at any time</p>
          </div>
        </div>
      </div>
    </div>
  );
}
