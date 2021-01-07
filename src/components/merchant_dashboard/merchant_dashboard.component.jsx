import React, { useContext, useEffect, useState } from "react";
import CustomButton from "../global_components/button.component";
import MerchantDetail from "../global_components/merchant_detail.component";
import MerchantEditProduct from "./merchant_edit_product.component";
import RiderDetail from "../global_components/rider_detail.component";
import Transaction from "../global_components/transaction.component";
import UserHeader from "../global_components/user_header.component";
import { useHistory } from "react-router-dom";
import UserContext from "../../context/user.context";
import axios from "axios";
import { apiUrl } from "../../configParams";

export default function MerchantDashboard(props) {
  const history = useHistory();
  const [state, dispatch] = useContext(UserContext);
  const [userDetails, setUserDetails] = useState({});
  const [allRiders, setAllRiders] = useState([]);
  const [rider, setRider] = useState({});
  const [products, setProducts] = useState([]);

  const userToken = state.token;
  const merchantId = state.id;

  useEffect(() => {
    (async function getUserDet() {
      await getUserDetails();
    })();
  }, []);

  useEffect(() => {
    (async function getRiders() {
      await getAllRiders();
    })();
    (async function getMerchRider() {
      await getMerchantRider();
    })();
    (async function getProds() {
      await getAllProducts();
    })();
  }, []);

  const getUserDetails = async () => {
    try {
      const response = await axios.get(apiUrl + "users/" + merchantId, {
        headers: {
          Authorization: "Bearer " + userToken,
        },
      });
      console.log(response.data.data.user);
      setUserDetails(response.data.data.user);
    } catch (err) {
      console.log(err);
      //open modal here
    }
  };

  const getAllRiders = async () => {
    try {
      const response = await axios.get(apiUrl + "users/dispatch-riders", {
        headers: {
          Authorization: "Bearer " + userToken,
        },
      });
      console.log(response.data.data);
      setAllRiders(response.data.data.riders);
    } catch (err) {
      console.log(err);
      //open modal here
    }
  };

  const getMerchantRider = async () => {
    try {
      const response = await axios.get(
        apiUrl + "merchant-dispatcher/dispatchers/" + merchantId,
        {
          headers: {
            Authorization: "Bearer " + userToken,
          },
        }
      );
      console.log(response.data.data);
      setRider(response.data.data.dispatchers);
    } catch (err) {
      console.log(err);
      //open modal here
    }
  };

  const getAllProducts = async () => {
    try {
      const response = await axios.get(apiUrl + "products/merchant", {
        headers: {
          Authorization: "Bearer " + userToken,
        },
      });
      console.log(response.data.data);
      setProducts(response.data.data.products);
    } catch (err) {
      console.log(err);
      //open modal here
    }
  };

  const getAllTransaction = () => {};
  return (
    <div className="max-w-full w-full my-2 px-8">
      <div className="w-full h-full ">
        <div className="flex flex-row justify-between items-center mb-3">
          <UserHeader userType="merchant" riders={allRiders} />
        </div>
        <div className="w-full grid grid-flow-row gap-5 grid-cols-body">
          <div className="">
            <div className="w-full rounded-3xl bg-yellow-100 shadow-around px-6 py-6">
              <MerchantDetail
                merchantDetails={userDetails}
                userType="merchant"
              />
              <br></br>
              <RiderDetail userType="merchant" riderDetails={rider} />
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
                  <p
                    onClick={() => {
                      history.push(history.location.pathname + "/product");
                    }}
                    className="py-2 px-6 rounded-xl cursor-pointer text-md font-nunito text-yellow-50 bg-yellow-500 font-bold shadow-md"
                  >
                    Add New Product
                  </p>
                </div>
                <div className="w-full h-80 py-4-400 flex flex-row py-3 overflow-x-scroll">
                  {products.length === 0 ? (
                    <div className="w-3/5 h-full font-nunito m-auto font-bold text-lg  text-center flex flex-row justify-center items-center">
                      <h2 className="p-8 rounded-xl bg-yellow-100">
                        No products attached to your account. Add new products
                      </h2>
                    </div>
                  ) : (
                    products.map((product) => {
                      return (
                        <MerchantEditProduct
                          key={product.name}
                          product={product}
                        />
                      );
                    })
                  )}
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
