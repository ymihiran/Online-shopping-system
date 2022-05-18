import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";
import axios from "axios";
import "./css/paypal.css";
function Mobilepayment() {
  const history = useHistory();
  const location = useLocation();

  const [name, setName] = useState("");
  const [number, setNumber] = useState(location.state.phoneNumber);
  const [pin, setPin] = useState("");

  const items = location.state.item;
  const email = location.state.email;
  const addresss = location.state.addresss;
  const city = location.state.city;
  const zip = location.state.zip;
  const state = location.state.state;
  const Total = location.state.total;

  const Vonage = require('@vonage/server-sdk')

      const vonage = new Vonage({
        apiKey: "db4f0bee",
        apiSecret: "8Ye8AvCAhYKBOrjD"
    })



  function sendOTP() {

    
    const from = "Vonage APIs"
    const to = "94770025079"
    const text = 'A text message sent using the Vonage SMS API'

    alert("In function");

    vonage.message.sendSms(from, to, text, (err, responseData) => {
        if (err) {
            console.log(err);
        } else {
            if(responseData.messages[0]['status'] === "0") {
                alert("Message sent successfully.");
            } else {
                alert(`Message failed with error: ${responseData.messages[0]['error-text']}`);
            }
        }
    })
  }

  function doPayment() {
    const mobileData = {
      name: name,
      number: number,
      pin: pin,
    };

    //axios.post("http://localhost:8070/service/PaymentService/payment/add",mobileData).then((response) =>{

    axios
      .post(
        "http://localhost:8070/service/PaymentService/payment/add",
        mobileData
      )
      .then((response) => {
        history.push({
          //If paypal payment success then redirect to the succes page
          pathname: `/OrderSuccess`,
          state: {
            name: location.state.name,
            email: location.state.email,
            addresss: location.state.addresss,
            city: location.state.city,
            zip: location.state.zip,
            state: location.state.state,
            phoneNumber: location.state.phoneNumber,
            total: location.state.total,
            item: items,
          },
        });
      })
      .catch((err) => {
        alert(err);
      });
  }

  return (
    <React.Fragment>
      <div class='wrapper fadeInDown'>
        <div id='formContent'>
          <center>
            <h1>Mobile Payments</h1>
          </center>
          <br />
          <br />
          <input
            type='text'
            className='fadeIn second'
            name='login'
            placeholder='Name'
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <input
            type='text'
            className='fadeIn third'
            name='login'
            placeholder='Mobile number'
            onChange={(e) => {
              setNumber(e.target.value);
            }}
          />
          <input
            type='text'
            className='fadeIn third'
            name='login'
            placeholder='Pin'
            onChange={(e) => {
              setPin(e.target.value);
            }}
          />{" "}

          <br />
          <button
            onClick={sendOTP}
            style={{ width: "400px" }}
            class='btn btn-success'
            value='Log In'
          >
            Request OTP
          </button>

          <br />
          <button
            onClick={doPayment}
            style={{ width: "400px" }}
            class='btn btn-success'
            value='Log In'
          >
            Pay
          </button>
          <br />
          <br />
        </div>
      </div>
    </React.Fragment>
  );
}

export default Mobilepayment;
