import React from "react";
import { cartbook } from "../data.js";
import { Cart } from "./Cart.jsx";

const CartUi = () => {
  return (
    <>
      <div className="flex px-48 flex-col mt-10 mb-10">
        <div className="border-2 border-[#778da9] border-t-0">
          <h1 className="font-bold ml-6 text-3xl leading-8 py-2">
            Bestsellers in Books
          </h1>
        </div>

        <div className="grid lg:grid-cols-3">
          {cartbook.map((data, index) => (
            <Cart key={index} id={data.id} img={data.img} title={data.title} author={data.author} price={data.price}/>
          ))}
        </div>
      </div>
    </>
  );
};

export default CartUi;
