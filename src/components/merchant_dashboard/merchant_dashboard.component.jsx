import React from "react";
import CustomButton from "../global_components/button.component";
import MerchantDetail from "../global_components/merchant_detail.component";
import MerchantEditProduct from "./merchant_edit_product.component";
import RiderDetail from "../global_components/rider_detail.component";
import Transaction from "../global_components/transaction.component";
import UserHeader from "../global_components/user_header.component";

export default function MerchantDashboard(props) {
  return (
    <div className="max-w-full w-full my-2 px-8">
      <div className="w-full h-full ">
        <div className="flex flex-row justify-between items-center mb-3">
          <UserHeader userType="merchant" />
        </div>
        <div className="w-full grid grid-flow-row gap-5 grid-cols-body">
          <div className="">
            <div className="w-full rounded-3xl bg-yellow-100 shadow-around px-6 py-6">
              <MerchantDetail userType="merchant" />
              <br></br>
              <RiderDetail userType="merchant" />
            </div>
          </div>
          <div className="max-w-full min-w-0">
            <div className="w-full p-6 rounded-3xl shadow-around">
              <div>
                <h3 className="text-2xl font-nunito font-bold">
                  Your Earnings
                </h3>
                <div className="w-full h-14 py-4">
                  <p className="font-nunito font-extrabold text-xl text-yellow-500">
                    Earned: <span>NGN 100.00</span>
                  </p>
                </div>
              </div>
              <div className="w-full">
                <div className="flex flex-row justify-between items-center mb-6">
                  <h3 className="text-2xl font-nunito font-bold">
                    Your Products
                  </h3>
                  <p className="py-2 px-6 rounded-xl text-md font-nunito text-yellow-50 bg-yellow-500 font-bold shadow-md">
                    Add New Product
                  </p>
                </div>
                <div className="w-full h-80 py-4-400 flex flex-row py-3 overflow-x-scroll">
                  <MerchantEditProduct />
                  <MerchantEditProduct />
                  <MerchantEditProduct />
                  <MerchantEditProduct />
                  <MerchantEditProduct />
                </div>
              </div>
              <br />
              <div>
                <h3 className="text-2xl font-nunito font-bold">Your Orders</h3>
                <div className="w-full h-80 py-4 px-4 overflow-x-auto">
                  <div className="h-10 py-1 px-6 my-1 rounded-2xl overflow-none w-full flex flex-row justify-between items-center font-nunito font-bold font-lg">
                    <p>Image</p>
                    <p>Product Name</p>
                    <p>Price</p>
                    <p>Revenue</p>
                  </div>
                  <Transaction />
                  <Transaction />
                  <Transaction />
                  <Transaction />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
