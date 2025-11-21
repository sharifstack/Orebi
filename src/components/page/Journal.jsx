import React from "react";
import Container from "../layout/Container";
import Bredcumb from "../layout/Bredcumb";
import Button from "../layout/Button";
import { Link } from "react-router-dom";

const Journal = () => {
  return (
    <div className="pt-6 sm:pt-32 pb-10 sm:pb-36 px-2 sm:px-0-32">
      <Container>
        <Bredcumb />
        <h2 className="font-DM font-bold text-2xl sm:text-4xl ">
          Welcome — nothing here yet!
        </h2>
        <p className="font-DM font-normal sm:text-2xl max-w-[1000px] my-4">
          This journal page hasn’t been filled yet. We’re preparing thoughtful
          content and curated stationery to help you begin. In the meantime,
          explore our shop for notebooks, pens, and desk essentials that make
          journaling easier — click Continue shop to see recommendations.
        </p>

        <div className="text-center sm:text-start">
          <Link to={"/products"}>
            <Button className={"w-[200px]"} ButtonText={"Continue shopping"} />
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default Journal;
