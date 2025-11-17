import React from "react";
import Container from "./Container";

const Headertext = ({ Headertext, className }) => {
  return (
    <h2 className={`font-DM font-bold text-2xl sm:text-[39px] text-center sm:text-start capitalize ${className}`}>
      {Headertext}
    </h2>
  );
};

export default Headertext;
