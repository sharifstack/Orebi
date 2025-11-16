import React from "react";
import Container from "./layout/Container";
import Ads02 from "../../public/Ads_2.jpg";

const Ad02 = () => {
  return (
    <div className="md:pb-32 pb-0 px-3 md:px-0">
      <Container className="">
        <img className="w-full h-full object-cover" src={Ads02} alt="" />
      </Container>
    </div>
  );
};

export default Ad02;
