import React, { useState } from "react";
import Slider from "react-slick";
import Image from "./layout/image";
import banner01 from "/banner01.jpg";
import banner02 from "/banner02.jpg";
import banner03 from "/banner03.jpg";

const Banner = () => {
  let [active, SetActive] = useState(0);

  var settings = {
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
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        className={`transition-all text-[10px] border-r-2 sm:flex items-center hidden ${
          active == i
            ? "text-Primary border-Primary"
            : " text-transparent border-white"
        }`}
        style={{
          width: "22px",
          height: "30px",
        }}
      >
        0{i + 1}
      </div>
    ),

    beforeChange: (item, i) => {
      SetActive(i);
    },
  };

  return (
    <div className="mt-2 sm:mt-0">
      <Slider {...settings}>
        <Image ImageClass="w-full" src={banner01} />
        <Image ImageClass="w-full" src={banner02} />
        <Image ImageClass="w-full" src={banner03} />
      </Slider>
    </div>
  );
};

export default Banner;
