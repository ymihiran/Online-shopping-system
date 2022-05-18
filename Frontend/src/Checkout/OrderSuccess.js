import React, { useRef, useEffect, Component } from "react";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";
import axios from "axios";
import emailjs from "emailjs-com";
import Email from "./email";

export default function Success() {
  const location = useLocation();
  const items = location.state.item;
  const name = location.state.name;
  const email = location.state.email;
  const addresss = location.state.addresss;
  const city = location.state.city;
  const zip = location.state.zip;
  const state = location.state.state;
  const phoneNumber = location.state.phoneNumber;
  const Total = location.state.total;
  const history = useHistory();
  const order = items;

  const details = {
    name: name,
    email: email,
    Total: Total,
  };

  function sendEmail(e){
    e.preventDefault();
    alert("Sending..");
    console.log(items);
     
    var templateParams = {
      to_name: 'xyz',
      from_name: 'abc',
      message_html: 'Please Find out the attached file'
    };


    emailjs.sendForm(
      'service_tc03vnm',
      'template_7x8vdag',
        e.currentTarget,
       '-utNmr2eLLLW4jLyR'

    ).then(res=>{
      console.log(res);
      alert("Sent");

    }).catch(err=>console.log(err));


  }


  useEffect(() => {
    items.map((item) => {
      const placeOrder = {
        name,
        email,
        addresss,
        city,
        zip,
        state,
        phoneNumber,
        Total,
        item,
      };

      document.getElementById("subBut").click();

     // order = placeOrder;

      axios
        .post(
          "http://localhost:8070/service/DeliveryService/orders/add",
          placeOrder
        )
        .then((response) => {})
        .catch((err) => {
          alert(err);
        });
    });
  });

  return (
    <center>
      <br></br> <br></br> <br></br> <br></br> <br></br>
      <div
        class='card'
        style={{
          background: "white",
          padding: "100px",
          borderRadius: "4px",
          boxShadow: "0 2px 3px #C8D0D8",
          display: "inline-block",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <div
          style={{
            borderRadius: "200px",
            height: "200px",
            width: "200px",
            background: "#F8FAF5",
            margin: "auto",
          }}
        >
          <i
            style={{
              color: "#9ABC66",
              fontSize: "100px",
              lineHeight: "200px",
              marginLeft: "15px",
            }}
            class='checkmark'
          >
            ✓
          </i>
        </div>

        <h1
          style={{
            color: "#88B04B",
            fontWeight: "900",
            fontSize: "40px",
            marginBottom: "10px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          Success
        </h1>
        <p
          style={{
            color: "#404F5E",
            fontSize: "20px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          We received your purchase request;
          <br /> we'll be in touch shortly!
        </p>
        <Email details={details} sendEmail={sendEmail} />
        <form onSubmit={sendEmail}>
                            <input type="hidden" name="email" value={email} />
                            <input type="hidden" name="from_name" value="Agri Store" />
                            <input type="hidden" name="to_name" value={name}/>
                            <input type="hidden" name="order" value={order}/>
                            <input type="hidden" name="address" value={addresss}/>
                            <input type="hidden" name="phoneNumber" value={phoneNumber}/>
                            <input type="hidden" name="total" value={Total}/>
                            &nbsp; &nbsp;
                            <button hidden id="subBut">Send Email</button></form>

        
      </div>
    </center>
  );
}
