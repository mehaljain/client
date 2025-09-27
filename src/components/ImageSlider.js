import React from 'react';

export default function ImageSlider() {
  const [active, setActive] = React.useState(0);
  const timerRef = React.useRef();

  // Handle hover and auto-slide
  const handleMouseEnter = () => {
    timerRef.current = setTimeout(() => setActive(1), 1000);
  };
  const handleMouseLeave = () => {
    clearTimeout(timerRef.current);
    setActive(0);
  };

  // Animate back to first image after 2s on hover of second
  React.useEffect(() => {
    if (active === 1) {
      timerRef.current = setTimeout(() => setActive(0), 2000);
      return () => clearTimeout(timerRef.current);
    }
  }, [active]);

  return (
    <div
      className="relative w-full h-80 group overflow-hidden rounded-lg shadow-lg cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={process.env.PUBLIC_URL + "/Skincare_img.png"}
        alt="Skin Care"
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${active === 0 ? 'opacity-100' : 'opacity-0'}`}
      />
      <img
        src={process.env.PUBLIC_URL + "/Haircare_img.png"}
        alt="Hair Care"
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${active === 1 ? 'opacity-100' : 'opacity-0'}`}
      />
    </div>
  );
}
