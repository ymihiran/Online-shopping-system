import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import swal from "sweetalert";

export default class NewOrders extends Component {
  constructor(props) {
    super(props);
    this.state = { business: [], statues: "" };
  }

  componentDidMount() {
    const data = {
      sellerID: localStorage.getItem("user"),
    };

    axios
      .get(
        `http://192.168.8.161:8280/api/service/getnew_orders/${data.sellerID}`
      )
      .then((response) => {
        this.setState({ business: response.data });

        console.log(response.data);
      })
      .catch(function (err) {
        console.log(err);
      });
  }

  onFinish = (id) => {
    axios
      .get(`http://localhost:8070/service/ShopService/orders/finish/${id}`)
      .then((response) => {
        var navi = document.getElementById("navigate");
        navi.click();
      })
      .catch(function (err) {
        console.log(err);
      });
  };

  render() {
    return (
      <div className='section' style={{ width: "1200px" }}>
        <ul className='navbar-nav '>
          <a id='navigate' href='/newOrders'></a>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <table
            class='table table-hoves'
            id='table'
            style={{ marginLeft: "140px", float: "left", background: "white" }}
          >
            <tbody>
              <tr>
                <td>
                  {this.state.business.map((item, index) => (
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
                            width: "200px",
                            height: "250px",
                          }}
                        >
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

                          <div
                            style={{
                              fontSize: "15px",
                              marginTop: "-15px",
                              width: "700px",
                            }}
                          >
                            <p
                              class='card-text'
                              style={{ fontSize: "15px", marginTop: "-15px" }}
                            >
                              {item.Description}
                            </p>
                          </div>
                        </div>
                      </td>
                      <div style={{ marginLeft: "200px", width: "300px" }}>
                        <a
                          className='btn btn-success'
                          href={`/ViewOrders/${item._id}`}
                          style={{
                            color: "white",
                            backgroundColor: "blue",
                            width: "200px",
                            height: "40px",
                          }}
                        >
                          View
                        </a>
                        <a
                          style={{
                            color: "white",
                            width: "200px",
                            height: "40px",
                          }}
                          className='btn btn-success'
                          onClick={() => this.onFinish(item._id)}
                        >
                          <i className='far fa-trash-alt'>
                            &nbsp; Complete Order
                          </i>
                        </a>
                      </div>
                    </tr>
                  ))}
                </td>
              </tr>
            </tbody>
          </table>
        </ul>
      </div>
    );
  }
}
