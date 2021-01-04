import React from 'react'
import shop from "../../assets/images/shop.svg"
import CustomButton from '../global_components/button.component'
import ProductCard from '../home/product_card.component'

export default function SignUpComponent(props) {
  return (
    <div className="w-full grid grid-cols-2 items-center justify-center px-10 mb-2">
      <div className="p-24">
        <img src={shop} alt="shop" className="no-repeat w-full h-auto cover" />
      </div>
      <div className="w-full h-full mt-2 shadow-aroundY rounded-4xl bg-yellow-50 p-4 mx-auto">
        <h2 className="text-4xl font-nunito font-extrabold text-gray-800 pb-4 mx-auto text-center">Sign Up</h2>
        <div className="flex flex-col justify-between h-full pb-7 w-4/5 mx-auto">
          <div>
            <p for="username" className="font-nunito font-bold py-0">Enter your username:</p>
            <input name="username" type="text" className="outline-none bg-transparent border-b-2 border-gray-600 mb-0 rounded-sm font-nunito h-8 text-decoration-none w-full" />
          </div>
          <div>
            <p for="password" className="font-nunito font-bold py-0">Enter your password:</p>
            <input name="password" type="password" className="outline-none bg-transparent border-b-2 border-gray-600 mb-0 rounded-sm font-nunito h-8 text-decoration-none w-full" />
          </div>
          <div>
            <p for="email" className="font-nunito font-bold py-0 my-0">Enter your Email:</p>
            <input name="email" type="email" className="outline-none bg-transparent border-b-2 border-gray-600 mb-0 rounded-sm font-nunito  h-8 text-decoration-none w-full" />
          </div>
          <div>
            <p for="email" className="font-nunito font-bold py-0 my-0">Enter your Account Number:</p>
            <input name="email" type="number" className="outline-none bg-transparent border-b-2 border-gray-600 mb-0 rounded-sm font-nunito h-8 text-decoration-none w-full" />
          </div>
          <div>
            <p for="country" className="font-nunito font-bold py-0">Choose Your Country:</p>
            <select name="country" id="country" className="outline-none bg-transparent border-b-2 border-gray-600 mb-0 rounded-sm font-nunito h-8 text-decoration-none w-full">
              <option value=""> </option>
              <option value="NG">Nigeria</option>
              <option value="GH">Ghana</option>
              <option value="UK">UK</option>
              <option value="KYA">Kenya</option>
            </select>
          </div>
          <div>
            <p for="country" className="font-nunito font-bold py-0">Choose Your Bank:</p>
            <select name="country" id="country" className="outline-none bg-transparent border-b-2 border-gray-600 mb-0 rounded-sm font-nunito h-8 text-decoration-none w-full">
              <option value=""> </option>
              <option value="NG">Nigeria</option>
              <option value="GH">Ghana</option>
              <option value="UK">UK</option>
              <option value="KYA">Kenya</option>
            </select>
          </div>
          <div>
            <p for="accountType" className="font-nunito font-bold py-0">Choose Your Account Type:</p>
            <select name="country" id="country" className="outline-none bg-transparent border-b-2 border-gray-600 mb-0 rounded-sm font-nunito h-8 text-decoration-none w-full">
              <option value=""> </option>
              <option value="merchant">Merchant</option>
              <option value="dispatch_rider">Dispatch Rider</option>
            </select>
          </div>

          <div className="text-center pb-12">
            <CustomButton text="Register" fontSize={"1.4rem"} />
          </div>
        </div>

      </div>

    </div>
  )


}