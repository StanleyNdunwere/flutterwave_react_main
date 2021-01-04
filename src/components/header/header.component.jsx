import React from "react"
import logo from "../../assets/images/logo.svg"
import search from "../../assets/images/search.svg"
import CustomButton from "../global_components/button.component"

export default function Header(props) {

  return (
    <div className="">
      <div className="max-w-screen-2xl mx-auto ">
        <header className="w-full h-20 flex flex-row justify-between items-center px-3">
          <div className="h-full flex flex-row items-center w-auto px-3 cursor-pointer">
            <img src={logo} alt="logo" className="max-h-full h-full w-auto pr-3 py-6 cursor-pointer" />
            <h2 className="font-nunito text-4xl py-7 font-extrabold align-middle cursor-pointer">Jumga</h2>
          </div>
          <div>
            <div className="flex flex-row justify-between items-center">
              <div class="bg-blue-search rounded-xl border-2 w-96 h-full w-50 flex items-center mx-3">
                <img src={search} alt="search" class="inline w-9 h-9 py-2 px-3 align-middle "></img>
                <input type="text" placeholder="Search" class="outline-none bg-transparent w-full pr-3 text-gray-800" />
              </div>
              <span className="mx-2 font-nunito font-bold text-md text-gray-800 hover:text-yellow-700 my-auto cursor-pointer">Ride For Us</span>
              <span className="mx-2 font-nunito font-bold text-md text-gray-800 hover:text-yellow-700 my-auto cursor-pointer">Sell Here</span>
              <div className="ml-4">
                <CustomButton fontSize={"null"} execFunction={null} text="Login/Sign-Up" />
              </div>
            </div>
          </div>
        </header>
      </div>
      {/* <hr /> */}
    </div>
  )

}