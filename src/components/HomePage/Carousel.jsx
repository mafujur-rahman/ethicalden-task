import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Draggable from "gsap/Draggable";
import "./Carousel.css"; 

const images = [
  "https://picsum.photos/id/32/1200/500",
  "https://picsum.photos/id/33/1200/500",
  "https://picsum.photos/id/34/1200/500",
  "https://picsum.photos/id/35/1200/500",
  "https://picsum.photos/id/36/1200/500",
  "https://picsum.photos/id/37/1200/500",
  "https://picsum.photos/id/38/1200/500",
  "https://picsum.photos/id/39/1200/500",
  "https://picsum.photos/id/40/1200/500",
  "https://picsum.photos/id/41/1200/500",
];

const CurvedCarousel = () => {
  const ringRef = useRef(null);
  const draggerRef = useRef(null);
  let xPos = 0;

  useEffect(() => {
    gsap.registerPlugin(Draggable);

    gsap.timeline()
      .set(draggerRef.current, { opacity: 0 })
      .set(ringRef.current, { rotationY: 180 })
      .set(".img", {
        rotateY: (i) => i * -36,
        transformOrigin: "50% 50% 400px",
        width: "100%",
        height: "100%",
        z: -400,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backfaceVisibility: "hidden",
      })
      .from(".img", {
        duration: 1.2,
        y: 100,
        opacity: 0,
        stagger: 0.1,
        ease: "expo",
      });

    Draggable.create(draggerRef.current, {
      onDragStart: (e) => {
        if (e.touches) e.clientX = e.touches[0].clientX;
        xPos = Math.round(e.clientX);
      },
      onDrag: (e) => {
        if (e.touches) e.clientX = e.touches[0].clientX;
        gsap.to(ringRef.current, {
          rotationY: "-=" + ((Math.round(e.clientX) - xPos) % 360),
          onUpdate: () => {
            gsap.set(".img", {
              backgroundPosition: "center",
            });
          },
        });
        xPos = Math.round(e.clientX);
      },
      onDragEnd: () => {
        gsap.set(draggerRef.current, { x: 0, y: 0 });
      },
    });
  }, []);

  return (
    <section className="carousel-container">
      <div id="ring" ref={ringRef}>
        {images.map((img, i) => (
          <div key={i} className="img" style={{ backgroundImage: `url(${img})` }}></div>
        ))}
      </div>
      <div id="dragger" ref={draggerRef}></div>
    </section>
  );
};

export default CurvedCarousel;
