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
import CartItem from "./cart_item.component";

export default function GuestDashboard(props) {

  const history = useHistory();
  const [cartItems, setCartItems] = useState([]);
  const [userDetails, setUserDetails] = useState({ username: "Guest", accountNumber: "N/A", bankName: "N/A" });
  const [currentPage, setCurrentPage] = useState("cart")
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({ title: "", message: "" });
  const [selectedCartItems, setSelectedCartItems] = useState([])
  const [guestName, setGuestName] = useState("");
  const closeModal = () => {
    setShowModal(false);
  };

  const handleShowModal = (title, message) => {
    setShowModal(true);
    setModalContent({ title: title, message: message });
  };

  useEffect(() => {
    (async function loadCartItems() {
      getCartItems()
    })()
  }, [])
  const getCartItems = async () => {
    let items = JSON.parse(window.localStorage.getItem("cartItems"))
    items = items == null ? [] : items;
    setCartItems([...items])

  };


  const deleteCartItem = (itemId) => {
    let items = JSON.parse(window.localStorage.getItem("cartItems"))
    items = items == null ? [] : items;
    let newItems = items.filter((item) => {
      return item._id != itemId
    })
    window.localStorage.setItem("cartItems", JSON.stringify(newItems))
    setCartItems([...newItems])
  };


  const getItemsToOrder = (selectedOnly) => {
    if (selectedOnly) {
      if (selectedCartItems.length == 0) {
        handleShowModal("Cannot Proceed", "Please select a few items to proceed")
        return []
      } else {
        return selectedCartItems.map((item) => {
          console.log(item, "the items");
          console.log(item.quantity);
          return { cartId: item.itemId, productId: item.productId, quantity: item.quantity }
        })
      }
    } else {
      if (cartItems.length == 0) {
        handleShowModal("Cannot Proceed", "You don't have items in your cart")
        return []
      } else {
        return cartItems.map((item) => {
          console.log(item);
          console.log(item.itemQuantity);
          return { cartId: item._id, productId: item.productId, quantity: item.itemQuantity }
        })
      }
    }
  }

  const processMultiplePayments = async (selected) => {
    const connectUrl = apiUrl + "orders/guest/multiple"
    const itemsToOrder = getItemsToOrder(selected)
    try {
      const response = await axios({
        method: "post",
        data: { productIdsAndQuantities: itemsToOrder },
        headers: {
          Authorization: "Bearer ",
        },
        url: connectUrl,
      });
      if (response.data.status === "Failed") {
        handleShowModal("Failed", "Unable to place your order",);
      }
      console.log(response.data);
      handleShowModal("Success", "Order placed successfully and charge completed. Your delivery should begin soonest")
    } catch (err) {
      console.log(err);
      handleShowModal("Failed", "We are having trouble placing your order",);
    }
  }

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
              <UserDetails userDetails={userDetails} />
            </div>
          </div>
          <div className="max-w-full min-w-0">
            <div className="w-full p-6 rounded-3xl shadow-around">
              <br />
              <div>
                <div className="flex flex-row w-2/5 items-center py-4">
                  <p className="font-nunito text-xl pb-2 mr-3 font-bold py-0 text-yellow-600">Name:</p>
                  <input
                    onChange={(e) => {
                      setGuestName(e.target.value)
                    }}
                    required
                    name="name"
                    type="text"
                    className="outline-none w-full bg-transparent border-b-2 border-gray-600 mb-3 rounded-sm font-nunito font-lg h-8 text-decoration-none"
                  />
                </div>
                <div className="flex flex-row justify-between items-center">

                  <h3 className="text-2xl font-nunito font-bold">
                    Your Cart Items:
                  </h3>

                  <div className="flex flex-row items-center">
                    <p onClick={() => {
                      if (guestName == null || guestName == "") {
                        handleShowModal("Cannot Proceed", "Please Input A guest Name")
                      } else {
                        processMultiplePayments(false)
                      }
                    }}
                      className="font-nunito mr-4 font-bold px-2 py-2 bg-green-500 cursor-pointer rounded-xl shadow-around text-green-50 hover:bg-green-600">
                      Buy All Items
                   </p>
                    <p onClick={() => {
                      processMultiplePayments(true)

                    }}
                      className="font-nunito mr-4  font-bold px-2 py-2 bg-yellow-500 cursor-pointer rounded-xl shadow-around text-green-50 hover:bg-green-600">
                      Buy Selected Items
                   </p>
                  </div>
                </div>

                <div className="h-10 py-1 px-8 my-1 rounded-2xl overflow-none w-full flex flex-row justify-between items-center font-nunito font-bold font-lg">
                  <p>Image</p>
                  <p>Product Name</p>
                  <p>Quantity</p>
                  <p>Currency</p>
                  <p>Price</p>
                  <p>Delivery fee</p>
                  <p>Remove</p>
                  <p>Select</p>
                </div>
                <div
                  style={{ height: "400px" }}
                  className="w-full py-4 px-4 overflow-x-auto"
                >
                  {cartItems.map((item) => {
                    return <CartItem
                      key={item._id}
                      setSelectedCartItems={setSelectedCartItems}
                      selectedCartItems={selectedCartItems}
                      delete={deleteCartItem}
                      item={item}
                    />
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );

}