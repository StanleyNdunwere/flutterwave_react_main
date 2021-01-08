import React, { useContext, useEffect, useState } from "react";
import CustomButton from "../global_components/button.component";
import addSign from "../../assets/images/addSign.svg";
import minus from "../../assets/images/minus.svg";
import { useParams } from "react-router-dom";
import axios from 'axios'
import { apiUrl } from "../../configParams";
import UserContext from "../../context/user.context";

export default function Product(props) {

  const { id } = useParams()
  console.log(id, "iddddddddddddddddddddddddddddddd")
  const [state, dispatch] = useContext(UserContext);
  const [productInfo, setProductInfo] = useState({})
  const [purchaseInfo, setPurchaseInfo] = useState({
    id: id,
    quantity: 1
  })

  useEffect(() => {
    (async function getProduct() {
      getSingleProductWithId();
    })();
  }, [])

  const getSingleProductWithId = async () => {
    try {
      const response = await axios.get(apiUrl + "products/all/" + id, {
        headers: {
          Authorization: "Bearer " + state.token,
        },
      });
      console.log(response.data.data);
      setProductInfo(response.data.data.product);
    } catch (err) {
      console.log(err);
      //open modal here
    }
  }

  const handleIncreaseQty = () => {
    setPurchaseInfo({ ...purchaseInfo, quantity: purchaseInfo.quantity += 1 })
  }

  const handleDecreaseQty = () => {
    if (purchaseInfo.quantity > 1)
      setPurchaseInfo({ ...purchaseInfo, quantity: purchaseInfo.quantity -= 1 })
  }

  return (
    <div className="w-full my-10 p-8 px-28 h-productDetail grid grid-cols-2 items-center">
      <div className="mx-10 w-productDetail overflow-hidden shadow-around rounded-4xl h-productDetail self-start">
        <img
          src="https://source.unsplash.com/random/800x800"
          className="mx-auto w-full h-full object-cover"
          alt="product"
        />
      </div>
      <div className="h-full flex flex-row items-center">
        <div className="w-4/5 h-auto">
          <h2 className="font-nunito font-extrabold mb-5 text-3xl">
            {productInfo.name}
          </h2>
          <p>
            {productInfo.description}
          </p>
          <p className="py-3 font-bold font-nunito text-lg">
            Price:{" "}
            <span className="font-extrabold text-yellow-400">{productInfo.currencyCode} {productInfo.price}</span>
          </p>
          <p className="pb-3 font-bold font-nunito text-lg">
            Delivery:{" "}
            <span className="font-extrabold text-yellow-400">{productInfo.currencyCode} {productInfo.deliveryCost}</span>
          </p>
          <div className="mb-4 flex flex-row items-start h-10 w-full">
            <div
              onClick={() => { handleDecreaseQty() }}
              className=" p-3 bg-yellow-300 h-full w-10 rounded-lg border-1 hover:bg-yellow-500">
              <img
                src={minus}
                className="no-repeat cover"
                alt="add more items"
              />
            </div>
            <div className="h-full p-2 px-4 w-auto text-xl font-bold font-nunito">
              <span>{purchaseInfo.quantity}</span>
            </div>
            <div
              onClick={() => { handleIncreaseQty() }}
              className=" p-3 bg-yellow-300 h-full w-10 rounded-lg hover:bg-yellow-500 border-1">
              <img
                src={addSign}
                className="no-repeat cover"
                alt="add more items"
              />
            </div>
          </div>
          <div className="flex flex-row mt-8">
            <div className="mr-4">
              <CustomButton fontSize={"1.2rem"} text="Pay Now" />
            </div>
            <div>
              <CustomButton fontSize={"1.2rem"} text="Add To Cart" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
