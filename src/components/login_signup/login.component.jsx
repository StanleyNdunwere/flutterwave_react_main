import React from 'react'
import login from "../../assets/images/login.svg"
import CustomButton from '../global_components/button.component'


export default function LoginComponent(props) {
  return (
    <div className="w-full grid grid-cols-2 items-center justify-center px-10 my-5">
      <div className="p-24">
        <img src={login} alt="shop" className="no-repeat w-full h-auto cover" />
      </div>
      <div className="w-full h-auto shadow-aroundY rounded-5xl bg-yellow-50 p-5 my-auto mx-auto">
        <h2 className="text-4xl font-nunito font-bold text-gray-800 pb-4 mx-auto text-center mt-10">Login</h2>
        <div className="h-full p-7 w-4/5 mx-auto">
          <div>
            <p for="username" className="font-nunito font-bold py-0">Enter your username:</p>
            <input name="username" type="text" className="outline-none bg-transparent border-b-2 border-gray-600 mb-7 rounded-sm font-nunito font-lg h-8 text-decoration-none w-full" />
          </div>
          <div>
            <p for="password" className="font-nunito font-bold py-0">Enter your password:</p>
            <input name="password" type="password" className="outline-none bg-transparent border-b-2 border-gray-600 mb-3 rounded-sm font-nunito font-lg h-8 text-decoration-none w-full" />
          </div>         
          <div className="text-center py-6">
            <CustomButton text="Log In" fontSize={"1.4rem"} />
          </div>
        </div>

      </div>

    </div>
  )


}