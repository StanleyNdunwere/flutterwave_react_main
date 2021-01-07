import React from "react";
import { useHistory } from "react-router-dom";

export default function MerchantEditProduct(props) {

  const history = useHistory()
  return (
    <div className="h-full min-w-productCard w-productCard mx-4 shadow-lg overflow-hidden rounded-4xl relative">
      <img
        src={"http://" + props.product.productImageLink}
        alt="productImage"
        className="z-index-0 absolute top-0 left-0"
      />
      <div className="w-full h-full bg-black opacity-40 z-index-10 absolute top-0 left-0"></div>
      <div className="grid grid-rows-3 justify-center items-center bg-transparent w-full h-full z-index-20 absolute top-0 ">
        <p className="font-nunito font-bold text-xl w-full px-4 py-2 text-yellow-50">
          {props.product.name}
        </p>
        <p className="font-nunito font-extrabold text-lg text-gray-700 bg-white p-2 mx-6 rounded-full shadow-md text-center">
          {props.product.price}
        </p>
        <div className="grid grid-cols-2 px-3 justify-between items-center">
          <p
            onClick={() => {
              history.push(history.location.pathname + "/" + props.product.id)
            }}
            className="mr-2 py-2 px-3 cursor-pointer rounded-xl text-center font-nunito text-yellow-50 bg-yellow-500 font-bold shadow-md">
            Edit
          </p>
          <p className="py-2 px-3 cursor-pointer rounded-xl text-center font-nunito text-yellow-50 bg-yellow-500 font-bold shadow-md">
            Delete
          </p>
        </div>
      </div>
    </div>
  );
}
