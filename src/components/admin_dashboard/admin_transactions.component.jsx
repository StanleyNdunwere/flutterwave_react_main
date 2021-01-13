import React from "react";

export default function AdminTransaction(props) {
  // key={order._id}
  // imageLink={order.productImageLink}
  // name={order.productName}
  // merchantName={order.merchantName}
  // dispatchName={order.dispatchName}
  // merchantCut={order.merchantCut}
  // dispatchCut={order.dispatchCut}
  // jumgaProductCut={order.jumgaProductCut}
  // jumgaDeliveryCut={order.jumgaDeliveryCut}
  return (
    <div className="h-18 py-2 px-3 my-5 shadow-lg rounded-2xl overflow-none w-full bg-yellow-100 flex flex-row justify-between items-center">
      <img src={props.imageLink} className="rounded-full h-14" alt="product" />
      <p>{props.name}</p>
      <p>{props.merchantName}</p>
      <p>{props.dispatchName}</p>
      <p>{props.currency}</p>
      <p>{props.merchantCut}</p>
      <p>{props.dispatchCut}</p>
      <p>{parseFloat(props.jumgaProductCut) + parseFloat(props.jumgaDeliveryCut)}</p>
      <p>{props.jumgaDeliveryCut}</p>
    </div>
  );
}
