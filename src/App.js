import './App.css';
import { Route, Switch, Redirect } from "react-router-dom"
import { UserContext, UserProvider } from "./context/user.context"
import Home from './components/home/home.component';
import Header from './components/header/header.component';
import SignUpComponent from './components/login_signup/sign_up.component';
import LoginComponent from './components/login_signup/login.component';
import Product from './components/product/product.component';
import ProductEditCreate from './components/product_edit/edit_create_product.component';
import MerchantDashboard from './components/merchant_dashboard/merchant_dashboard.component';
import RiderDashboard from '../src/components/rider_dashboard/rider_dashboard.component';
import AdminDashBoard from './components/admin_dashboard/admin_dashboard.component';
import { useReducer } from 'react';

function App() {
  const saveToLocalStorage = (payload) => {
    window.localStorage.setItem("token", payload.data.token);
    window.localStorage.setItem("username", payload.data.username);
    window.localStorage.setItem("accountType", payload.data.accountType);
  };

  const removeFromLocalStorage = (payload) => {
    window.localStorage.removeItem("token", payload.data.token);
    window.localStorage.removeItem("username", payload.data.username);
    window.localStorage.removeItem("accountType", payload.data.accountType);
  };

  let initialState = {
    token: window.localStorage.getItem("token"),
    username: window.localStorage.getItem("username"),
    accountType: window.localStorage.getItem("accountType")
  };

  const reducer = (state = initialState, action) => {
    console.log(action.payload);
    switch (action.type) {
      case "LOGIN":
        saveToLocalStorage(action.payload);
        return {
          ...state,
          token: action.payload.data.token,
          username: action.payload.data.username,
          accountType: action.payload.data.accountType,
        }
      case "LOGOUT":
        removeFromLocalStorage(action.payload);
        return {
          ...state,
          token: null,
          username: null,
          accountType: null,
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
          {/* <Home /> */}
          {/* <SignUpComponent /> */}
          {/* <LoginComponent/> */}
          {/* <Product /> */}
          {/* <ProductEditCreate/> */}
          {/* <MerchantDashboard /> */}
          {/* <RiderDashboard /> */}
          {/* <AdminDashBoard /> */}
        </Switch>
      </div>
    </UserProvider >
  );
}

export default App;


function PrivateRoute(props) {
  const { component: Component, fallbackPath, ...rest } = { ...props }
  let loggedIn = (window.localStorage.getItem("logged_in")) === 'true'
  return (
    <Route {...rest} render=
      {(props) => loggedIn ? <Component {...props} /> : <Redirect to={fallbackPath} {...props} />}>
    </Route>
  )
}


function PublicRoute(props) {
  const { component: Component, restricted, fallbackPath, ...rest } = { ...props }
  let loggedIn = (window.localStorage.getItem("logged_in")) === 'true'
  return (
    <Route {...rest} render=
      {(props) =>
        loggedIn && restricted ? <Redirect to={fallbackPath} {...props} /> : <Component  {...props} />} >
    </Route>
  )
}