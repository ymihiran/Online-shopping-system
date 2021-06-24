import "./App.css";
import MainHeader from "./Header/MainHeader";
import React, { useState } from "react";
import axios from "axios";
import MainContainer from "./Header/MainContainer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logOut from "./auth/Logout";
import Login from "./auth/Login";
import sellerlogin from "./auth/SellerLogin";
import register from "./auth/Register";
import Sellerregister from "./auth/SellerRegister";
import Items from "./Components/items";
import checkout from "./Checkout/checkout";
import itemDetails from "./admin/itemDetails";
import OrderSuccess from "./Checkout/OrderSuccess";
import payment from "./Checkout/Paypal";
import ViewOrders from "./admin/Orders/ViewOrders";
import mobilepayments from "./Checkout/mobilePayment";
axios.defaults.withCredentials = true;

function App() {
  return (
    <div>
      <Router>
        <MainHeader />
        <Switch>
          <Route exact path='/' component={MainContainer} />
          <Route exact path='/categories' component={MainContainer} />
          <Route exact path='/cart' component={MainContainer} />
          <Route exact path='/category_view' component={MainContainer} />
          <Route exact path='/itemview/:name' component={MainContainer} />
          <Route exact path='/search_results' component={MainContainer} />
          <Route exact path='/category_view' component={MainContainer} />
          <Route exact path='/itemview/:name' component={MainContainer} />
          <Route exact path='/search_results' component={MainContainer} />
          <Route exact path='/checkout' component={MainContainer} />
          <Route exact path='/logOut' component={logOut} />
          <Route exact path='/OrderSuccess' component={MainContainer} />
          <Route exact path='/Login' component={Login} />
          <Route exact path='/sellerlogin' component={sellerlogin} />
          <Route exact path='/register' component={register} />
          <Route exact path='/Sellerregister' component={Sellerregister} />
          <Route exact path='/payment' component={MainContainer} />
          <Route exact path='/mobilepayments' component={MainContainer} />
          <Route exact path='/dashboard' component={MainContainer} />
          <Route exact path='/ViewOrders/:id' component={MainContainer} />
          <Route exact path='/create_products' component={MainContainer} />
          <Route exact path='/edit/:id' component={MainContainer} />
          <Route exact path='/listing' component={MainContainer} />
          <Route exact path='/newOrders' component={MainContainer} />
          <Route exact path='/delivered' component={MainContainer} />
          <Route exact path='/itemDetails' component={itemDetails} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
