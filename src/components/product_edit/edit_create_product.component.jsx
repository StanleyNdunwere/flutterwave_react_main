import React from 'react'
import CustomButton from '../global_components/button.component'
import addSign from '../../assets/images/addSign.svg'
import minus from '../../assets/images/minus.svg'

export default function ProductEditCreate(prop) {

  return (
    <div className="">
      <h3 className='font-nunito text-3xl font-extrabold mx-auto text-center'>Create Product</h3>
      <div className="w-full my-10 p-8 px-28 h-productDetail grid grid-cols-2 items-center">
        <div className="mx-10 w-productDetail overflow-hidden shadow-around rounded-4xl h-productDetail self-start">
          <div className=" mx-auto w-full h-full flex justify-center items-center relative" style={{
            backgroundImage: "url(https://source.unsplash.com/random/800x800)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}>
            <div className="bg-black opacity-40 w-full h-full top-0 absolute z-10">
            </div>
            <div className="w-3/5 h-auto bg-transparent z-20 flex-col justify-center items-center relative">
              <input onChange={(e) => {
                console.log(e.target.files[0])
              }} type="file" name="myfile" className="text-6xl opacity-0  absolute left-0 top-0" />
              <p className="z-20 px-6 py-3 w-4/5 m-auto cursor-pointer rounded-2xl text-center shadow-around overflow-hidden bg-yellow-500 text-yellow-50 font-nunito font-bold text-2xl"
              >Choose Image</p>
            </div>
          </div>
        </div>
        <div>
          <div className="w-4/5">
            <div>
              <p for="productName" className="font-nunito font-bold py-0  text-yellow-600">Set Product name:</p>
              <input name="productName" type="text" className="outline-none bg-transparent border-b-2 border-gray-600 mb-3 rounded-sm font-nunito font-extrabold text-2xl h-auto text-decoration-none w-full py-3" />
            </div>
            <div>
              <p for="description" className="font-nunito font-bold py-0  text-yellow-600">Description:</p>
              <textarea name="description" type="text" rows={5} className="outline-none bg-transparent border-b-2 border-gray-600 mb-3 rounded-sm font-nunito h-auto text-decoration-none w-full py-3" />
            </div>
            <div>
              <p for="price" className="font-nunito font-bold py-0  text-yellow-600">Set Product Price:</p>
              <input name="price" type="numbers" className="outline-none bg-transparent border-b-2 border-gray-600 mb-3 rounded-sm font-nunito h-auto text-decoration-none w-full py-3" />
            </div>
            <div>
              <p for="delivery" className="font-nunito font-bold py-0 text-yellow-600">Set Delivery Cost Per Unit Product:</p>
              <input name="deliveryCost" type="numbers" className="outline-none bg-transparent border-b-2 border-gray-600 mb-3 rounded-sm font-nunito h-auto text-decoration-none w-full py-3" />
            </div>
            <div className="flex flex-row mt-4">
              <div className="mr-4">
                <CustomButton fontSize={"1.2rem"} text="Save Changes" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

} 