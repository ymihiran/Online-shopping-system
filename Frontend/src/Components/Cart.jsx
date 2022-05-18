import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import CartContainer from "./CartContainer";

class Cart extends Component {
  state = {
    cartItems: [],
  };

  componentDidMount() {
    axios.get(`http://localhost:8070/service/ShopService/cart`).then((res) => {
      this.setState({ cartItems: res.data });
    });
  }

  componentDidUpdate() {
    axios.get(`http://localhost:8070/service/ShopService/cart`).then((res) => {
      this.setState({ cartItems: res.data });
    });
  }

  RemoveFromCart(item) {
    axios
      .delete(`http://localhost:8070/service/ShopService/cart/${item._id}`)
      .then((res) => {
        alert("Item Removed");
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  increamentQty(item) {
    const newCartitem = {
      qty: parseInt(item.Quantity) + 1,
    };
    axios
      .patch(
        `http://localhost:8070/service/ShopService/cart/${item._id}`,
        newCartitem
      )
      .then((res) => {
        console.log(res);
      });
  }

  decreamentQty(item) {
    if (item.Quantity > 1) {
      const newCartitem = {
        qty: parseInt(item.Quantity) - 1,
      };
      axios
        .patch(
          `http://localhost:8070/service/ShopService/cart/${item._id}`,
          newCartitem
        )
        .then((res) => {
          console.log(res);
        });
    }
  }

  getTotalPrice() {
    let sum = 0;
    this.state.cartItems.map((item) => {
      sum = sum + parseFloat(item.Price) * parseFloat(item.Quantity);
    });
    return sum;
  }

  render() {
    if (this.state.cartItems.length == 0) {
      return (
        <div>
          <table class='table'>
            <tbody>
              <tr>
                <th scope='row'></th>
                <td>
                  <CartContainer
                    decreamentQty={this.decreamentQty}
                    increamentQty={this.increamentQty}
                    RemoveFromCart={this.RemoveFromCart}
                    cartItems={this.state.cartItems}
                    total={this.getTotalPrice()}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      );
    } else {
      if (!localStorage.getItem("user"))
        return (
          <div
            class='alert alert-danger'
            style={{ width: "800px", marginLeft: "auto", marginRight: "auto" }}
          >
            <strong>Warnning!.....</strong> Please login to the system{" "}
            <a href='/login'>Navigate</a>
          </div>
        );
      return (
        <div>
          <table class='table'>
            <tbody>
              <tr>
                <th scope='row'></th>
                <td>
                  <CartContainer
                    decreamentQty={this.decreamentQty}
                    increamentQty={this.increamentQty}
                    RemoveFromCart={this.RemoveFromCart}
                    cartItems={this.state.cartItems}
                    total={this.getTotalPrice()}
                  />
                </td>
                <td
                  style={{
                    float: "left",
                    width: "270px",
                    height: "120px",
                    marginTop: "75px",
                    marginRight: "130px",
                    backgroundColor: "#f2f2f2",
                    
                  }}
                >
                  <Link
                    className='cons-link'
                    to={{
                      pathname: `/checkout`,
                      state: {
                        item: this.state.cartItems,
                        total: this.getTotalPrice(),
                      },
                    }}
                  >
                    <a
                      style={{ width: "240px", height: "50px", color: "white" }}
                      className='btn btn-success'
                    >
                      Purchase
                    </a>
                  </Link>

                  <br />
                  <center>
                    <div>
                      <p
                        style={{
                          fontSize: "20px",
                          float: "left",
                          fontWeight: "bold",
                          fontFamily: "Arial",
                        }}
                      >
                        Total:{" "}
                      </p>
                      <p
                        style={{
                          fontSize: "18px",
                          float: "left",
                          fontWeight: "bold",
                          fontWeight: "bold",
                          color: "red",
                          marginLeft: "10px",
                        }}
                      >
                        Rs. {this.getTotalPrice()} .00
                      </p>
                    </div>
                  </center>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      );
    }
  }
}

export default Cart;
