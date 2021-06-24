import "./css/checkout.css";
import React, { useEffect, useState } from "react";
import PayPal from "./Paypal";
import GooglePayButton from "./Paypal";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Checkout() {
  const location = useLocation();
  const history = useHistory();
  const [checkout, setCheckOut] = useState(false);

  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [addresss, setaddresssn] = useState("");
  const [city, setcity] = useState("");
  const [state, setstate] = useState("");
  const [zip, setzip] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");

  function Topayment() {
    setCheckOut(true);
    history.push({
      pathname: `/payment`,
      state: {
        checkout: checkout,
        name: name,
        email: email,
        addresss: addresss,
        city: city,
        zip: zip,
        state: state,
        phoneNumber: phoneNumber,
        item: location.state.item,
        total: location.state.total,
      },
    });
  }

  return (
    <div
      className='row'
      style={{ width: "1000px", marginLeft: "auto", marginRight: "auto" }}
    >
      <div className='col-75'>
        <div className='containers'>
          <form>
            <div class='row'>
              <div class='col-50'>
                <h3>Billing Address</h3>
                <label for='fname'>
                  <i className='fa fa-user'></i> Full Name
                </label>
                <input
                  type='text'
                  id='fname'
                  name='firstname'
                  placeholder='Full name'
                  onChange={(e) => {
                    setname(e.target.value);
                  }}
                />
                <label for='email'>
                  <i className='fa fa-envelope'></i> Email
                </label>
                <input
                  type='text'
                  id='email'
                  name='email'
                  placeholder='Email address'
                  onChange={(e) => {
                    setemail(e.target.value);
                  }}
                />
                <label for='adr'>
                  <i className='fa fa-address-card-o'></i> Address
                </label>
                <input
                  type='text'
                  id='adr'
                  name='address'
                  placeholder='Address'
                  onChange={(e) => {
                    setaddresssn(e.target.value);
                  }}
                />
                <label for='city'>
                  <i className='fa fa-institution'></i> City
                </label>
                <input
                  type='text'
                  id='city'
                  name='city'
                  placeholder='City'
                  onChange={(e) => {
                    setcity(e.target.value);
                  }}
                />
                <div class='row'>
                  <div class='col-50'>
                    <label for='state'>State</label>
                    <input
                      type='text'
                      id='state'
                      name='state'
                      placeholder='State'
                      onChange={(e) => {
                        setstate(e.target.value);
                      }}
                    />
                  </div>
                  <div class='col-50'>
                    <label for='zip'>Zip</label>
                    <input
                      type='text'
                      id='zip'
                      name='zip'
                      placeholder='Zip code'
                      onChange={(e) => {
                        setzip(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <label for='phone'>
                  <i className='fa fa-institution'></i> Phone number
                </label>
                <input
                  type='text'
                  id='city'
                  name='phone'
                  placeholder='Phone number'
                  onChange={(e) => {
                    setphoneNumber(e.target.value);
                  }}
                />
              </div>
            </div>
            <label>
              <input type='checkbox' checked='checked' name='sameadr' />{" "}
              Shipping address same as billing
            </label>
            <input
              type='button'
              value='Continue to checkout'
              onClick={Topayment}
              class='btn'
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
