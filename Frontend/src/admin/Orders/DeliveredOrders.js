import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";

export default class Delivered extends Component {
  constructor(props) {
    super(props);
    this.state = { business: [], sellerID: "" };
  }

  onDelete = (id) => {
    axios
      .delete(
        `http://192.168.8.161:8280/api/service/delete_delivered_orders/${id}`
      )
      .then((response) => {
        swal("Removed!", "can not restore it Thank you");
        this.componentDidMount();
      })
      .catch(function (err) {
        console.log(err);
      });
  };

  componentDidMount() {
    const data = {
      sellerID: localStorage.getItem("user"),
    };

    axios
      .get(
        `http://192.168.8.161:8280/api/service/get_delivered_orders/${data.sellerID}`
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
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <table
            class='table table-hoves'
            id='table'
            style={{ marginLeft: "140px", float: "left" }}
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

                      <td>
                        <a
                          style={{
                            color: "white",
                            marginLeft: "100px",
                            width: "150px",
                            height: "40px",
                          }}
                          className='btn btn-danger'
                          onClick={() => this.onDelete(item._id)}
                        >
                          <i className='far fa-trash-alt'>&nbsp; Finish</i>
                        </a>
                      </td>
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
