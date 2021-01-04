import React from 'react'
import CustomButton from "../global_components/button.component"

export default function ProductCard(props) {
  return (
    <div className="">
      <div className="h-product bg-green-400 rounded-5xl shadow-around relative overflow-hidden" >
        <img src={"http://" + props.imageLink} alt="product" className="absolute top-0 left-0 p-4 z-index-10" />
        <div className="w-full h-full flex flex-col items-center justify-between absolute bottom-0 left-0 z-index-20">
          <div className="flex flex-row items-center justify-end w-full">
            <p className="py-2 px-4 bg-gray-50 rounded-full font-nunito text-lg font-extrabold m-4 bg-yellow-50 shadow-aroundY">
              {props.currencyCode} {props.productPrice}
            </p>
          </div>
          <div className="px-6 py-4 bg-yellow-50 w-full text-center">
            <p className="text-gray-800 font-semibold text-xl font-nunito">{props.productName}</p>
            <div className="px-6 py-3">
              <CustomButton text={"Buy Now"} fontSize={"1.2rem"} execFunction={null} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}