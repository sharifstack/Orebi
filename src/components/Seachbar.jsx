import React, { useEffect, useState } from "react";
import Container from "./layout/Container";
import { FaBarsProgress, FaCartShopping } from "react-icons/fa6";
import { GoArrowUpLeft, GoPersonFill } from "react-icons/go";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoClose, IoSearch } from "react-icons/io5";
import Li from "./layout/Li";
import Button from "./layout/Button";
import { Link } from "react-router-dom";

const Seachbar = () => {
  let [show, setShow] = useState(false);
  let [cart, setCart] = useState(false);
  let [account, setAccount] = useState(false);

  let [Search, setSearch] = useState("");
  let [product, setProduct] = useState([]);
  let [filterData, setFilterData] = useState([]);

  let ManageSearch = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    const getData = async () => {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      setProduct(data.products);
    };

    getData();
  }, []);

  useEffect(() => {
    if (Search === "") {
      setFilterData("");
    } else {
      let SearchData = product.filter((item) =>
        item.title.toLowerCase().includes(Search.toLowerCase())
      );
      setFilterData(SearchData);
    }
  }, [Search, product]);

  return (
    <div className="bg-[#F5F5F3] py-3 md:py-6 relative">
      <Container className="flex justify-between items-center px-3 md:px-0 gap-3 md:gap-0 relative">
        <div
          onClick={() => setShow(!show)}
          className="category flex items-center gap-2.5"
        >
          <FaBarsProgress />
          <p className="font-DM font-normal text-sm hidden md:block cursor-pointer">
            Shop by Category
          </p>
        </div>

        {show && (
          <ul className="absolute left-0 top-full w-[263px] z-30">
            <Li
              className="w-full block py-4 px-5 font-DM font-normal text-sm  bg-[#262626] hover:text-white hover:pl-[31px] hover:font-bold border-b border-[#2D2D2D] "
              Litext="Accesories"
            >
              <div className="absolute left-full top-0 hidden group-hover:flex gap-[50px] bg-white border h-full pt-7 pr-[47px] pb-8 pl-10 ">
                <ul className=" flex flex-col gap-3 ">
                  <h2 className="mb-2 font-DM font-bold text-base text-[#262626]">
                    Phones
                  </h2>
                  <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">
                    Phone 1
                  </li>
                  <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">
                    Phone 2
                  </li>
                  <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">
                    Phone 3
                  </li>
                  <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">
                    Phone 4
                  </li>
                  <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">
                    Phone 5
                  </li>
                  <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">
                    Phone 6
                  </li>
                  <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">
                    Phone 7
                  </li>
                </ul>

                <ul className="flex flex-col gap-3">
                  <h2 className="mb-2 font-DM font-bold text-base text-[#262626]">
                    Computers
                  </h2>
                  <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">
                    Computer 1
                  </li>
                  <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">
                    Computer 2
                  </li>
                  <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">
                    Computer 3
                  </li>
                  <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">
                    Computer 4
                  </li>
                  <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">
                    Computer 5
                  </li>
                  <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">
                    Computer 6
                  </li>
                  <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">
                    Computer 7
                  </li>
                </ul>

                <ul className="flex flex-col gap-3 w-max">
                  <h2 className="mb-2 font-DM font-bold text-base text-[#262626] flex">
                    Smart watches
                  </h2>
                  <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">
                    Smart watches 1
                  </li>
                  <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">
                    Smart watches 2
                  </li>
                  <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">
                    Smart watches 3
                  </li>
                  <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">
                    Smart watches 4
                  </li>
                  <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">
                    Smart watches 5
                  </li>
                  <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">
                    Smart watches 6
                  </li>
                  <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">
                    Smart watches 7
                  </li>
                </ul>

                <ul className="flex flex-col gap-3">
                  <h2 className="mb-2 font-DM font-bold text-base text-[#262626]">
                    Cameras
                  </h2>
                  <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">
                    Camera 1
                  </li>
                  <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">
                    Camera 2
                  </li>
                  <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">
                    Camera 3
                  </li>
                  <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">
                    Camera 4
                  </li>
                  <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">
                    Camera 5
                  </li>
                  <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">
                    Camera 6
                  </li>
                  <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">
                    Camera 7
                  </li>
                </ul>
              </div>
            </Li>

            <Li
              className="w-full block py-4 px-5 font-DM font-normal text-sm  bg-[#262626] hover:text-white hover:pl-[31px] hover:font-bold border-b border-[#2D2D2D] "
              Litext="Furniture"
            >
              <div className="absolute left-full top-0 hidden group-hover:flex gap-[50px] bg-green-200 border h-full pt-7 pr-[47px] pb-8 pl-10 ">
                <ul className=" flex flex-col gap-3 ">
                  <h2 className="mb-2 font-DM font-bold text-base text-[#262626]">
                    Phones
                  </h2>
                  <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">
                    Phone 1
                  </li>
                  <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">
                    Phone 2
                  </li>
                  <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">
                    Phone 3
                  </li>
                  <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">
                    Phone 4
                  </li>
                  <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">
                    Phone 5
                  </li>
                  <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">
                    Phone 6
                  </li>
                  <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">
                    Phone 7
                  </li>
                </ul>

                <ul className="flex flex-col gap-3">
                  <h2 className="mb-2 font-DM font-bold text-base text-[#262626]">
                    Computers
                  </h2>
                  <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">
                    Computer 1
                  </li>
                  <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">
                    Computer 2
                  </li>
                  <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">
                    Computer 3
                  </li>
                  <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">
                    Computer 4
                  </li>
                  <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">
                    Computer 5
                  </li>
                  <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">
                    Computer 6
                  </li>
                  <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">
                    Computer 7
                  </li>
                </ul>

                <ul className="flex flex-col gap-3 w-max">
                  <h2 className="mb-2 font-DM font-bold text-base text-[#262626] flex">
                    Smart watches
                  </h2>
                  <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">
                    Smart watches 1
                  </li>
                  <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">
                    Smart watches 2
                  </li>
                  <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">
                    Smart watches 3
                  </li>
                  <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">
                    Smart watches 4
                  </li>
                  <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">
                    Smart watches 5
                  </li>
                  <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">
                    Smart watches 6
                  </li>
                  <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">
                    Smart watches 7
                  </li>
                </ul>

                <ul className="flex flex-col gap-3">
                  <h2 className="mb-2 font-DM font-bold text-base text-[#262626]">
                    Cameras
                  </h2>
                  <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">
                    Camera 1
                  </li>
                  <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">
                    Camera 2
                  </li>
                  <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">
                    Camera 3
                  </li>
                  <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">
                    Camera 4
                  </li>
                  <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">
                    Camera 5
                  </li>
                  <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">
                    Camera 6
                  </li>
                  <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">
                    Camera 7
                  </li>
                </ul>
              </div>
            </Li>

            <Li
              className="w-full block py-4 px-5 font-DM font-normal text-sm  bg-[#262626] hover:text-white hover:pl-[31px] hover:font-bold border-b border-[#2D2D2D] "
              Litext="Electronics"
            >
              <div className="absolute left-full top-0 hidden group-hover:flex gap-[50px] bg-blue-200 border h-full pt-7 pr-[47px] pb-8 pl-10 ">
                <ul className=" flex flex-col gap-3 ">
                  <h2 className="mb-2 font-DM font-bold text-base text-[#262626]">
                    Phones
                  </h2>
                  <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">
                    Phone 1
                  </li>
                  <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">
                    Phone 2
                  </li>
                  <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">
                    Phone 3
                  </li>
                  <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">
                    Phone 4
                  </li>
                  <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">
                    Phone 5
                  </li>
                  <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">
                    Phone 6
                  </li>
                  <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">
                    Phone 7
                  </li>
                </ul>

                <ul className="flex flex-col gap-3">
                  <h2 className="mb-2 font-DM font-bold text-base text-[#262626]">
                    Computers
                  </h2>
                  <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">
                    Computer 1
                  </li>
                  <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">
                    Computer 2
                  </li>
                  <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">
                    Computer 3
                  </li>
                  <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">
                    Computer 4
                  </li>
                  <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">
                    Computer 5
                  </li>
                  <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">
                    Computer 6
                  </li>
                  <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">
                    Computer 7
                  </li>
                </ul>

                <ul className="flex flex-col gap-3 w-max">
                  <h2 className="mb-2 font-DM font-bold text-base text-[#262626] flex">
                    Smart watches
                  </h2>
                  <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">
                    Smart watches 1
                  </li>
                  <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">
                    Smart watches 2
                  </li>
                  <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">
                    Smart watches 3
                  </li>
                  <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">
                    Smart watches 4
                  </li>
                  <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">
                    Smart watches 5
                  </li>
                  <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">
                    Smart watches 6
                  </li>
                  <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">
                    Smart watches 7
                  </li>
                </ul>

                <ul className="flex flex-col gap-3">
                  <h2 className="mb-2 font-DM font-bold text-base text-[#262626]">
                    Cameras
                  </h2>
                  <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">
                    Camera 1
                  </li>
                  <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">
                    Camera 2
                  </li>
                  <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">
                    Camera 3
                  </li>
                  <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">
                    Camera 4
                  </li>
                  <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">
                    Camera 5
                  </li>
                  <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">
                    Camera 6
                  </li>
                  <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">
                    Camera 7
                  </li>
                </ul>
              </div>
            </Li>

            <Li
              className="w-full block py-4 px-5 font-DM font-normal text-sm  bg-[#262626] hover:text-white hover:pl-[31px] hover:font-bold border-b border-[#2D2D2D] "
              Litext="Clothes"
            >
              <div className="absolute left-full top-0 hidden group-hover:flex gap-[50px] bg-red-200 border h-full pt-7 pr-[47px] pb-8 pl-10 ">
                <ul className=" flex flex-col gap-3 ">
                  <h2 className="mb-2 font-DM font-bold text-base text-[#262626]">
                    Phones
                  </h2>
                  <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">
                    Phone 1
                  </li>
                  <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">
                    Phone 2
                  </li>
                  <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">
                    Phone 3
                  </li>
                  <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">
                    Phone 4
                  </li>
                  <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">
                    Phone 5
                  </li>
                  <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">
                    Phone 6
                  </li>
                  <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">
                    Phone 7
                  </li>
                </ul>

                <ul className="flex flex-col gap-3">
                  <h2 className="mb-2 font-DM font-bold text-base text-[#262626]">
                    Computers
                  </h2>
                  <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">
                    Computer 1
                  </li>
                  <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">
                    Computer 2
                  </li>
                  <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">
                    Computer 3
                  </li>
                  <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">
                    Computer 4
                  </li>
                  <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">
                    Computer 5
                  </li>
                  <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">
                    Computer 6
                  </li>
                  <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">
                    Computer 7
                  </li>
                </ul>

                <ul className="flex flex-col gap-3 w-max">
                  <h2 className="mb-2 font-DM font-bold text-base text-[#262626] flex">
                    Smart watches
                  </h2>
                  <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">
                    Smart watches 1
                  </li>
                  <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">
                    Smart watches 2
                  </li>
                  <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">
                    Smart watches 3
                  </li>
                  <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">
                    Smart watches 4
                  </li>
                  <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">
                    Smart watches 5
                  </li>
                  <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">
                    Smart watches 6
                  </li>
                  <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">
                    Smart watches 7
                  </li>
                </ul>

                <ul className="flex flex-col gap-3">
                  <h2 className="mb-2 font-DM font-bold text-base text-[#262626]">
                    Cameras
                  </h2>
                  <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">
                    Camera 1
                  </li>
                  <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">
                    Camera 2
                  </li>
                  <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">
                    Camera 3
                  </li>
                  <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">
                    Camera 4
                  </li>
                  <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">
                    Camera 5
                  </li>
                  <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">
                    Camera 6
                  </li>
                  <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">
                    Camera 7
                  </li>
                </ul>
              </div>
            </Li>

            <Li
              className="w-full block py-4 px-5 font-DM font-normal text-sm  bg-[#262626] hover:text-white hover:pl-[31px] hover:font-bold border-b border-[#2D2D2D] "
              Litext="Bags"
            >
              <div className="absolute left-full top-0 hidden group-hover:flex gap-[50px] bg-gray-200 border h-full pt-7 pr-[47px] pb-8 pl-10 ">
                <ul className=" flex flex-col gap-3 ">
                  <h2 className="mb-2 font-DM font-bold text-base text-[#262626]">
                    Phones
                  </h2>
                  <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">
                    Phone 1
                  </li>
                  <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">
                    Phone 2
                  </li>
                  <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">
                    Phone 3
                  </li>
                  <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">
                    Phone 4
                  </li>
                  <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">
                    Phone 5
                  </li>
                  <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">
                    Phone 6
                  </li>
                  <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">
                    Phone 7
                  </li>
                </ul>

                <ul className="flex flex-col gap-3">
                  <h2 className="mb-2 font-DM font-bold text-base text-[#262626]">
                    Computers
                  </h2>
                  <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">
                    Computer 1
                  </li>
                  <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">
                    Computer 2
                  </li>
                  <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">
                    Computer 3
                  </li>
                  <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">
                    Computer 4
                  </li>
                  <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">
                    Computer 5
                  </li>
                  <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">
                    Computer 6
                  </li>
                  <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">
                    Computer 7
                  </li>
                </ul>

                <ul className="flex flex-col gap-3 w-max">
                  <h2 className="mb-2 font-DM font-bold text-base text-[#262626] flex">
                    Smart watches
                  </h2>
                  <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">
                    Smart watches 1
                  </li>
                  <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">
                    Smart watches 2
                  </li>
                  <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">
                    Smart watches 3
                  </li>
                  <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">
                    Smart watches 4
                  </li>
                  <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">
                    Smart watches 5
                  </li>
                  <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">
                    Smart watches 6
                  </li>
                  <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">
                    Smart watches 7
                  </li>
                </ul>

                <ul className="flex flex-col gap-3">
                  <h2 className="mb-2 font-DM font-bold text-base text-[#262626]">
                    Cameras
                  </h2>
                  <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">
                    Camera 1
                  </li>
                  <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">
                    Camera 2
                  </li>
                  <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">
                    Camera 3
                  </li>
                  <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">
                    Camera 4
                  </li>
                  <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">
                    Camera 5
                  </li>
                  <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">
                    Camera 6
                  </li>
                  <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">
                    Camera 7
                  </li>
                </ul>
              </div>
            </Li>

            <Li
              className="w-full block py-4 px-5 font-DM font-normal text-sm  bg-[#262626] hover:text-white hover:pl-[31px] hover:font-bold border-b border-[#2D2D2D] "
              Litext="Home appliances"
            >
              <div className="absolute left-full top-0 hidden group-hover:flex gap-[50px] bg-gray-300 border h-full pt-7 pr-[47px] pb-8 pl-10 ">
                <ul className=" flex flex-col gap-3 ">
                  <h2 className="mb-2 font-DM font-bold text-base text-[#262626]">
                    Phones
                  </h2>
                  <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">
                    Phone 1
                  </li>
                  <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">
                    Phone 2
                  </li>
                  <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">
                    Phone 3
                  </li>
                  <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">
                    Phone 4
                  </li>
                  <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">
                    Phone 5
                  </li>
                  <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">
                    Phone 6
                  </li>
                  <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">
                    Phone 7
                  </li>
                </ul>

                <ul className="flex flex-col gap-3">
                  <h2 className="mb-2 font-DM font-bold text-base text-[#262626]">
                    Computers
                  </h2>
                  <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">
                    Computer 1
                  </li>
                  <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">
                    Computer 2
                  </li>
                  <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">
                    Computer 3
                  </li>
                  <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">
                    Computer 4
                  </li>
                  <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">
                    Computer 5
                  </li>
                  <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">
                    Computer 6
                  </li>
                  <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">
                    Computer 7
                  </li>
                </ul>

                <ul className="flex flex-col gap-3 w-max">
                  <h2 className="mb-2 font-DM font-bold text-base text-[#262626] flex">
                    Smart watches
                  </h2>
                  <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">
                    Smart watches 1
                  </li>
                  <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">
                    Smart watches 2
                  </li>
                  <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">
                    Smart watches 3
                  </li>
                  <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">
                    Smart watches 4
                  </li>
                  <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">
                    Smart watches 5
                  </li>
                  <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">
                    Smart watches 6
                  </li>
                  <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">
                    Smart watches 7
                  </li>
                </ul>

                <ul className="flex flex-col gap-3">
                  <h2 className="mb-2 font-DM font-bold text-base text-[#262626]">
                    Cameras
                  </h2>
                  <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">
                    Camera 1
                  </li>
                  <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">
                    Camera 2
                  </li>
                  <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">
                    Camera 3
                  </li>
                  <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">
                    Camera 4
                  </li>
                  <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">
                    Camera 5
                  </li>
                  <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">
                    Camera 6
                  </li>
                  <li className="font-DM font-normal text-sm text-[#767676] hover:font-bold hover:text-[#262626] transition-all duration-300">
                    Camera 7
                  </li>
                </ul>
              </div>
            </Li>
          </ul>
        )}

        <div className="seachbar relative w-full md:w-auto">
          <input
            className="md:w-[601px] w-full py-2 px-3 md:py-4 md:px-5 outline-none font-DM font-normal text-sm"
            type="text"
            placeholder="Search Products"
            onChange={ManageSearch}
            value={Search}
          />
          <IoSearch className="absolute right-3 md:right-5 top-1/2 -translate-y-1/2" />
        </div>
        <div className="account gap-10 hidden md:flex ">
          <div
            onClick={() => setAccount(!account)}
            className="left flex items-center"
          >
            <GoPersonFill />
            <IoMdArrowDropdown />
          </div>
          <div onClick={() => setCart(!cart)} className="cart">
            <FaCartShopping />
          </div>
        </div>

        {cart && (
          <div className="cart w-[360px] absolute right-0 top-full z-10 ">
            <div className="top flex justify-between p-5 items-center bg-[#F5F5F3]">
              <div className="imagetext flex gap-4 items-center">
                <div className="image w-20 h-20 bg-[#D8D8D8]">
                  <img src="" alt="" />
                </div>

                <div className="text flex flex-col gap-3">
                  <p className="name font-DM font-bold text-sm text-Primary">
                    Black Smart Watch
                  </p>
                  <p className="price font-DM font-bold text-sm text-Primary">
                    $44.00
                  </p>
                </div>
              </div>
              <div className="icon">
                <IoClose />
              </div>
            </div>
            <div className="bottom p-5 bg-white">
              <div className="text mb-3">
                <p>
                  Subtotal: <span className="font-bold">$44.00</span>
                </p>
              </div>
              <div className="btn flex gap-5">
                <Link to="/Sign/Up">
                  <Button ButtonText="View Cart" />
                </Link>
                <Link to="/Login">
                  <Button className="" ButtonText="Checkout" />
                </Link>
              </div>
            </div>
          </div>
        )}

        {account && (
          <div className="account w-[200px] absolute right-[58px] top-full z-10">
            <Link to="/myaccount">
              {" "}
              <Button
                className="!w-full border !border-[#F0F0F0]"
                ButtonText="My Account"
              />
            </Link>
            <Button
              className="!w-full border !border-[#F0F0F0]"
              ButtonText="Log Out"
            />
          </div>
        )}
      </Container>

      {filterData.length > 0 && (
        <ul className="bg-white rounded w-[601px] px-5 shadow-md gap-2 absolute left-[51.4%] -translate-x-1/2 z-20 cursor-pointer overflow-y-auto h-auto">
          {filterData.map((item, index) => (
            <li className="flex justify-between items-center py-2 " key={index}>
              <div className="flex items-center gap-5">
                <div>
                  <h2 className="font-DM">{item.title}</h2>
                </div>
              </div>
              <div className="flex flex-col">
                <GoArrowUpLeft />
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Seachbar;
