import React from "react";
import Container from "./layout/Container";
import Headertext from "./layout/Headertext";
import ProductItem from "./layout/ProductItem";

import special1 from "/SpecialOffer/special1.png";
import special2 from "/SpecialOffer/special2.png";
import special3 from "/SpecialOffer/special3.png";
import special4 from "/SpecialOffer/special4.png";

const SpecialOffer = () => {
  return (
    <div className="md:py-28 py-14">
      <Container className="sm:mb-12 mb-3">
        <Headertext Headertext="Special Offers" />
      </Container>
      <Container className="md:flex md:justify-between grid justify-center ">
        <ProductItem
          src={special1}
          Pname="Basic Crew Neck Tee"
          Price="44.00"
          Color="Black"
          Offer="New"
          OfferEye={true}
        />
        <ProductItem
          src={special2}
          Pname="Basic Crew Neck Tee"
          Price="44.00"
          Color="Black"
          Offer="New"
          OfferEye={true}
        />
        <ProductItem
          src={special3}
          Pname="Basic Crew Neck Tee"
          Price="44.00"
          Color="Black"
          Offer="New"
          OfferEye={true}
        />
        <ProductItem
          src={special4}
          Pname="Basic Crew Neck Tee"
          Price="44.00"
          Color="Black"
          Offer="New"
          OfferEye={true}
        />
      </Container>
    </div>
  );
};

export default SpecialOffer;
