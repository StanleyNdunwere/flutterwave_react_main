import './App.css';
import { Route, Switch, Redirect } from "react-router-dom"
import Home from './components/home/home.component';
import Header from './components/header/header.component';
import SignUpComponent from './components/login_signup/sign_up.component';
import LoginComponent from './components/login_signup/login.component';
import Product from './components/product/product.component';
import ProductEditCreate from './components/product_edit/edit_create_product.component';
import MerchantDashboard from './components/merchant_dashboard/merchant_dashboard.component';
import RiderDashboard from './rider_dashboard/rider_dashboard.component';
import AdminDashBoard from './components/admin_dashboard/admin_dashboard.component';

function App() {
  return (
    <div className="max-w-screen-2x w-screen-2xl mx-auto">
      <Header />
      <Switch>
        {/* <Home /> */}
        {/* <SignUpComponent /> */}
        {/* <LoginComponent/> */}
        {/* <Product /> */}
        {/* <ProductEditCreate/> */}
        {/* <MerchantDashboard /> */}
        {/* <RiderDashboard /> */}
        <AdminDashBoard />
      </Switch>
    </div>
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