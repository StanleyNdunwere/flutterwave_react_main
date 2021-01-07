import './App.css';
import { Route, Switch, Redirect } from "react-router-dom"
import { UserProvider } from "./context/user.context"
import UserContext from './context/user.context'
import Home from './components/home/home.component';
import Header from './components/header/header.component';
import SignUpComponent from './components/login_signup/sign_up.component';
import LoginComponent from './components/login_signup/login.component';
import Product from './components/product/product.component';
import ProductEditCreate from './components/product_edit/edit_create_product.component';
import MerchantDashboard from './components/merchant_dashboard/merchant_dashboard.component';
import RiderDashboard from '../src/components/rider_dashboard/rider_dashboard.component';
import AdminDashBoard from './components/admin_dashboard/admin_dashboard.component';
import { useContext, useReducer } from 'react';
import AdminTransaction from './components/admin_dashboard/admin_transactions.component';

function App() {
  const saveToLocalStorage = (payload) => {
    window.localStorage.setItem("token", payload.data.token);
    window.localStorage.setItem("username", payload.data.username);
    window.localStorage.setItem("accountType", payload.data.accountType);
    window.localStorage.setItem("id", payload.data.id);
  };

  const removeFromLocalStorage = () => {
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("username");
    window.localStorage.removeItem("accountType");
    window.localStorage.removeItem("id");
  };

  let initialState = {
    token: window.localStorage.getItem("token"),
    username: window.localStorage.getItem("username"),
    accountType: window.localStorage.getItem("accountType"),
    id: window.localStorage.getItem("id"),
    loggedIn: false
  };

  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case "LOGIN":
        saveToLocalStorage(action.payload);
        console.log(action.payload)
        return {
          ...state,
          token: action.payload.data.token,
          username: action.payload.data.username,
          accountType: action.payload.data.accountType,
          id: action.payload.data.id,
          loggedIn: true
        }
      case "LOGOUT":
        removeFromLocalStorage();
        return {
          ...state,
          token: null,
          username: null,
          accountType: null,
          id: null,
          loggedIn: false,
        }
      default:
        return state;
    }
  }
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <UserProvider value={[state, dispatch]} >
      <div className="max-w-screen-2x w-screen-2xl mx-auto">
        <Header />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path="/sign-up" exact component={SignUpComponent} />
          <Route path="/login" exact component={LoginComponent} />
          {/* <Route path="/admin" exact component={AdminDashBoard} /> */}
          <PrivateRoute component={AdminDashBoard} exact path="/admin" userType="/admin" userState={state} />
          <PrivateRoute component={MerchantDashboard} exact path="/merchant" userType="/merchant" userState={state} />
          <PrivateRoute component={MerchantDashboard} exact path="/dispatch" userType="/dispatch_rider" userState={state} />
          <PrivateRoute component={ProductEditCreate} exact path="/merchant/product" userType="/merchant" userState={state} />
          <PrivateRoute component={Product} exact path="/merchant/product/:id" userType="/merchant" userState={state} />

          {/* <Product /> */}
          {/* <ProductEditCreate/> */}
          {/* <MerchantDashboard /> */}
          {/* <RiderDashboard /> */}
        </Switch>
      </div>
    </UserProvider >
  );
}

export default App;


export function PrivateRoute(props) {
  const { component: Component, ...rest } = { ...props }
  const loggedIn = props.userState.token !== null || props.userState.token !== undefined;
  let fallbackPath = "/";
  if (loggedIn) {
    switch (props.userState.accountType) {
      case "admin":
        fallbackPath = "/admin";
        break;
      case "dispatch_rider":
        fallbackPath = "/dispatch";
        break;
      case "merchant":
        fallbackPath = "/merchant";
        break;
      default:
        fallbackPath = "/";
        break;
    }
  }
  return (
    <Route {...rest} render=
      {(newProps) =>
        (loggedIn && `/${props.userState.accountType}` === props.userType)
          ? <Component {...props} />
          : <Redirect to={fallbackPath} {...props} />}>
    </Route>
  )
}



export function PublicRoute(props) {
  const { component: Component, restricted, fallbackPath, ...rest } = { ...props }
  let loggedIn = (window.localStorage.getItem("logged_in")) === 'true'
  return (
    <Route {...rest} render=
      {(props) =>
        loggedIn && restricted ? <Redirect to={fallbackPath} {...props} /> : <Component  {...props} />} >
    </Route>
  )
}