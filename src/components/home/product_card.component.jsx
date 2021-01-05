import React from 'react'
import CustomButton from "../global_components/button.component"

export default function ProductCard(props) {
  return (
    <div className="">
      <div className="h-80 bg-gray-300 rounded-2xl shadow-lg relative overflow-hidden" >
        <img src={"http://" + props.imageLink} alt="product" className="absolute top-0 left-0 z-index-10" />
        <div className="w-full h-full flex flex-col items-center justify-between absolute bottom-0 left-0 z-index-20">
          <div className="flex flex-row items-center justify-end w-full">
            <p className="py-1 px-4 text-yellow-600 rounded-full font-nunito text-md font-extrabold m-4 bg-yellow-50 shadow-md">
              {props.currencyCode} {props.productPrice}
            </p>
          </div>
          <div className="px-6 py-2 bg-yellow-200 w-full text-center">
            <p className="text-gray-800 font-semibold text-md font-nunito">{props.productName}</p>
            <div className="px-6 py-2">
              <CustomButton text={"Buy Now"} fontSize={"1rem"} execFunction={null} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}