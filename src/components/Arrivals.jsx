import React from "react";
import Container from "./layout/Container";
import Headertext from "./layout/Headertext";
import ProductItem from "./layout/ProductItem";

import product01 from "/Products/product01.jpg";
import product02 from "/Products/product02.jpg";
import product03 from "/Products/product03.jpg";
import product04 from "/Products/product04.jpg";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Arrivals = () => {
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

  return (
    <div>
      <Container className="md:mb-12 mb-3 ">
        <Headertext Headertext="New Arrivals" />
      </Container>

      <Container className="max-w-[1640px]">
        <Slider {...settings}>
          <ProductItem
            className="w-full px-2"
            src={product01}
            Pname="Basic Crew Neck Tee"
            Price="44.00"
            Color="Black"
            Offer="20%"
            OfferEye={true}
          />
          <ProductItem
            className="w-full px-2"
            src={product02}
            Pname="Basic Crew Neck Tee"
            Price="44.00"
            Color="Black"
            Offer="New"
            OfferEye={true}
          />
          <ProductItem
            className="w-full px-2"
            src={product03}
            Pname="Basic Crew Neck Tee"
            Price="44.00"
            Color="Black"
          />
          <ProductItem
            className="w-full px-2"
            src={product04}
            Pname="Basic Crew Neck Tee"
            Price="44.00"
            Color="Black"
            Offer="New"
            OfferEye={true}
          />
        </Slider>
      </Container>
    </div>
  );
};

export default Arrivals;
