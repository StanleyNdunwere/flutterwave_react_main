import React, { useEffect, useState } from "react"
import ProductCard from "./product_card.component"
import axios from 'axios'

export default function Home(props) {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3000/products`)
      .then(res => {
        const products = res.data;
        // console.log(products.data.products, "productsssssss");
        if (products.status === 'success') {
          setProducts(products.data.products)
        } else {
          setProducts([]);
        }
      });
  }, [])

  return (
    <div className="my-2 px-6 py-2">
      <h2 className="text-4xl font-extrabold text-gray-900 font-nunito py-3 text-center">Hello There... Let's go a-shopping!</h2>

      {(products.length > 0) ?
        (<div className="grid grid-cols-3 justify-between items-center gap-14 mt-10 mx-32">
          { products.map(product => {
            // console.log(product);
            return <ProductCard
              key={product._id}
              productName={product.name}
              productPrice={product.price}
              currencyCode={product.currencyCode}
              imageLink={product.productImageLink}
            />
          })}

        </div>) :
        (<div className="text-4xl font-extrabld m-auto text-center py-20">
          <h2 className="text-4xl font-extrabold m-auto font-nunito">No products at this time</h2>
        </div>)
      }

    </div>
  )


}