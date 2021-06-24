import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = { business: [], sellerID: "" };
  }

  componentDidMount() {
    const data = {
      sellerID: localStorage.getItem("user"),
    };
    console.log("Seller ID", data.sellerID);
    //axios.get(`http://localhost:8070/seller/display/${data.sellerID}`)

    axios
      .get(
        `http://192.168.8.161:8280/api/service/display_dash_items/${data.sellerID}`
      )
      .then((response) => {
        this.setState({ business: response.data });
      })
      .catch(function (err) {
        console.log(err);
      });

    console.log(localStorage.getItem("user"));
  }
  render() {
    return (
      <div className='section'>
        <ul className='navbar-nav '>
          <div
            className='section'
            style={{
              background: "white",
              width: "1100px",
              marginLeft: "140px",
              float: "left",
            }}
          >
            <br />
            <br />
            <br />
            <br />
            <table class='table table-hoves'>
              <tbody>
                <tr>
                  <td>
                    {this.state.business.map((item, index) => (
                      <tr>
                        <td>
                          <a href={`/itemDetails/${item._id}`}>
                            <img
                              style={{ height: "180px", width: "250px" }}
                              src={`http://localhost:3000/products-images/${item.photo}`}
                            ></img>
                          </a>
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
                            <a href={`/itemDetails/${item._id}`}>
                              {" "}
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
                            </a>
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
                    ))}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </ul>
      </div>
    );
  }
}
