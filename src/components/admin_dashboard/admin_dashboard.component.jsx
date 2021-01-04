import React from "react"
import MerchantDetail from "../global_components/merchant_detail.component"
import RiderDetail from "../global_components/rider_detail.component"
import Transaction from "../global_components/transaction.component"
import UserHeader from "../global_components/user_header.component"
import AdminTransaction from "./admin_transactions.component"
import MerchantRiderList from "./all_merchants_riders.component"
import MerchantList from "./all_merchants_riders.component"
import MerchantRiderDetail from "./merchant_rider_detail.component"

export default function AdminDashBoard(props) {
  return (
    <div className="max-w-full w-full my-2 px-8">
      <div className="w-full h-full ">
        <div className="flex flex-row justify-between items-center mb-3">
          <UserHeader userType="admin" />
        </div>
        <div className='w-full grid grid-flow-row gap-5 grid-cols-body'>
          <div className="">
            <div className='w-full rounded-3xl bg-yellow-100 shadow-around px-6 py-6'>
              <MerchantRiderList />
              <br></br>
              <MerchantRiderList />
            </div>
          </div>
          <div className="max-w-full min-w-0">
            <div className='w-full p-6 rounded-3xl shadow-around'>
              <div className="flex flex-row justify-between items-center w-full mb-4">
                <h3 className='text-2xl font-nunito font-bold'>Jumga Total Commission Earned:</h3>
                <div className="h-14 py-4">
                  <p className='font-nunito font-extrabold text-xl text-yellow-500'>Earned: <span>NGN 100.00</span></p>
                </div>
              </div>
              <MerchantRiderDetail />
              <br />
              <div>
                <h3 className='text-2xl font-nunito font-bold'>All transactions:</h3>
                <div className='h-10 py-1 px-10 my-1 rounded-2xl overflow-none w-full flex flex-row justify-between items-center font-nunito font-bold font-lg'>
                  <p>Image</p>
                  <p>Product Name</p>
                  <p>Merchant</p>
                  <p>Rider</p>
                  <p>Price</p>
                  <p>Merchant fee</p>
                  <p>Rider fee</p>
                  <p>Jumga fee</p>

                </div>
                <div className="w-full h-96 py-4 px-4 overflow-x-auto">
                  <AdminTransaction />
                  <AdminTransaction />
                  <AdminTransaction />
                  <AdminTransaction />
                  <AdminTransaction />
                  <AdminTransaction />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}