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
                  backgroundColor: "#ffffff",
                  float: "left",
                  marginLeft: "115px",
                  marginTop: "50px",
                  boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
                }}
              >
                <tbody >
                  <tr>
                    <td>
                      <a style={{ float: "left", marginLeft:"25px"}} href=''>
                        {" "}
                        <img
                          style={{ height: "380px", width: "380px" }}
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
                            fontFamily: "Arial",
                            marginTop: " -15px",
                          }}
                        >
                          {item.Title}
                        </p>
                        <p
                          class='card-text'
                          style={{
                            fontSize: "20px",
                            fontWeight: "bold",
                            fontFamily: "Arial",
                            marginTop: " -15px",
                          }}
                        >
                          {item.Brand}
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
                          className="btn btn-danger"
                          style={{ width:"150px" }}
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
