import React from "react";
import { Link } from "react-router-dom";

const Li = ({ Litext, className, children, href }) => {
  return (
    <li className="group">
      {" "}
      <Link
        to={href}
        className={`font-bold text-sm font-DM hover:text-Primary transition-all duration-300 text-[#767676] ${className}`}
      >
        {Litext}
      </Link>
      {children}
    </li>
  );
};

export default Li;
