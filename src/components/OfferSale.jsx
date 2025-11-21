import React, { useLayoutEffect, useRef } from "react";
import Container from "./layout/Container";
import Ad_1 from "/Ad_1.jpg";
import Ad_2 from "/Ad_2.jpg";
import Ad_3 from "/Ad_3.jpg";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function OfferSale() {
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const imagesRef = useRef([]);
  imagesRef.current = [];

  const addToRefs = (el) => {
    if (el && !imagesRef.current.includes(el)) imagesRef.current.push(el);
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Large hero image animation: subtle parallax scale + y on scroll
      if (imagesRef.current[0]) {
        gsap.fromTo(
          imagesRef.current[0],
          { scale: 1.06, y: 40, opacity: 0.95 },
          {
            scale: 1,
            y: 0,
            opacity: 1,
            ease: "power3.out",
            scrub: 0.8,
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top bottom",
              end: "+=600",
              scrub: true,
            },
            duration: 1.2,
          }
        );
      }

      // Staggered fade + rise for the smaller images
      imagesRef.current.slice(1).forEach((el, i) => {
        gsap.fromTo(
          el,
          { y: 40, opacity: 0, scale: 0.985 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.9,
            delay: i * 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              end: "top 35%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      // Gentle hover pop for every image to make it feel interactive
      imagesRef.current.forEach((el) => {
        el.addEventListener("mouseenter", () => {
          gsap.to(el, { scale: 1.03, duration: 0.35, ease: "power2.out" });
        });
        el.addEventListener("mouseleave", () => {
          gsap.to(el, { scale: 1, duration: 0.45, ease: "power3.out" });
        });
      });
    }, containerRef);

    return () => {
      // cleanup all ScrollTriggers and context animations
      ScrollTrigger.getAll().forEach((t) => t.kill());
      ctx.revert();
    };
  }, []);

  return (
    <div className="sm:my-24 my-12">
      <Container
        ref={containerRef}
        className="h-[780px] grid grid-cols-1 grid-rows-1 gap-3 md:gap-10 md:grid-cols-2 md:grid-rows-2"
      >
        <img
          ref={addToRefs}
          onClick={() => navigate("/shop")}
          className="h-full w-full object-cover cursor-pointer row-span-2 transform will-change-transform"
          src={Ad_1}
          alt="Offer 1"
        />

        <img
          ref={addToRefs}
          className="h-full w-full object-cover cursor-pointer transform will-change-transform"
          src={Ad_2}
          alt="Offer 2"
        />

        <img
          ref={addToRefs}
          className="h-full w-full object-cover cursor-pointer transform will-change-transform"
          src={Ad_3}
          alt="Offer 3"
        />
      </Container>
    </div>
  );
}
