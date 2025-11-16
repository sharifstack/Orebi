import React, { useState } from "react";
import Container from "./layout/Container";
import Headertext from "./layout/Headertext";
import ProductItem from "./layout/ProductItem";

import b1 from "../../public/Bestseller/b1.png";
import b2 from "../../public/Bestseller/b2.png";
import b3 from "../../public/Bestseller/b3.png";
import b4 from "../../public/Bestseller/b4.png";
import Button from "./layout/Button";

const BestSeller = () => {
  let [show, setShow] = useState(false);

  return (
    <div className="md:py-32 py-16 ">
      <Container className="mb-3 sm:mb-10">
        <Headertext Headertext="Best Seller" />
      </Container>

      <Container className="md:flex md:justify-between flex sm:flex-row flex-col items-center gap-7 justify-center">
        <ProductItem
          src={b1}
          Pname="Basic Crew Neck Tee"
          Price="44.00"
          Color="Black"
        />
        <ProductItem
          src={b2}
          Pname="Basic Crew Neck Tee"
          Price="44.00"
          Color="Black"
        />

        <ProductItem
          className={` ${show ? "md:block" : "hidden md:block"} `}
          src={b3}
          Pname="Basic Crew Neck Tee"
          Price="44.00"
          Color="Black"
        />
        <ProductItem
          className={` ${show ? " md:block" : " hidden md:block"} `}
          src={b4}
          Pname="Basic Crew Neck Tee"
          Price="44.00"
          Color="Black"
        />

        <div
          onClick={() => setShow(!show)}
          className="text-center mt-4 md:hidden"
        >
          <Button ButtonText={`${show ? "Show Less" : "View More"}`} />
        </div>
      </Container>
    </div>
  );
};

export default BestSeller;
