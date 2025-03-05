import { TiArrowRightThick } from 'react-icons/ti';
import { gsap } from 'gsap';
import { useEffect } from 'react';
import './rotateImage.css';

const TalkSection = () => {
  useEffect(() => {
    // Wave bounce animation for both texts
    gsap.to(".wave-bounce", {
      y: -20,
      repeat: -1,
      yoyo: true,
      duration: 0.6,
      ease: "ease.inOut",
      stagger: 0.3,  // This stagger will create a wave effect between the two texts
    });

    // Gradient purple color change every 3 seconds for both texts
    const purpleGradientColors = ["#8e2de2", "#4a00e0"];  // Purple shades
    let index = 0;
    setInterval(() => {
      gsap.to(".gradient-text", {
        color: purpleGradientColors[index],
        duration: 1,
      });
      index = (index + 1) % purpleGradientColors.length;
    }, 3000);
  }, []);

  return (
    <div className="bg-[#1E1E1E] text-white py-16 px-8 text-center w-full">
      <div className="max-w-6xl mx-auto">
        {/* Main heading with wave bouncing animation */}
        <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold text-white mb-4 flex gap-5 items-center wave-bounce gradient-text">
          Let's Talk
          <img
            className="rotate-image"
            style={{ width: "30px", height: "30px", filter: "brightness(0) invert(1)" }}
            src="/ab-shape-img.webp"
            alt=""
          />
        </h1>

        <div className="flex flex-col sm:flex-row pt-5 gap-8 sm:gap-12 text-start">
          <button className="bg-white text-black p-6 sm:p-8 rounded-full text-xl sm:text-2xl flex items-center gap-2">
            Get <br /> in Touch <br /> <TiArrowRightThick />
          </button>
          <div className="flex-1">
            {/* Text with gradient animation and wave bounce */}
            <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold text-white mb-4 wave-bounce gradient-text">
              about it
            </h1>
            <p className="mt-4 text-lg sm:text-xl">
              We will collaborate to find the right answer and bring progress <br />
              to your business and to the world.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TalkSection;
