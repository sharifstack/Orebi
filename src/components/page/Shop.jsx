import React, { useState } from "react";
import Container from "../layout/Container";
import Bredcumb from "../layout/Bredcumb";
import { IoGrid } from "react-icons/io5";
import { TfiMenuAlt } from "react-icons/tfi";
import Paginate from "../layout/Paginate";
import { FaCaretDown, FaCaretUp, FaMinus, FaPlus } from "react-icons/fa6";

export const Shop = () => {
  let [cat, SetCat] = useState(false);
  let [cat2, SetCat2] = useState(false);
  let [cat3, SetCat3] = useState(false);

  let ManageCat = () => {
    SetCat(!cat);
  };

  let ManageCat2 = () => {
    SetCat2(!cat2);
  };

  let ManageCat3 = () => {
    SetCat3(!cat3);
  };

  let [Shownumber, setShowNumber] = useState(12);

  let NumberUpdate = (element) => {
    let NumberCollet = Number(element.target.value);
    setShowNumber(NumberCollet);
  };

  return (
    <div className="pt-6 sm:pt-32 pb-10 sm:pb-36">
      <Container>
        <Bredcumb />

        <div className="flex flex-col sm:flex-row sm:justify-between">
          <div className="left sm:w-[370px]  px-5 sm:px-0">
            <ul>
              <h2 className="font-DM  font-bold text-xl text-Primary ">
                Shop by Category
              </h2>
              <li className="relative">
                <div
                  onClick={ManageCat}
                  className=" font-DM font-normal leading-7 text-ptext flex justify-between my-4 sm:my-10 relative "
                >
                  Category 1
                  <FaPlus
                    className={`absolute top-1/2 -translate-y-1/2 right-3 transition-all duration-300 ${
                      cat ? "opacity-0 rotate-90" : "opacity-100"
                    }`}
                  />
                  <FaMinus
                    className={`absolute top-1/2 -translate-y-1/2 right-3 transition-all duration-300 ${
                      cat ? "opacity-100" : "opacity-0 -rotate-90"
                    }`}
                  />
                </div>

                <ul
                  className={`font-DM font-normal leading-7 text-ptext flex flex-col gap-4 sm:gap-10 w-full transition-all duration-300 ${
                    cat
                      ? "opacity-100 visible h-auto overflow-auto"
                      : " opacity-0 invisible h-0 overflow-hidden"
                  }`}
                >
                  <li>Category 2</li>
                  <li>Category 3</li>
                  <li>Category 4</li>
                  <li>Category 5</li>
                </ul>
              </li>
            </ul>

            <ul>
              <li className="relative">
                <div
                  onClick={ManageCat2}
                  className=" font-DM font-normal leading-7 text-ptext flex justify-between mt-2 mb-5 sm:mb-10 relative "
                >
                  <h2 className="font-DM  font-bold text-xl text-Primary ">
                    Shop by Color
                  </h2>
                  <FaCaretUp
                    className={`absolute top-1/2 -translate-y-1/2 right-3 transition-all duration-300 ${
                      cat2 ? "opacity-0 rotate-90" : "opacity-100"
                    }`}
                  />
                  <FaCaretDown
                    className={`absolute top-1/2 -translate-y-1/2 right-3 transition-all duration-300 ${
                      cat2 ? "opacity-100" : "opacity-0 -rotate-90"
                    }`}
                  />
                </div>

                <ul
                  className={`font-DM font-normal leading-7 text-ptext flex flex-col gap-4 sm:gap-10  w-full transition-all duration-300 ${
                    cat2
                      ? "opacity-100 visible h-auto overflow-auto"
                      : " opacity-0 invisible h-0 overflow-hidden"
                  }`}
                >
                  <li className="flex items-center">
                    <span className="inline-block border-white border-[8px] w-7 h-7 rounded-full bg-[#000000]"></span>{" "}
                    Color 1
                  </li>
                  <li className="flex items-center">
                    <span className="inline-block border-white border-[8px] w-7 h-7 rounded-full bg-[#FF8686]"></span>{" "}
                    Color 2
                  </li>
                  <li className="flex items-center">
                    <span className="inline-block border-white border-[8px] w-7 h-7 rounded-full bg-[#7ED321]"></span>{" "}
                    Color 3
                  </li>
                  <li className="flex items-center">
                    <span className="inline-block border-white border-[8px] w-7 h-7 rounded-full bg-[#B6B6B6]"></span>{" "}
                    Color 4{" "}
                  </li>
                  <li className="flex items-center">
                    <span className="inline-block border-white border-[8px] w-7 h-7 rounded-full bg-[#15CBA5]"></span>{" "}
                    Color 5
                  </li>
                </ul>
              </li>
            </ul>

            <ul>
              <li className="relative">
                <div
                  onClick={ManageCat3}
                  className=" font-DM font-normal leading-7 text-ptext flex justify-between mt-2 mb-5 sm:mb-10 relative "
                >
                  <h2 className="font-DM  font-bold text-xl text-Primary mt-2">
                    Shop by Brand
                  </h2>
                  <FaCaretUp
                    className={`absolute top-1/2 -translate-y-1/2 right-3 transition-all duration-300 ${
                      cat3 ? "opacity-0 rotate-90" : "opacity-100"
                    }`}
                  />
                  <FaCaretDown
                    className={`absolute top-1/2 -translate-y-1/2 right-3 transition-all duration-300 ${
                      cat3 ? "opacity-100" : "opacity-0 -rotate-90"
                    }`}
                  />
                </div>

                <ul
                  className={`font-DM font-normal leading-7 text-ptext flex flex-col gap-4 sm:gap-10 w-full transition-all duration-300 ${
                    cat3
                      ? "opacity-100 visible h-auto overflow-auto"
                      : " opacity-0 invisible h-0 overflow-hidden"
                  }`}
                >
                  <li> Brand 1</li>
                  <li>Brand 2</li>
                  <li>Brand 3</li>
                  <li>Brand 4 </li>
                  <li>Brand 5</li>
                </ul>
              </li>
            </ul>

            <ul>
              <li className="relative">
                <div className=" font-DM font-normal leading-7 text-ptext flex justify-between mt-2 mb-4 sm:mb-10 relative ">
                  <h2 className="font-DM  font-bold text-xl text-Primary ">
                    Shop by Price
                  </h2>
                </div>

                <ul
                  className={`font-DM font-normal leading-7 text-ptext flex text-sm sm:text-base sm:flex-col sm:flex-nowrap flex-wrap gap-3 sm:gap-10 w-full transition-all duration-300 cursor-pointer`}
                >
                  <li className="hover:text-black transition-all duration-200">
                    $0.00 - $9.99
                  </li>
                  <li className="hover:text-black transition-all duration-200">
                    $10.00 - $19.99
                  </li>
                  <li className="hover:text-black transition-all duration-200">
                    $20.00 - $29.99
                  </li>
                  <li className="hover:text-black transition-all duration-200">
                    $30.00 - $39.99
                  </li>
                  <li className="hover:text-black transition-all duration-200">
                    $40.00 - $69.99
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="right w-[1190px] bg-white">
            <div className="pb-14 bg-white flex justify-between items-center">
              <div className="icon hidden sm:flex items-center gap-5">
                <div className="h-9 w-9 bg-Primary flex justify-center items-center cursor-pointer">
                  <IoGrid className="text-white" />
                </div>

                <div className="h-9 w-9 bg-transparent border border-[#F0F0F0] flex justify-center items-center cursor-pointer">
                  <TfiMenuAlt className="text-[#737373]" />
                </div>
              </div>

              <div className="text hidden sm:flex items-center gap-10">
                <div className="flex items-center gap-3">
                  <p className="text-ptext">Sort by :</p>
                  <select
                    className="pl-5 py-1 w-[240px] text-ptext bg-transparent border border-[#F0F0F0] outline-none"
                    name=""
                    id=""
                  >
                    <option value="Featured">Featured</option>
                    <option value="Featured">Featured</option>
                    <option value="Featured">Featured</option>
                    <option value="Featured">Featured</option>
                  </select>
                </div>

                <div className="flex items-center gap-3">
                  <p className="text-ptext">show :</p>

                  <select
                    onChange={NumberUpdate}
                    className="pl-5 py-1 w-[140px] text-ptext bg-transparent border border-[#F0F0F0] outline-none"
                    name=""
                    id=""
                  >
                    <option value="12">12</option>
                    <option value="24">24</option>
                    <option value="48">48</option>
                    <option value="64">64</option>
                  </select>
                </div>
              </div>
            </div>

            <div>
              <Paginate itemsPerPage={Shownumber} />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
