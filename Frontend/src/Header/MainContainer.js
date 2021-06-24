import React, { useState } from "react";
import edit from "../admin/EditListing";
import listing from "../admin/ActiveListing";
import Dashboard from "../admin/Dashboard";
import register from "../auth/Register";
import login from "../auth/Login";
import logOut from "../auth/Logout";
import newOrders from "../admin/Orders/NewOrders";
import delivered from "../admin/Orders/DeliveredOrders";
import Create_listing from "../admin/Create_listing";
import Header from "../admin/nav-bar-admin";
import { Switch } from "react-router-dom";
import Items from "../Components/items";
import Nav from "../Components/Nav";
import Categories from "../Components/Categories";
import Cart from "../Components/Cart";
import items from "../Components/items";
import ItemView from "../Components/ItemView";
import CategoryView from "../Components/CategoryView";
import Results from "../Components/Results";
import { BrowserRouter as Router, Route } from "react-router-dom";
import checkout from "../Checkout/checkout";
import OrderSuccess from "../Checkout/OrderSuccess";
import ViewOrders from "../admin/Orders/ViewOrders";
import payment from "../Checkout/Paypal";
import main from "../Components/main";
import mobilePayment from "../Checkout/mobilePayment";

function MainContainer(props) {
  if (localStorage.getItem("type") == "seller") {
    return (
      <Router>
        <div>
          <Header />
          <Route path='/dashboard' exact component={Dashboard} />
          <Route path='/create_products' exact component={Create_listing} />
          <Route path='/edit/:id' exact component={edit} />
          <Route path='/logOut' exact component={logOut} />
          <Route path='/listing' exact component={listing} />
          <Route path='/login' exact component={login} />
          <Route path='/newOrders' exact component={newOrders} />
          <Route path='/delivered' exact component={delivered} />
          <Route path='/register' exact component={register} />
          <Route path='/ViewOrders/:id' exact component={ViewOrders} />
        </div>
      </Router>
    );
  } else {
    console.log(localStorage.getItem("type"));
    return (
      <Router>
        <div>
          <Nav />
          <main>
            <Switch>
              <Route exact path='/' component={main} />
              <Route path='/categories' component={Categories} />
              <Route path='/cart' component={Cart} />
              <Route path='/category_view' component={CategoryView} />
              <Route path='/itemview/:name' component={ItemView} />
              <Route path='/search_results' component={Results} />
              <Route path='/logOut' exact component={logOut} />
              <Route path='/register' exact component={register} />
              <Route path='/login' exact component={login} />
              <Route exact path='/checkout' component={checkout} />
              <Route exact path='/OrderSuccess' component={OrderSuccess} />
              <Route exact path='/payment' component={payment} />

              <Route exact path='/mobilepayments' component={mobilePayment} />
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}

export default MainContainer;
