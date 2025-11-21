import React, { useLayoutEffect, useRef, useState } from "react";
import Slider from "react-slick";
import Image from "./layout/image";
import banner01 from "/banner01.jpg";
import banner02 from "/banner02.jpg";
import banner03 from "/banner03.jpg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Banner = () => {
  const [active, SetActive] = useState(0);
  const sliderRef = useRef(null);
  const containerRef = useRef(null);
  const slideRefs = useRef([]); // will hold refs to each slide wrapper

  // slider settings
  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots) => (
      <div
        style={{
          borderRadius: "0",
          padding: "0",
          position: "absolute",
          left: "10%",
          top: "50%",
          transform: "translateY(-50%)",
        }}
      >
        <ul style={{ margin: "0px" }}>{dots}</ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        className={`transition-all text-[10px] border-r-2 sm:flex items-center hidden ${
          active === i ? "text-Primary border-Primary" : " text-transparent border-white"
        }`}
        style={{
          width: "22px",
          height: "30px",
        }}
      >
        0{i + 1}
      </div>
    ),
    beforeChange: (_, i) => {
      SetActive(i);
    },
  };

  // GSAP animations
  useLayoutEffect(() => {
    // guard: ensure we have slide refs
    slideRefs.current = slideRefs.current.slice(0, 3);

    const ctx = gsap.context(() => {
      // 1) reveal the whole banner container once
      if (containerRef.current) {
        gsap.from(containerRef.current, {
          autoAlpha: 0,
          y: 20,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        });
      }

      // 2) animate each slide when it enters viewport
      slideRefs.current.forEach((slideEl) => {
        if (!slideEl) return;
        // target the inner image or content
        const img = slideEl.querySelector("img") || slideEl;
        gsap.fromTo(
          img,
          { autoAlpha: 0, y: 40, scale: 1.03 },
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 1.05,
            ease: "power3.out",
            scrollTrigger: {
              trigger: slideEl,
              start: "top 75%", // adjust as needed
              end: "bottom 25%",
              toggleActions: "play reverse play reverse",
              // markers: true, // uncomment to debug
            },
          }
        );

        // subtle parallax-like movement while in view (optional)
        gsap.to(img, {
          y: -10,
          ease: "none",
          scrollTrigger: {
            trigger: slideEl,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.6,
          },
        });
      });

      // refresh positions (especially helpful if images load later)
      ScrollTrigger.refresh();
    }, containerRef);

    return () => {
      ctx.revert();
      // clear ScrollTrigger instances created by this component
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger && containerRef.current && containerRef.current.contains(t.trigger)) t.kill();
      });
    };
  }, []);

  // helper used to assign slide refs
  const setSlideRef = (el, idx) => {
    slideRefs.current[idx] = el;
  };

  return (
    <div className="mt-2 sm:mt-0" ref={containerRef}>
      <Slider ref={sliderRef} {...settings}>
        <div ref={(el) => setSlideRef(el, 0)} className="banner-slide overflow-hidden">
          <Image ImageClass="w-full block" src={banner01} />
        </div>

        <div ref={(el) => setSlideRef(el, 1)} className="banner-slide overflow-hidden">
          <Image ImageClass="w-full block" src={banner02} />
        </div>

        <div ref={(el) => setSlideRef(el, 2)} className="banner-slide overflow-hidden">
          <Image ImageClass="w-full block" src={banner03} />
        </div>
      </Slider>
    </div>
  );
};

export default Banner;
