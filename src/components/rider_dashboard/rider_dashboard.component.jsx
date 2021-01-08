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

export default function RiderDashboard(props) {
  const history = useHistory();
  const [state, dispatch] = useContext(UserContext);
  const [userDetails, setUserDetails] = useState({});
  const [merchants, setMerchants] = useState([]);
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
  const riderId = state.id;

  useEffect(() => {
    (async function getRiderDet() {
      await getRiderInfo();
    })();
  }, []);

  useEffect(() => {
    (async function getAllMerchants() {
      await getMerchants();
    })();
  }, []);

  const getRiderInfo = async () => {
    try {
      const response = await axios.get(apiUrl + "users/" + riderId, {
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

  const getMerchants = async () => {
    try {
      const response = await axios.get(
        apiUrl + "merchant-dispatcher/merchants/" + riderId,
        {
          headers: {
            Authorization: "Bearer " + userToken,
          },
        }
      );
      console.log(response.data.data, "this is the response");
      setMerchants(response.data.data.merchants);
    } catch (err) {
      console.log(err);
      //open modal here
      handleShowModal("Error", "Failed to load Resource");
    }
  };

  const getAllTransaction = () => {};
  // return <div>This is inside here</div>;
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
            userType="dispatch_rider"
            riders={[]}
            addMerchantToRider={null}
            merchantId={null}
          />
        </div>
        <div className="w-full grid grid-flow-row gap-5 grid-cols-body">
          <div className="">
            <div className="w-full rounded-3xl bg-yellow-100 shadow-around px-6 py-6">
              <RiderDetail
                userType="dispatch_rider"
                riderDetails={userDetails}
              />
              <br></br>
              <MerchantList merchants={merchants} />
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
