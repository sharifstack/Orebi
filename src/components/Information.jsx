import React, { useLayoutEffect, useRef } from "react";
import Container from "./layout/Container";
import { RiNumber2 } from "react-icons/ri";
import { MdLocalShipping } from "react-icons/md";
import { FaRotateLeft } from "react-icons/fa6";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Information = () => {
  const wrapRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".info-item");

      // Entrance: staggered fade + slide + scale
      cards.forEach((card) => {
        gsap.from(card, {
          opacity: 0,
          y: 30,
          scale: 0.98,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 90%", // when top of card reaches 90% of viewport
            end: "bottom 10%",
            toggleActions: "play reverse play reverse", // play on enter, reverse on leave
            // markers: true, // enable for debugging
          },
        });
      });

      // Optional: subtle stagger reveal of icons/text together (if desired)
      // Also ensure positions recalculated if images/fonts load later
      ScrollTrigger.refresh();
    }, wrapRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="border-b border-[#F0F0F0] pt-3 md:py-0" ref={wrapRef}>
      <Container className="py-4 flex sm:justify-between flex-col sm:flex-row sm:items-center md:py-7 font-DM">
        <div
          className="warranty info-item flex items-center sm:gap-3.5 gap-1 text-3xl sm:text-[16px] transition-transform duration-300 hover:-translate-y-1 hover:shadow-md rounded-md p-2 cursor-pointer"
          aria-hidden="true"
        >
          <RiNumber2 className="sm:text-[20px] text-2xl" />
          <p className="text-[#6D6D6D] ml-2">Two years warranty</p>
        </div>

        <div
          className="Shipping info-item flex items-center sm:gap-3.5 gap-1 text-3xl sm:text-[16px] transition-transform duration-300 hover:-translate-y-1 hover:shadow-md rounded-md p-2 cursor-pointer"
          aria-hidden="true"
        >
          <MdLocalShipping className="text-[20px] text-2xl" />
          <p className="text-[#6D6D6D] ml-2">Free shipping</p>
        </div>

        <div
          className="Return_policy info-item flex items-center sm:gap-3.5 gap-1 text-3xl sm:text-[16px] transition-transform duration-300 hover:-translate-y-1 hover:shadow-md rounded-md p-2 cursor-pointer"
          aria-hidden="true"
        >
          <FaRotateLeft className="text-[20px] text-2xl" />
          <p className="text-[#6D6D6D] ml-2">Return policy in 30 days</p>
        </div>
      </Container>
    </div>
  );
};

export default Information;
