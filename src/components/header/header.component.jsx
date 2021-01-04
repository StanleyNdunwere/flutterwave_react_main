import React from "react"
import { useHistory } from "react-router-dom"
import logo from "../../assets/images/logo.svg"
import search from "../../assets/images/search.svg"
import CustomButton from "../global_components/button.component"

export default function Header(props) {
  const history = useHistory();

  const handleSignUp = () => {
    history.push("/sign-up")
  }

  const handleLogin = () => {
    history.push("/login")
  }

  const goHome = () => {
    history.push("/")
  }


  return (
    <div className="">
      <div className="max-w-screen-2xl mx-auto ">
        <header className="w-full h-20 flex flex-row justify-between items-center px-3">
          <div className="h-full flex flex-row items-center w-auto px-3 cursor-pointer" onClick={goHome}>
            <img src={logo} alt="logo" className="max-h-full h-full w-auto pr-3 py-6 cursor-pointer" />
            <h2 className="font-nunito text-4xl py-7 font-extrabold align-middle cursor-pointer">Jumga</h2>
          </div>
          <div>
            <div className="flex flex-row justify-between items-center">
              <div className="bg-blue-search rounded-xl border-2 w-96 h-full w-50 flex items-center mx-3">
                <img src={search} alt="search" className="inline w-9 h-9 py-2 px-3 align-middle "></img>
                <input type="text" placeholder="Search" className="outline-none bg-transparent w-full pr-3 text-gray-800" />
              </div>
              <span onClick={(() => { handleSignUp() })} className="mx-2 font-nunito font-bold text-md text-gray-800 hover:text-yellow-700 my-auto cursor-pointer">Sign Up</span>
              <div className="ml-4">
                <CustomButton fontSize={"null"} execFunc={handleLogin} text="Login" />
              </div>
            </div>
          </div>
        </header>
      </div>
      {/* <hr /> */}
    </div>
  )

}