import React from "react";
import Container from "../layout/Container";
import Bredcumb from "../layout/Bredcumb";
import Button from "../layout/Button";
import { Link } from "react-router-dom";

const Journal = () => {
  return (
    <div className="my-32">
      <Container>
        <Bredcumb />
        <h2 className="font-DM font-bold text-4xl "> Welcome — nothing here yet!</h2>
        <p className="font-DM font-normal text-2xl max-w-[1000px] my-4">
          This journal page hasn’t been filled yet. We’re preparing thoughtful
          content and curated stationery to help you begin. In the meantime,
          explore our shop for notebooks, pens, and desk essentials that make
          journaling easier — click Continue shop to see recommendations.
        </p>

        <div>
            <Link to={"/products"}><Button className={"w-[200px]"} ButtonText={"Continue shopping"}/></Link>
        </div>
      </Container>
    </div>
  );
};

export default Journal;
