import React, { useLayoutEffect, useRef } from "react";
import Container from "./layout/Container";
import Ads02 from "../../public/Ads_2.jpg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Ad02 = () => {
  const wrapRef = useRef(null);
  const imgRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const el = imgRef.current;

      if (!el) return;

      // Main scroll reveal (fade + slide + scale)
      gsap.fromTo(
        el,
        { autoAlpha: 0, y: 60, scale: 1.04 },
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            end: "bottom 20%",
            toggleActions: "play reverse play reverse",
          },
        }
      );

      // Parallax effect while scrolling
      gsap.to(el, {
        y: -12,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.7,
        },
      });

      ScrollTrigger.refresh();
    }, wrapRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="md:pb-32 pb-0 px-3 md:px-0" ref={wrapRef}>
      <Container>
        <img
          ref={imgRef}
          className="w-full h-full object-cover rounded-md overflow-hidden shadow-md"
          src={Ads02}
          alt="Advertisement"
        />
      </Container>
    </div>
  );
};

export default Ad02;
