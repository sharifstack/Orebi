import React from "react";
import Container from "./layout/Container";
import Ad_1 from "/Ad_1.jpg";
import Ad_2 from "/Ad_2.jpg";
import Ad_3 from "/Ad_3.jpg";
import { useNavigate } from "react-router-dom";

const OfferSale = () => {
  let nevigate = useNavigate();

  return (
    <div className="sm:my-24 my-12">
      <Container className="h-[780px] grid grid-cols-1 grid-rows-1 gap-3 md:gap-10 md:grid-cols-2 md:grid-rows-2 ">
        <img
          onClick={() => nevigate("/shop")}
          className="h-full w-full object-cover cursor-pointer row-span-2"
          src={Ad_1}
        />
        <img className="h-full w-full object-cover cursor-pointer" src={Ad_2} />
        <img className="h-full w-full object-cover cursor-pointer" src={Ad_3} />
      </Container>
    </div>
  );
};

export default OfferSale;
