import React, { useLayoutEffect, useRef } from "react";
import Container from "./layout/Container";
import Headertext from "./layout/Headertext";
import ProductItem from "./layout/ProductItem";

import special1 from "/SpecialOffer/special1.png";
import special2 from "/SpecialOffer/special2.png";
import special3 from "/SpecialOffer/special3.png";
import special4 from "/SpecialOffer/special4.png";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SpecialOffer = () => {
  const wrapRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // header reveal
      const header = wrapRef.current?.querySelector(".special-header");
      if (header) {
        gsap.from(header, {
          autoAlpha: 0,
          y: 16,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: header,
            start: "top 92%",
            toggleActions: "play none none none",
          },
        });
      }

      // items animation
      const items = gsap.utils.toArray(".special-item");

      items.forEach((item, i) => {
        const card = item.querySelector(".product-card") || item;

        gsap.fromTo(
          card,
          { autoAlpha: 0, y: 36, scale: 0.995 },
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 0.9,
            ease: "power3.out",
            delay: i * 0.03,
            scrollTrigger: {
              trigger: item,
              start: "top 88%",
              end: "bottom 20%",
              toggleActions: "play reverse play reverse",
              // markers: true, // uncomment while debugging
            },
          }
        );

        // subtle parallax while in view
        gsap.to(card, {
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

      ScrollTrigger.refresh();
    }, wrapRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="md:py-28 py-14" ref={wrapRef}>
      <Container className="sm:mb-12 mb-3">
        <div className="special-header">
          <Headertext Headertext="Special Offers" />
        </div>
      </Container>

      <Container className="md:flex md:justify-between grid justify-center gap-6">
        <div className="special-item">
          <div className="product-card">
            <ProductItem
              src={special1}
              Pname="Basic Crew Neck Tee"
              Price="44.00"
              Color="Black"
              Offer="New"
              OfferEye={true}
            />
          </div>
        </div>

        <div className="special-item">
          <div className="product-card">
            <ProductItem
              src={special2}
              Pname="Basic Crew Neck Tee"
              Price="44.00"
              Color="Black"
              Offer="New"
              OfferEye={true}
            />
          </div>
        </div>

        <div className="special-item">
          <div className="product-card">
            <ProductItem
              src={special3}
              Pname="Basic Crew Neck Tee"
              Price="44.00"
              Color="Black"
              Offer="New"
              OfferEye={true}
            />
          </div>
        </div>

        <div className="special-item">
          <div className="product-card">
            <ProductItem
              src={special4}
              Pname="Basic Crew Neck Tee"
              Price="44.00"
              Color="Black"
              Offer="New"
              OfferEye={true}
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SpecialOffer;
