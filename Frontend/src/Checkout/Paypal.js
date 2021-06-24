import React, { useRef, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import GooglePayButton from "@google-pay/button-react";
import { useLocation } from "react-router-dom";

//This paypal function has three payment methods 1). paypal payment 2). paypal master card payment 3. google payment method
export default function Paypal() {
  const paypal = useRef();
  const history = useHistory();
  const location = useLocation();
  const total = location.state.total;
  const items = location.state.item;

  function mobilePayments() {
    history.push({
      //If paypal payment success then redirect to the succes page
      pathname: `/mobilepayments`,
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
  }

  useEffect(() => {
    //intrigate paypal
    window.paypal
      .Buttons({
        createOrder: (data, actions, err) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                description: "Cool looking table",
                amount: {
                  currency_code: "USD",
                  value: total,
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          console.log(order);

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
        },
        onError: (err) => {
          console.log(err);
        },
      })
      .render(paypal.current);
  }, []);

  return (
    <div>
      <GooglePayButton />

      <div
        style={{
          float: "left",
          marginLeft: "150px",
          width: "800px",
          height: "auto",
          backgroundColor: "white",
        }}
      >
        <div>
          <table>
            <tbody>
              <tr>
                <td>
                  <div
                    class='title'
                    style={{
                      fontSize: "25px",
                      width: "800px",
                      height: "60px",
                      color: "white",
                    }}
                  >
                    ADDRESS
                  </div>
                  <div style={{ marginLeft: "40px", marginTop: "40px" }}>
                    <h1>{location.state.name}</h1>
                    <p style={{ marginTop: "-10px" }}>{location.state.email}</p>
                    <p style={{ marginTop: "-20px" }}>
                      {location.state.addresss}
                    </p>
                    <p style={{ marginTop: "-20px" }}>{location.state.city}</p>
                    <p style={{ marginTop: "-20px" }}>{location.state.state}</p>
                    <p style={{ marginTop: "-20px" }}>{location.state.zip}</p>
                    <p style={{ marginTop: "-20px" }}>
                      {location.state.phoneNumber}
                    </p>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <ul>
          {items.map((item) => {
            return (
              <table class='table table-hoves'>
                <tbody>
                  <tr>
                    <td>
                      <tr>
                        <td>
                          <img
                            style={{ height: "180px", width: "250px" }}
                            src={`http://localhost:3000/products-images/${item.photo}`}
                          ></img>
                        </td>

                        <td>
                          <div
                            class='gol'
                            style={{
                              marginLeft: "100px",
                              float: "right",
                              width: "300px",
                              height: "250px",
                            }}
                          >
                            <a href=''>
                              <h2
                                style={{ fontSize: "25px", color: "#2f63a3" }}
                              ></h2>
                            </a>
                            <p
                              class='card-text'
                              style={{
                                fontSize: "15px;",
                                fontWeight: "bold",
                                marginTop: "-15px",
                                color: "#8080ff",
                              }}
                            >
                              {item.Brand}
                            </p>
                            <p class='card-text' style={{ fontSize: "15px" }}>
                              {item.Title}
                            </p>
                            <p
                              class='card-text'
                              style={{ fontSize: "15px", marginTop: "-15px" }}
                            >
                              {item.Condition}
                            </p>
                            <p
                              class='card-text'
                              style={{
                                fontSize: "15px;",
                                fontWeight: "bold",
                                marginTop: "-15px",
                              }}
                            >
                              Rs.{item.Price}
                            </p>
                          </div>
                        </td>
                      </tr>
                    </td>
                  </tr>
                </tbody>
              </table>
            );
          })}
        </ul>
      </div>

      <div
        style={{
          float: "right",
          marginRight: "150px",
          width: "350px",
          height: "auto",
          backgroundColor: "white",
        }}
      >
        <div
          style={{
            width: "240px",
            height: "auto",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "80px",
          }}
          ref={paypal}
        >
          <div>
            <div style={{ float: "left" }}>
              <h3>Total Bill :</h3>
            </div>

            <div style={{ float: "left" }}>
              <h4>{total}</h4>
            </div>
          </div>

          <br></br>
          <br></br>
          <button
            onClick={mobilePayments}
            style={{
              backgroundColor: "#00004d",
              color: "white",
              width: "240px",
              height: "38px",
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: "80px",
            }}
          >
            Mobile Payment
          </button>
          <br></br>
          <br></br>

          <GooglePayButton
            environment='TEST'
            paymentRequest={{
              apiVersion: 2,
              apiVersionMinor: 0,
              allowedPaymentMethods: [
                {
                  type: "CARD",
                  parameters: {
                    allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
                    allowedCardNetworks: ["MASTERCARD", "VISA"],
                  },
                  tokenizationSpecification: {
                    type: "PAYMENT_GATEWAY",
                    parameters: {
                      gateway: "example",
                      gatewayMerchantId: "exampleGatewayMerchantId",
                    },
                  },
                },
              ],
              merchantInfo: {
                merchantId: "12345678901234567890",
                merchantName: "Demo Merchant",
              },
              transactionInfo: {
                totalPriceStatus: "FINAL",
                totalPriceLabel: "Total",
                totalPrice: "125.00",
                currencyCode: "USD",
                countryCode: "US",
              },
              shippingAddressRequired: true,
              callbackIntents: ["PAYMENT_AUTHORIZATION"],
            }}
            onLoadPaymentData={(paymentRequest) => {
              console.log("Success", paymentRequest);
            }}
            onPaymentAuthorized={(paymentData) => {
              console.log("payment Authorized success", paymentData);
              history.push({
                //If google payment success then redirect to the succes page
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

              // return {transactionState:'SUCCESS'}
            }}
            existingPaymentMethodRequired='false'
            buttonColor='black'
            buttonType='buy'
          />
        </div>
      </div>
    </div>
  );
}
