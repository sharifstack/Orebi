import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import ReactPaginate from "react-paginate";
import ProductItem from "./ProductItem";
import special1 from "/SpecialOffer/special1.png";
import VerticalProductItem from "./VerticalProductItem";

// const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25,26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25,26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25,26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,];

const Paginate = ({ itemsPerPage }) => {
  const [itemOffset, setItemOffset] = useState(0);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const respones = await fetch("https://dummyjson.com/products");
      const data = await respones.json();
      setItems(data.products);
    };

    getData();
  }, []);

  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <div className="flex flex-col sm:flex-row sm:flex-wrap gap-x-10 gap-y-12">
        <Items currentItems={currentItems} />
      </div>
      <div className="sm:flex sm:justify-between items-center mt-12 px-2 sm:px-0">
        <ReactPaginate
          breakLabel="..."
          nextLabel=""
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel=""
          renderOnZeroPageCount={null}
          containerClassName="pagination flex gap-4"
          pageClassName="page-item w-9 h-9 border border-[#F0F0F0] text-[#767676]"
          pageLinkClassName="page-link w-full h-full flex items-center justify-center"
          activeClassName="active bg-[#262626] border-transparent text-[#FFFFFF]"
          previousClassName="page-item hidden"
          nextClassName="page-item hidden"
        />

        <p className="font-DM text-sm font-normal leading-7 text-ptext">{`Products from  ${
          itemOffset + 1
        } to ${endOffset > items.length ? items.length : endOffset} of ${
          items.length
        }`}</p>
      </div>
    </>
  );
};

let Items = ({ currentItems }) => {
  return (
    <>
      {currentItems &&
        currentItems.map((item, i) => (
          <ProductItem
            key={i}
            src={item.thumbnail}
            Pname={item.title}
            Price={item.price}
            Color={item.brand}
            Offer={item.discountPercentage}
            OfferEye={true}
          />
        ))}
    </>
  );
};

export default Paginate;
