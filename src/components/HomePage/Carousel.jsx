import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const ImageSlider = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    const images = slider.querySelectorAll("img");

    // Get the width of the container and the images
    const imageWidth = images[0].offsetWidth + 20;  
    const imagesToShow = 4; 
    const totalWidth = imageWidth * imagesToShow;  

    // Clone the images to create a continuous loop
    images.forEach((img) => {
      const clone = img.cloneNode(true);
      slider.appendChild(clone);  
    });


    gsap.to(slider, {
      x: -totalWidth,  
      duration: 20,  
      ease: "linear", 
      repeat: -1,  
      modifiers: {
        x: (x) => {
          
          if (parseFloat(x) <= -totalWidth) {
            return "0px"; 
          }
          return x; 
        },
      },
    });
  }, []);

  return (
    <div
      ref={sliderRef}
      className="overflow-hidden relative flex"
      style={{ width: "100%", height: "400px" }} 
    >
      {/* images */}
      <img
        src="/public/gal-1.webp"
        alt="Slide 1"
        className="flex-shrink-0 mr-5"
        style={{ width: "calc(25% - 20px)" }}  
      />
      <img
        src="/public/gal-2.webp"
        alt="Slide 2"
        className="flex-shrink-0 mr-5"
        style={{ width: "calc(25% - 20px)" }}
      />
      <img
        src="/public/gal-3.webp"
        alt="Slide 3"
        className="flex-shrink-0 mr-5"
        style={{ width: "calc(25% - 20px)" }}
      />
      <img
        src="/public/gal-4.webp"
        alt="Slide 4"
        className="flex-shrink-0 mr-5"
        style={{ width: "calc(25% - 20px)" }}
      />

      {/* Cloned images (to create continuous effect) */}
      <img
        src="/public/gal-1.webp"
        alt="Slide 1"
        className="flex-shrink-0 mr-5"
        style={{ width: "calc(25% - 20px)" }}
      />
      <img
        src="/public/gal-2.webp"
        alt="Slide 2"
        className="flex-shrink-0 mr-5"
        style={{ width: "calc(25% - 20px)" }}
      />
      <img
        src="/public/gal-3.webp"
        alt="Slide 3"
        className="flex-shrink-0 mr-5"
        style={{ width: "calc(25% - 20px)" }}
      />
      <img
        src="/public/gal-4.webp"
        alt="Slide 4"
        className="flex-shrink-0 mr-5"
        style={{ width: "calc(25% - 20px)" }}
      />
    </div>
  );
};

export default ImageSlider;
