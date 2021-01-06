import React from "react";
import CustomButton from "../global_components/button.component";
import addSign from "../../assets/images/addSign.svg";
import minus from "../../assets/images/minus.svg";

export default function Product(props) {
  return (
    <div className="w-full my-10 p-8 px-28 h-productDetail grid grid-cols-2 items-center">
      <div className="mx-10 w-productDetail overflow-hidden shadow-around rounded-4xl h-productDetail self-start">
        <img
          src="https://source.unsplash.com/random/800x800"
          className="mx-auto w-full h-full"
          alt="product"
        />
      </div>
      <div className="h-full">
        <div className="w-4/5 h-auto">
          <h2 className="font-nunito font-extrabold mb-5 text-3xl">
            Product Name
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
            inventore tempore facilis dolorum at fugiat, error eos eligendi sed,
            provident esse quis pariatur neque facere doloremque, velit labore
            nobis commodi. Tenetur exercitationem omnis minus esse tempore
            debitis excepturi molestiae doloremd?Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Fugit inventore tempore facilis
            dolorum at fugiat, error eos eligendi sed, provident esse quis
            pariatur neque facere doloremque, velit labore nobis commodi.Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Fugit inventore
            tempore facilis dolorum at fugiat, error eos eligendi sed, provident
            esse quis pariatur neque facere doloremque, velit labore nobis
            commodi. Tenetur exercitationem omnis minus esse tempore debitis
            excepturi molestiae doloremd?Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Fugit inventore tempore facilis dolorum at fugiat,
            error eos eligendi sed, provident esse quis pariatur neque facere
            doloremque, velit labore nobis commodi. Tenetur exercitationem omnis
            minus esse tempore debitis excepturi molestiae doloremd?Lorem ipsum
            dolor sit amet consectetur
          </p>
          <p className="py-3 font-bold font-nunito text-lg">
            Price:{" "}
            <span className="font-extrabold text-yellow-400">NGN 200.00</span>
          </p>
          <p className="pb-3 font-bold font-nunito text-lg">
            Delivery:{" "}
            <span className="font-extrabold text-yellow-400">NGN 20.00</span>
          </p>
          <div className="mb-4 flex flex-row items-start h-10 w-full">
            <div className=" p-3 bg-yellow-300 h-full w-10 rounded-lg border-1">
              <img
                src={minus}
                className="no-repeat cover"
                alt="add more items"
              />
            </div>
            <div className="h-full p-2 px-4 w-auto text-xl font-bold font-nunito">
              <span>23</span>
            </div>
            <div className=" p-3 bg-yellow-300 h-full w-10 rounded-lg border-1">
              <img
                src={addSign}
                className="no-repeat cover"
                alt="add more items"
              />
            </div>
          </div>
          <div className="flex flex-row mt-8">
            <div className="mr-4">
              <CustomButton fontSize={"1.2rem"} text="Pay Now" />
            </div>
            <div>
              <CustomButton fontSize={"1.2rem"} text="Add To Cart" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
