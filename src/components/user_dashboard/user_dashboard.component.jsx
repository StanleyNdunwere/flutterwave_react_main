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

export default function UserDashboard(props) {

  return (
    <div>
      This is the user component
    </div>
  )
}