import React from "react"
import ProductCard from "./product_card.component"

export default function Home(props) {

  return (
    <div className="my-2 px-6 py-2">
      <h2 className="text-4xl font-extrabold text-gray-900 font-nunito py-3 text-center">Hello There... Let's go a-shopping!</h2>

      <div className="grid grid-cols-3 justify-between items-center gap-14 mt-10 mx-32">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  )


}