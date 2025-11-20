import React from "react";
import Bredcumb from "../layout/Bredcumb";
import Container from "../layout/Container";
import img1 from "../../../public/About/img1.png";
import img2 from "../../../public/About/img2.png";
import Image from "../layout/image";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="my-32">
      <Container>
        <Bredcumb />
        <div className="image flex gap-10">
          <div className="left w-1/2 bg-blue-200">
            <Image href={"/products"} src={img1} alt={img1} />
          </div>
          <div className="right w-1/2 bg-purple-200">
            <Image href={"/products"} src={img2} alt={img2} />
          </div>
        </div>

        <div className="my-32">
          <p className="font-DM text-[44px] font-normal text-Primary">
            Orebi is one of the world’s leading ecommerce brands and is
            internationally recognized for celebrating the essence of classic
            Worldwide cool looking style.
          </p>
        </div>
        <div className="information flex gap-10">
          <div className="Our-Vision w-1/3">
            <h2 className="font-DM text-2xl font-bold text-Primary mb-2.5">
              Our Vision
            </h2>
            <p className="font-DM text-base text-ptext mb-10">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an printer took a galley of type and
              scrambled it to make a type specimen book.
            </p>
          </div>

          <div className="Our-Vision w-1/3">
            <h2 className="font-DM text-2xl font-bold text-Primary mb-2.5">
              Our Story
            </h2>
            <p className="font-DM text-base text-ptext mb-10">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic.
            </p>
          </div>

          <div className="Our-Vision w-1/3">
            <h2 className="font-DM text-2xl font-bold text-Primary mb-2.5">
              Our Brands
            </h2>
            <p className="font-DM text-base text-ptext mb-10">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
