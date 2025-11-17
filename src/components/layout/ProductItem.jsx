import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { FaArrowsRotate, FaCartShopping } from "react-icons/fa6";


const Li = ({name,iconName }) => {
return(
    <li className="flex justify-end md:gap-3 gap-0 items-center cursor-pointer font-DM transition-all duration-150 text-ptext text-base font-bold hover:text-Primary">{name} {iconName}</li>

)
}


const ProductItem = ({Pname, Price, Color, Offer, src, OfferEye,className }) => {

  let [Offershow, SetOfferShow] = useState(OfferEye);
    
  return (
    <div className={`w-[370px] ${className} shadow-lg sm:shadow-none mx-2 sm:mx-0`}>
      <div className="image w-full h-[370px] relative group">
        <img className="w-full h-full object-cover" src={src} />

        <div className="overlay absolute left-0 bottom-0 bg-white/40 w-full px-7 py-6 opacity-0 invisible transition-all duration-300 group-hover:opacity-100 group-hover:visible ">
          <ul className="flex flex-col gap-3">
           <Li  name="Add to Wish List" iconName={<FaHeart className='text-Primary' />} />
           <Li name="Compare" iconName={<FaArrowsRotate className='text-Primary' />} />
           <Li name="Add to Cart" iconName={<FaCartShopping className='text-Primary'/>} />
             
          </ul>
        </div>

        <button className={`absolute top-5 left-5  w-[92px] bg-Primary text-white font-DM text-sm font-bold ${Offershow ? "py-2" : "py-0"}`}>{Offer}% off</button>
      </div>

      <div className="text">
        <div className=" flex justify-between pt-6 pb-4">
          <h5 className="font-DM font-bold text-xl ">{Pname}</h5>
          <span className="font-DM font-normal leading-7 text-[#767676]">
            ${Price}
          </span>
        </div>
        <p className="font-DM font-normal leading-7 text-[#767676]">{Color}</p>
      </div>
    </div>

  
  );
};

export default ProductItem;


