import React, { useState } from "react";

function CartContainer(props) {
  if (props.cartItems.length > 0) {
    return (
      <div>
        <ul>
          {props.cartItems.map((item) => {
            return (
              <table
                class='table table-hoves'
                id='table'
                style={{
                  width: "900px",
                  backgroundColor: "#f2f2f2",
                  float: "left",
                  marginLeft: "115px",
                  marginTop: "50px",
                }}
              >
                <tbody>
                  <tr>
                    <td>
                      <a style={{ float: "left" }} href=''>
                        {" "}
                        <img
                          style={{ height: "380px", width: "450px" }}
                          src={`http://localhost:3000/products-images/${item.photo}`}
                          alt=''
                        />
                      </a>
                      <td
                        style={{
                          width: "455px",
                          backgroundColor: "white",
                          height: "380px",
                        }}
                      >
                        <br />
                        <br />
                        <p
                          class='card-text'
                          style={{
                            fontSize: "20px",
                            color: "#8080ff",
                            fontWeight: "bold",
                            fontFamily: "Times New Roman",
                            marginTop: " -15px",
                          }}
                        >
                          {item.Brand}
                        </p>
                        <p
                          class='card-text'
                          style={{
                            fontSize: "20px",
                            fontWeight: "bold",
                            fontFamily: "Times New Roman",
                            marginTop: " -15px",
                          }}
                        >
                          {item.Title}
                        </p>
                        <p>
                          Price:{" "}
                          <span style={{ color: "red" }}> {item.Price}</span>
                        </p>
                        <button
                          onClick={props.increamentQty.bind(this, item)}
                          style={{
                            float: "left",
                            marginRight: "20px",
                            border: "2px solid #4caf50",
                            width: "50px",
                          }}
                        >
                          +
                        </button>
                        <span>{item.Quantity}</span>
                        <button
                          onClick={props.decreamentQty.bind(this, item)}
                          style={{
                            marginLeft: "20px",
                            border: "2px solid #4caf50",
                            width: "50px",
                          }}
                        >
                          -
                        </button>
                        <br />
                        <br />{" "}
                        <button
                          style={{ fontWeight: "bold" }}
                          onClick={props.RemoveFromCart.bind(this, item)}
                        >
                          Remove
                        </button>
                        <td></td>
                      </td>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p
                        class='card-text'
                        style={{
                          fontSize: "15px",
                          fontFamily: "Times New Roman",
                          marginTop: " -15px",
                          marginLeft: "80px",
                        }}
                      ></p>
                    </td>
                  </tr>
                </tbody>
              </table>
            );
          })}
        </ul>
      </div>
    );
  } else {
    return <p style={{ color: "blue" }}>Shopping Cart Is Empty</p>;
  }
}

export default CartContainer;
