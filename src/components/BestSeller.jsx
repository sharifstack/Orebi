import React, { useLayoutEffect, useRef, useEffect, useState } from "react";
import Container from "./layout/Container";
import Headertext from "./layout/Headertext";
import ProductItem from "./layout/ProductItem";

import b1 from "../../public/Bestseller/b1.png";
import b2 from "../../public/Bestseller/b2.png";
import b3 from "../../public/Bestseller/b3.png";
import b4 from "../../public/Bestseller/b4.png";
import Button from "./layout/Button";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const BestSeller = () => {
  const [show, setShow] = useState(false);
  const wrapRef = useRef(null);

  // Refresh ScrollTrigger when `show` changes (extra items become visible)
  useEffect(() => {
    // small delay to allow DOM update
    const id = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 80);
    return () => clearTimeout(id);
  }, [show]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // header reveal
      const header = gsap.utils.toArray(".bestseller-header")[0];
      if (header) {
        gsap.from(header, {
          autoAlpha: 0,
          y: 18,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: header,
            start: "top 92%",
            toggleActions: "play none none none",
          },
        });
      }

      // product items animations
      const items = gsap.utils.toArray(".bestseller-item");

      items.forEach((item, i) => {
        // target inner card (ProductItem might render different tags; this targets the item element itself)
        gsap.fromTo(
          item,
          { autoAlpha: 0, y: 40, scale: 0.995 },
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 0.85,
            ease: "power3.out",
            delay: i * 0.03, // tiny progressive offset for nicer feel
            scrollTrigger: {
              trigger: item,
              start: "top 88%",
              end: "bottom 20%",
              toggleActions: "play reverse play reverse",
              // markers: true, // enable when debugging start/end positions
            },
          }
        );

        // subtle parallax while in view
        gsap.to(item, {
          y: -6,
          ease: "none",
          scrollTrigger: {
            trigger: item,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.6,
          },
        });
      });

      // ensure ScrollTrigger aware of current layout
      ScrollTrigger.refresh();
    }, wrapRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="md:py-32 py-16 " ref={wrapRef}>
      <Container className="mb-3 sm:mb-10">
        <div className="bestseller-header">
          <Headertext Headertext="Best Seller" />
        </div>
      </Container>

      <Container className="md:flex md:justify-between flex sm:flex-row flex-col items-center gap-7 justify-center">
        <div className="bestseller-item">
          <ProductItem src={b1} Pname="Basic Crew Neck Tee" Price="44.00" Color="Black" />
        </div>

        <div className="bestseller-item">
          <ProductItem src={b2} Pname="Basic Crew Neck Tee" Price="44.00" Color="Black" />
        </div>

        <div className={`bestseller-item ${show ? "md:block" : "hidden md:block"}`}>
          <ProductItem src={b3} Pname="Basic Crew Neck Tee" Price="44.00" Color="Black" />
        </div>

        <div className={`bestseller-item ${show ? "md:block" : "hidden md:block"}`}>
          <ProductItem src={b4} Pname="Basic Crew Neck Tee" Price="44.00" Color="Black" />
        </div>

        <div onClick={() => setShow(!show)} className="text-center mt-4 md:hidden">
          <Button ButtonText={`${show ? "Show Less" : "View More"}`} />
        </div>
      </Container>
    </div>
  );
};

export default BestSeller;
