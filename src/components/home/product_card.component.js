import React from 'react'
import CustomButton from "../global_components/button.component"

export default function ProductCard(props) {

  return (
    <div className="">
      <div
        style={{
          backgroundImage: "url(https://source.unsplash.com/random/800x800)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="h-product bg-green-400 rounded-5xl shadow-around relative overflow-hidden"
      >
        <div className="w-full h-full flex flex-col items-center justify-between">
          <div className="flex flex-row items-center justify-end w-full">
            <p className="py-2 px-4 bg-gray-50 rounded-full font-nunito text-lg font-extrabold m-4 bg-yellow-50 shadow-aroundY">
              NGN 200.00
          </p>
          </div>
          <div className="px-6 py-4 bg-yellow-50 w-full text-center">
            <p className="text-gray-800 font-semibold text-xl font-nunito">Product Name</p>
            <div className="px-6 py-3">
              <CustomButton text={"Buy Now"} fontSize={"1.2rem"} execFunction={null} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}