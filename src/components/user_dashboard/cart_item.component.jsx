import React, { useState } from "react";

export default function CartItem(props) {
  // console.log(props.delete);

  const [selected, setSelected] = useState(false)
  return (
    <div
      style={{
        background: selected ? "#fee0d1" : "#d1fed1"
      }}
      className="h-18 py-2 px-2 my-5 shadow-lg rounded-lg overflow-none w-full bg-green-100 flex flex-row justify-between items-center">
      <img
        src={`${props.item.productImageLink}`}
        className="rounded-lg h-14"
        alt="product"
      />
      <p>{props.item.productName}</p>
      <p>{props.item.itemQuantity}</p>
      <p>{props.item.currencyCode}</p>
      <p>{props.item.price}</p>
      <p>{props.item.deliveryCost}</p>
      <p onClick={() => {
        console.log(props.item._id, "id cart item")
        props.delete(props.item._id)
      }}
        className="font-nunito font-extrabold text-sm px-2 py-2 bg-red-500 cursor-pointer rounded-xl shadow-around text-green-50 hover:bg-green-600">
        delete
      </p>
      <p onClick={() => {
        if (selected === false) {
          setSelected(true)
          let purchaseInfo = { ...props.item }
          // let purchaseInfo = { productId: props.item.productId, quantity: props.item.itemQuantity, itemId: props.item._id }
          console.log(purchaseInfo, 'vakess retrieved')
          props.setSelectedCartItems([...props.selectedCartItems, purchaseInfo])
        } else {
          setSelected(false)
          const newSelected = props.selectedCartItems.filter((item) => {
            return item._id != props.item._id
          })
          props.setSelectedCartItems([...newSelected])
        }
      }}
        className="font-nunito font-extrabold text-sm px-2 py-2 bg-blue-500 cursor-pointer rounded-xl shadow-around text-green-50 hover:bg-green-600">
        {selected ? "Unselect" : "Select"}
      </p>
    </div>
  );
}
