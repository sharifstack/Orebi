import React, { useEffect, useState } from "react";
import Container from "./layout/Container";

import logo from "/logo.png";
import Image from "./layout/image";
import Li from "./layout/Li";
import { AiOutlineBars } from "react-icons/ai";
import { GoPersonFill } from "react-icons/go";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";

const Navbar = () => {
  let [show, setShow] = useState(false);

  useEffect(() => {
    function WidthSize() {
      if (window.innerWidth > 736) {
        setShow(true);
      } else {
        setShow(false);
      }
    }
    WidthSize();
    window.addEventListener("resize", WidthSize);
  }, []);

  return (
    <nav className="bg-slate-300 md:bg-white">
      <Container className="md:py-8 p-4 px-3 md:px-0 flex md:justify-center justify-end gap-5 md:gap-0 items-center relative">
        <Image
          className="absolute left-3 md:left-0 top-1/2 -translate-y-1/2"
          href="/"
          src={logo}
          alt=""
        />

        <ul
          className={`transition-all duration-500 flex gap-x-10 gap-y-4 md:gap-y-0 py-5 md:py-0 pl-4 md:pl-0 bg-slate-200 md:bg-transparent items-start z-20  flex-col md:flex-row md:static absolute left-0 top-full  w-1/2  md:w-auto ${
            show
              ? "translate-x-0  visible opacity-100 "
              : "-translate-x-full invisible opacity-0 "
          }`}
        >
          <Li className="text-[#262626]" Litext="Home" href="/" />
          <Li Litext="Shop" href="/products" />
          <Li Litext="About" href="/About" />
          <Li Litext="Contacts" href="/Contacts" />
          <Li Litext="Journal" href="/Journal" />
        </ul>

        <div className="account flex gap-5 md:hidden">
          <div className="left flex items-center">
            <GoPersonFill />
            <IoMdArrowDropdown />
          </div>
          <div className="right">
            <FaCartShopping />
          </div>
        </div>

        <div onClick={() => setShow(!show)} className="block md:hidden">
          <AiOutlineBars />
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
