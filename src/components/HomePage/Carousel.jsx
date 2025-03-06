import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const ImageSlider = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    const images = Array.from(slider.children);

    if (images.length === 0) return;

    // Duplicate images dynamically to create an infinite loop
    images.forEach((img) => {
      const clone = img.cloneNode(true);
      slider.appendChild(clone);
    });

    gsap.to(slider, {
      x: "-50%", 
      duration: 50, 
      ease: "linear",
      repeat: -1,
    });

  }, []);

  return (
    <div className="overflow-hidden w-full h-80 relative  min-h-screen  ">
      <div ref={sliderRef} className="flex w-max border-gray-300  border-dashed border-y-2">
        {/* Images */}
        <img src="/gal-1.webp" alt="Slide 1" className="w-1/4 h-auto mx-2" />
        <img src="/gal-2.webp" alt="Slide 2" className="w-1/4 h-auto mx-2" />
        <img src="/gal-3.webp" alt="Slide 3" className="w-1/4 h-auto mx-2" />
        <img src="/gal-4.webp" alt="Slide 4" className="w-1/4 h-auto mx-2" />
      </div>
    </div>
  );
};

export default ImageSlider;
