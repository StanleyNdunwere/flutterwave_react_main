import React, { useState } from 'react'
import shop from "../../assets/images/shop.svg"
import CustomButton from '../global_components/button.component'
import ProductCard from '../home/product_card.component'
import axios from 'axios'

export default function SignUpComponent(props) {
  const [signUpDetails, setSignUpDetails] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [allBanksByCode, setAllBanksByCode] = useState([])

  const submitSignUpForm = async (signUpDetails) => {
    try {
      const response = await axios({
        method: 'post',
        url: "http://localhost:3000/users/sign-up",
        data: signUpDetails,
      });

      console.log(response.data.data)
      // return response.data.data;
    } catch (err) {
      console.log(err)
      // return null;
    }
  }

  const fetchAllBanksByCode = (bankCode) => {
    const url = "http://localhost:3000/country-currency/bank-codes/";
    axios.get(url + bankCode)
      .then(res => {
        const banks = res.data;
        console.log(banks.data.data)
        if (banks.status === 'success') {
          setAllBanksByCode([...banks.data.data])
          console.log(allBanksByCode);
        } else {
          setAllBanksByCode([]);
        }
      });
  }

  return (
    <div className="w-full grid grid-cols-2 items-center justify-center px-10 mb-2">
      <div className="p-24">
        <img src={shop} alt="shop" className="no-repeat w-full h-auto cover" />
      </div>
      <div className="w-full h-full mt-2 shadow-aroundY rounded-4xl bg-yellow-50 p-4 mx-auto">
        <h2 className="text-4xl font-nunito font-extrabold text-gray-800 pb-4 mx-auto text-center">Sign Up</h2>
        <div className="flex flex-col justify-between h-full pb-7 w-4/5 mx-auto">
          <div>
            <p className="font-nunito font-bold py-0">Enter your username:</p>
            <input onChange={(e) => {
              setSignUpDetails({ ...signUpDetails, username: e.target.value })
            }} name="username" type="text" className="outline-none bg-transparent border-b-2 border-gray-600 mb-0 rounded-sm font-nunito h-8 text-decoration-none w-full" />
          </div>
          <div>
            <p className="font-nunito font-bold py-0">Enter your password:</p>
            <input onChange={(e) => {
              setSignUpDetails({ ...signUpDetails, password: e.target.value })
            }} name="password" type="password" className="outline-none bg-transparent border-b-2 border-gray-600 mb-0 rounded-sm font-nunito h-8 text-decoration-none w-full" />
          </div>
          <div>
            <p className="font-nunito font-bold py-0 my-0">Enter your Email:</p>
            <input onChange={(e) => {
              setSignUpDetails({ ...signUpDetails, email: e.target.value })
            }} name="email" type="email" className="outline-none bg-transparent border-b-2 border-gray-600 mb-0 rounded-sm font-nunito  h-8 text-decoration-none w-full" />
          </div>
          <div>
            <p className="font-nunito font-bold py-0 my-0">Enter your Account Number:</p>
            <input onChange={(e) => {
              setSignUpDetails({ ...signUpDetails, accountNumber: e.target.value })
            }} name="accountNumber" type="number" className="outline-none bg-transparent border-b-2 border-gray-600 mb-0 rounded-sm font-nunito h-8 text-decoration-none w-full" />
          </div>
          <div>
            <p className="font-nunito font-bold py-0">Choose Your Country:</p>
            <select onChange={(e) => {
              setSignUpDetails({ ...signUpDetails, country: e.target.value })
              fetchAllBanksByCode(e.target.value);
            }} name="country" id="country" className="outline-none bg-transparent border-b-2 border-gray-600 mb-0 rounded-sm font-nunito h-8 text-decoration-none w-full">
              <option value=""> </option>
              <option value="NG">Nigeria</option>
              <option value="GH">Ghana</option>
              <option value="UK">UK</option>
              <option value="KE">Kenya</option>
            </select>
          </div>
          <div>
            <p className="font-nunito font-bold py-0">Choose Your Bank:</p>
            <select onChange={(e) => {
              setSignUpDetails({ ...signUpDetails, bankCode: e.target.value })
            }} name="bankCode" id="bankCode" className="outline-none bg-transparent border-b-2 border-gray-600 mb-0 rounded-sm font-nunito h-8 text-decoration-none w-full">
              <option value=""> </option>
              {allBanksByCode.map((bank) => {
                return (<option key={bank.id} value={bank.code}>{bank.name}</option>)
              })}
            </select>
          </div>
          <div>
            <p className="font-nunito font-bold py-0">Choose Your Account Type:</p>
            <select onChange={(e) => {
              setSignUpDetails({ ...signUpDetails, accountType: e.target.value })
            }} name="accountType" id="accountType" className="outline-none bg-transparent border-b-2 border-gray-600 mb-0 rounded-sm font-nunito h-8 text-decoration-none w-full">
              <option value=""> </option>

              <option value="merchant">Merchant</option>
              <option value="dispatch_rider">Dispatch Rider</option>
            </select>
          </div>

          <div className="text-center pb-12">
            <CustomButton onClick={() => {
              submitSignUpForm(signUpDetails)
            }} text="Register" fontSize={"1.4rem"} />
          </div>
        </div>
      </div>
    </div>
  )


}