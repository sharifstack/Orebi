import React from "react";
import Container from "./layout/Container";
import { RiNumber2 } from "react-icons/ri";
import { MdLocalShipping } from "react-icons/md";
import { FaRotateLeft } from "react-icons/fa6";

const Information = () => {
  return (
    <div className="border-b border-[#F0F0F0]  pt-3 md:py-0">
      <Container className="py-4 flex sm:justify-between flex-col sm:flex-row  sm:items-center md:py-7 font-DM ">
        <div className="warranty flex items-center sm:gap-3.5 gap-1 text-3xl sm:text-[16px]">
          <RiNumber2 className="sm:text-[20px] text-2xl" />
          <p className="text-[#6D6D6D]">Two years warranty</p>
        </div>
        <div className="Shipping flex items-center sm:gap-3.5 gap-1 text-3xl sm:text-[16px]">
          <MdLocalShipping className="text-[20px] text-2xl" />
          <p className="text-[#6D6D6D]">Free shipping</p>
        </div>
        <div className="Return_policy flex items-center sm:gap-3.5 gap-1 text-3xl sm:text-[16px]">
          <FaRotateLeft className="text-[20px] text-2xl" />
          <p className="text-[#6D6D6D]">Return policy in 30 days</p>
        </div>
      </Container>
    </div>
  );
};

export default Information;
