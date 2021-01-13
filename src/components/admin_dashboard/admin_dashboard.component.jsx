import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { apiUrl } from "../../configParams";
import UserContext from "../../context/user.context";
import MerchantDetail from "../global_components/merchant_detail.component";
import Modal from "../global_components/modal.component";
import RiderDetail from "../global_components/rider_detail.component";
import Transaction from "../global_components/transaction.component";
import UserHeader from "../global_components/user_header.component";
import AdminTransaction from "./admin_transactions.component";
import MerchantRiderList from "./all_merchants_riders.component";
import MerchantList from "./all_merchants_riders.component";
import MerchantRiderDetail from "./merchant_rider_detail.component";

export default function AdminDashBoard(props) {
  const history = useHistory();
  const [state, dispatch] = useContext(UserContext);
  const [userDetails, setUserDetails] = useState({});
  const [riders, setRiders] = useState([]);
  const [merchants, setMerchants] = useState([]);
  const [orders, setOrders] = useState([]);
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
  const adminId = state.id;

  useEffect(() => {
    (async function getAdminInfo() {
      getUserDetails();
    })();
  }, []);

  useEffect(() => {
    (async function getRiders() {
      getAllRiders();
    })();
  }, []);

  useEffect(() => {
    (async function getMerchants() {
      getAllMerchants();
    })();
  }, []);

  useEffect(() => {
    (async function getUserDet() {
      await getAllOrders();
    })();
  }, []);

  const getUserDetails = async () => {
    try {
      const response = await axios.get(apiUrl + "users/" + adminId, {
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

  const deleteUser = async (userId, userType) => {
    try {
      const response = await axios({
        method: "delete",
        headers: {
          Authorization: "Bearer " + userToken,
        },
        url: apiUrl + "users/" + userId,
      });
      console.log(response.data.data);
      if (response.data.status === "success") {
        if (userType === "merchant") getAllMerchants();
        else getAllRiders();
        handleShowModal("Success", "Deleted Successfully");
      }
    } catch (err) {
      console.log(err);
      handleShowModal("Error", "Failed to load Resource");
    }
  };

  const getAllMerchants = async () => {
    try {
      const response = await axios.get(apiUrl + "users/merchants", {
        headers: {
          Authorization: "Bearer " + userToken,
        },
      });
      console.log(response.data.data.merchants, "the mrecants");
      setMerchants(response.data.data.merchants);
    } catch (err) {
      console.log(err);
      handleShowModal("Error", "Failed to load Resource");
    }
  };

  const getAllRiders = async () => {
    try {
      const response = await axios.get(apiUrl + "users/dispatch-riders", {
        headers: {
          Authorization: "Bearer " + userToken,
        },
      });
      console.log(response.data.data.riders, "the riders");
      setRiders(response.data.data.riders);
    } catch (err) {
      console.log(err);
      handleShowModal("Error", "Failed to load Resource");
    }
  };

  const getAllOrders = async () => {
    try {
      const response = await axios.get(apiUrl + "orders/", {
        headers: {
          Authorization: "Bearer " + userToken,
        },
      });
      console.log(
        response.data.data.orders,
        "the orderssssssssssssssssssssssssssss"
      );
      setOrders(response.data.data.orders);
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
          <UserHeader userType="admin" />
        </div>
        <div className="w-full grid grid-flow-row gap-5 grid-cols-body">
          <div className="">
            <div className="w-full rounded-3xl bg-yellow-100 shadow-around px-6 py-6">
              <MerchantRiderList
                title={"All Merchants"}
                userType="Merchant"
                users={merchants}
                delete={deleteUser}
                view={null}
              />
              <br></br>
              <MerchantRiderList
                title={"All Riders"}
                userType="Rider"
                users={riders}
                delete={deleteUser}
                view={null}
              />
            </div>
          </div>
          <div className="max-w-full min-w-0">
            <div className="w-full p-6 rounded-3xl shadow-around">
              <div className="flex flex-row justify-between items-center w-full mb-4">
                <h3 className="text-2xl font-nunito font-bold">
                  Jumga Total Commission Earned:
                </h3>
                <div className="h-14 py-4">
                  <p className="font-nunito font-extrabold text-xl text-yellow-500">
                    Earned: <span>NGN 100.00</span>
                  </p>
                </div>
              </div>
              <MerchantRiderDetail />
              <br />
              <div>
                <h3 className="text-2xl font-nunito font-bold">
                  All transactions:
                </h3>
                <div className="h-10 py-1 px-10 my-1 rounded-2xl overflow-none w-full flex flex-row justify-between items-center font-nunito font-bold font-lg">
                  <p>Image</p>
                  <p>Product Name</p>
                  <p>Merchant</p>
                  <p>Rider</p>
                  <p>Price</p>
                  <p>Merchant fee</p>
                  <p>Rider fee</p>
                  <p>Jumga fee(M)</p>
                  <p>Jumga fee(D)</p>
                </div>
                <div className="w-full h-96 py-4 px-4 overflow-x-auto">
                  {orders.map((order) => {
                    return (
                      <AdminTransaction
                        key={order._id}
                        imageLink={order.productImageLink}
                        name={order.productName}
                        merchantName={order.merchantName}
                        dispatchName={order.dispatchName}
                        currency={order.currencyCode}
                        merchantCut={order.merchantCut}
                        dispatchCut={order.dispatchCut}
                        jumgaProductCut={order.jumgaProductCut}
                        jumgaDeliveryCut={order.jumgaDeliveryCut}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
