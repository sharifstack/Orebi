import React, { useLayoutEffect, useRef } from "react";
import Container from "./layout/Container";
import Headertext from "./layout/Headertext";
import ProductItem from "./layout/ProductItem";

import product01 from "/Products/product01.jpg";
import product02 from "/Products/product02.jpg";
import product03 from "/Products/product03.jpg";
import product04 from "/Products/product04.jpg";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Arrivals = () => {
  const containerRef = useRef(null);

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className="absolute right-5 top-1/2 -translate-y-full rounded-full w-16 h-16 justify-center items-center"
        style={{ ...style, display: "flex", background: "#979797" }}
        onClick={onClick}
      >
        <FaArrowRight className="text-white" />
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className="absolute left-5 top-1/2 -translate-y-full rounded-full w-16 h-16 justify-center items-center z-10"
        style={{ ...style, display: "flex", background: "#979797" }}
        onClick={onClick}
      >
        <FaArrowLeft className="text-white" />
      </div>
    );
  }

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // header reveal
      const header = containerRef.current?.querySelector(".arrivals-header");
      if (header) {
        gsap.from(header, {
          autoAlpha: 0,
          y: 18,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: header,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        });
      }

      // select slides (we wrap each slide with .arrival-slide)
      const slides = gsap.utils.toArray(".arrival-slide");

      slides.forEach((slide) => {
        if (!slide) return;
        // target the product card inside the slide
        const card = slide.querySelector(".product-card") || slide;

        gsap.fromTo(
          card,
          { autoAlpha: 0, y: 40, scale: 0.995 },
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: slide,
              start: "top 85%",
              end: "bottom 20%",
              toggleActions: "play reverse play reverse",
              // markers: true, // enable for debugging
            },
          }
        );

        // optional micro parallax while in view (subtle)
        gsap.to(card, {
          y: -6,
          ease: "none",
          scrollTrigger: {
            trigger: slide,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.6,
          },
        });
      });

      // ensure correct layout positions if images load late
      ScrollTrigger.refresh();
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef}>
      <Container className="md:mb-12 mb-3 ">
        <div className="arrivals-header">
          <Headertext Headertext="New Arrivals" />
        </div>
      </Container>

      <Container className="max-w-[1640px]">
        <Slider {...settings}>
          <div className="arrival-slide px-2">
            <div className="product-card">
              <ProductItem
                className="w-full"
                src={product01}
                Pname="Basic Crew Neck Tee"
                Price="44.00"
                Color="Black"
                Offer="20%"
                OfferEye={true}
              />
            </div>
          </div>

          <div className="arrival-slide px-2">
            <div className="product-card">
              <ProductItem
                className="w-full"
                src={product02}
                Pname="Basic Crew Neck Tee"
                Price="44.00"
                Color="Black"
                Offer="New"
                OfferEye={true}
              />
            </div>
          </div>

          <div className="arrival-slide px-2">
            <div className="product-card">
              <ProductItem
                className="w-full"
                src={product03}
                Pname="Basic Crew Neck Tee"
                Price="44.00"
                Color="Black"
              />
            </div>
          </div>

          <div className="arrival-slide px-2">
            <div className="product-card">
              <ProductItem
                className="w-full"
                src={product04}
                Pname="Basic Crew Neck Tee"
                Price="44.00"
                Color="Black"
                Offer="New"
                OfferEye={true}
              />
            </div>
          </div>
        </Slider>
      </Container>
    </div>
  );
};

export default Arrivals;
