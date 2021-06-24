import React, { useRef, useEffect } from "react";
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

  const details = {
    name: name,
    email: email,
    Total: Total,
  };

  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_byyjoo7",
        "template_fqshe5e",
        e.target,
        "user_iAetIx0G1KyiQJTlOpDpj"
      )
      .then(
        (result) => {
          history.push("/");
        },
        (error) => {
          console.log(error.text);
        }
      );
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
      </div>
    </center>
  );
}
