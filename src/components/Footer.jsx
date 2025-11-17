import React from "react";
import Container from "./layout/Container";
import { Link } from "react-router-dom";
import footer from "../../public/footer.png";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#F5F5F3] md:py-14 py-5">
      <Container>
        <div className="px-4 md:px-0 grid md:grid-cols-12 sm:grid-cols-4 sm:grid-rows-1">
          <div className="MENU sm:col-span-2 ">
            <h3 className="font-DM leading-6 font-bold mb-1 sm:mb-4">MENU</h3>
            <ul className="font-DM leading-6 font-normal text-sm flex flex-row sm:flex-col gap-4 sm:gap-1.5 text-[#6D6D6D]">
              <li>
                <Link>Home</Link>
              </li>
              <li>
                <Link>Shop</Link>
              </li>
              <li>
                <Link>About</Link>
              </li>
              <li>
                <Link>Contact</Link>
              </li>
              <li>
                <Link>Journal</Link>
              </li>
            </ul>
          </div>
          <div className="SHOP md:col-span-2 col-span-1 hidden sm:block">
            <h3 className="font-DM leading-6 font-bold mb-4">SHOP</h3>
            <ul className="font-DM leading-6 font-normal text-sm flex flex-col gap-1.5 text-[#6D6D6D]">
              <li>
                <Link>Category 1</Link>
              </li>
              <li>
                <Link>Category 2</Link>
              </li>
              <li>
                <Link>Category 3</Link>
              </li>
              <li>
                <Link>Category 4</Link>
              </li>
              <li>
                <Link>Category 5</Link>
              </li>
            </ul>
          </div>
          <div className="HELP md:col-span-2 col-span-1 hidden sm:block">
            <h3 className="font-DM leading-6 font-bold mb-4">HELP</h3>
            <ul className="font-DM leading-6 font-normal text-sm flex flex-col gap-1.5 text-[#6D6D6D]">
              <li>
                <Link>Privacy Policy</Link>
              </li>
              <li>
                <Link>Terms & Conditions</Link>
              </li>
              <li>
                <Link>Special E-shop</Link>
              </li>
              <li>
                <Link>Shipping</Link>
              </li>
              <li>
                <Link>Secure Payments</Link>
              </li>
            </ul>
          </div>
          <div className="four md:col-span-2 my-3 sm:my-0">
            <Link className="block font-DM sm:leading-7 font-bold text-Primary">
              <h5 className="text-sm sm:text-base "> (052) 611-5711</h5>
            </Link>
            <Link className="font-DM leading-7 font-bold text-Primary">
              <h2 className="text-sm sm:text-base ">company@domain.com</h2>
            </Link>
            <p className="font-DM leading-6 font-normal text-sm flex flex-col text-[#6D6D6D] sm:mt-4">
              575 Crescent Ave. Quakertown, PA 18951
            </p>
          </div>
          <div className="five sm:ml-[138px] md:col-span-4 col-span-1 mb-1 sm:mb-0">
            <img src={footer} />
          </div>
        </div>
        <div className="flex sm:justify-between flex-col sm:flex-row md:mt-16 px-4 md:px-0 mt-2 md:gap-0">
          <div className="icons flex sm:justify-center items-center gap-x-6 text-xl sm:text-base">
            <Link>
              <FaFacebookF />
            </Link>
            <Link>
              <FaLinkedinIn />
            </Link>
            <Link>
              <FaInstagram />
            </Link>
          </div>

          <h2 className="font-DM leading-6 font-normal text-sm text-[#6D6D6D] flex justify-center sm:justify-normal items-center gap-1 ">
            <p className="text-xl">&copy;</p> Copyright Sharif 2025. All right
            reserved
          </h2>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
