import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import MerchantDetail from "../global_components/merchant_detail.component";
import MerchantEditProduct from "../merchant_dashboard/merchant_edit_product.component";
import RiderDetail from "../global_components/rider_detail.component";
import Transaction from "../global_components/transaction.component";
import UserHeader from "../global_components/user_header.component";
import MerchantList from "../global_components/merchants_list_detail.component";
import Modal from "../global_components/modal.component";
import { apiUrl } from "../../configParams";
import UserContext from "../../context/user.context";
import axios from "axios";
import UserDetails from "./user_detail.component";

export default function UserDashboard(props) {

  const history = useHistory();
  const [state, dispatch] = useContext(UserContext);
  const [userDetails, setUserDetails] = useState({});
  const [cartItems, setCartItems] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({ title: "", message: "" });

  const closeModal = () => {
    setShowModal(false);
  };

  const handleShowModal = (title, message) => {
    setShowModal(true);
    setModalContent({ title: title, message: message });
  };

  const userToken = state.token;
  const userId = state.id;

  useEffect(() => {
    (async function getUserDet() {
      await getUserInfo();
    })();
  }, []);

  useEffect(() => {
    (async function getAllCartItems() {
      await getCartItems();
    })();
  }, []);

  const getUserInfo = async () => {
    try {
      const response = await axios.get(apiUrl + "users/" + userId, {
        headers: {
          Authorization: "Bearer " + userToken,
        },
      });
      console.log(response.data.data.user);
      setUserDetails(response.data.data.user);
    } catch (err) {
      console.log(err);
      handleShowModal("Error", "Failed to load Resource");
    }
  };

  const getCartItems = async () => {
    try {
      const response = await axios.get(
        apiUrl + "cart/",
        {
          headers: {
            Authorization: "Bearer " + userToken,
          },
        }
      );
      console.log(response.data.data, "this is the response");
      setCartItems(response.data.data.items);
    } catch (err) {
      console.log(err);
      //open modal here
      handleShowModal("Error", "Failed to load Resource");
    }
  };


  const deleteCartItem = async (itemId) => {
    try {
      const response = await axios({
        method: "delete",
        headers: {
          Authorization: "Bearer " + userToken,
        },
        url: apiUrl + "cart/" + itemId,
      });
      console.log(response.data);
      if (response.data.status === "success") {
        getCartItems();
        handleShowModal("Success", "Cart Item deleted Successfully");
      }
    } catch (err) {
      console.log(err);
      handleShowModal("Error", "Failed to load Resource");
    }
  };

  return (
    <div className="max-w-full w-full my-2 px-8">
      {showModal && (
        <Modal
          closeModal={() => {
            closeModal();
          }}
          message={modalContent.message}
          title={modalContent.title}
        />
      )}
      <div className="w-full h-full ">
        <div className="flex flex-row justify-between items-center mb-3">
          <UserHeader
            userType="user"
            riders={[]}
            addMerchantToRider={null}
            merchantId={null}
          />
        </div>
        <div className="w-full grid grid-flow-row gap-5 grid-cols-body">
          <div className="">
            <div className="w-full rounded-3xl bg-yellow-100 shadow-around px-6 py-6">
              <UserDetails userDetails={{ username: "test", accountNumber: "test", bankName: "test" }} />
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
              <br />
              <div>
                <h3 className="text-2xl font-nunito font-bold">
                  Your Deliveries:
              </h3>
                <div className="h-10 py-1 px-6 my-1 rounded-2xl overflow-none w-full flex flex-row justify-between items-center font-nunito font-bold font-lg">
                  <p>Image</p>
                  <p>Product Name</p>
                  <p>Quantity</p>
                  <p>Currency</p>
                  <p>Price</p>
                  <p>Delivery fee</p>
                </div>
                <div
                  style={{ height: "400px" }}
                  className="w-full py-4 px-4 overflow-x-auto"
                >
                  <Transaction />
                  <Transaction />
                  <Transaction />
                  <Transaction />
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