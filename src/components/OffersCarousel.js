import React from 'react';
import axios from 'axios';

export default function OffersCarousel() {
  const [images, setImages] = React.useState([]);
  const [active, setActive] = React.useState(0);
  const intervalRef = React.useRef();

  const API_BASE = 'http://localhost:5000';
  const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=1200&h=400&fit=crop&crop=center';

  React.useEffect(() => {
    let cancelled = false;
    const fetchOffers = async () => {
      try {
        const url = `${API_BASE}/api/offers`;
        const res = await axios.get(url, { headers: { 'Content-Type': 'application/json' } });
        const raw = Array.isArray(res.data) ? res.data : (res.data?.offers || []);
        const normalized = raw
          .map((item) => {
            const src = item?.imageUrl || item?.url || item?.image || item?.path;
            if (!src) return null;
            if (typeof src === 'string' && (src.startsWith('http://') || src.startsWith('https://'))) return src;
            if (typeof src === 'string' && src.startsWith('/')) return `${API_BASE}${src}`;
            return `${API_BASE}/${src}`.replace(/([^:]\/)\/+/g, '$1');
          })
          .filter(Boolean);
        if (!cancelled) setImages(normalized.length > 0 ? normalized : [DEFAULT_IMAGE]);
      } catch (err) {
        if (!cancelled) setImages([DEFAULT_IMAGE]);
      }
    };
    fetchOffers();
    return () => { cancelled = true; };
  }, []);

  React.useEffect(() => {
    if (!images || images.length <= 1) return;
    intervalRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(intervalRef.current);
  }, [images]);

  return (
    <div className="relative w-full h-64 sm:h-72 lg:h-80 overflow-hidden rounded-xl shadow-lg">
      {(images.length > 0 ? images : [DEFAULT_IMAGE]).map((src, idx) => (
        <img
          key={`${src}-${idx}`}
          src={src}
          alt="Offer"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${idx === active ? 'opacity-100' : 'opacity-0'}`}
          onError={(e) => { e.currentTarget.src = DEFAULT_IMAGE; }}
        />
      ))}

      {images.length > 1 && (
        <div className="absolute bottom-3 left-0 right-0 flex items-center justify-center gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => setActive(i)}
              className={`w-2.5 h-2.5 rounded-full ${i === active ? 'bg-green-500' : 'bg-white/70'} shadow`}
            />)
          )}
        </div>
      )}
    </div>
  );
}


