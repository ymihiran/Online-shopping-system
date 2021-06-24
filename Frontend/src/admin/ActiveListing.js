import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";

export default class ActiveListing extends Component {
  constructor(props) {
    super(props);
    this.state = { business: [], sellerID: "" };
  }
  //to Delete active product listings
  onDelete = (id) => {
    axios
      .delete(`http://192.168.8.161:8280/api/service/${id}`)
      .then((response) => {
        swal({
          title: "Deleted!",
          text: "Succesfully deleted",
          icon: "warning",
          button: "Oky!",
        });

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
    // display all listings
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
  }

  render() {
    return (
      <div className='section'>
        <ul className='navbar-nav '>
          <div className='section' style={{ float: "right" }}>
            <br />
            <br />
            <ul className='navbar-nav '>
              <table
                class='table table-hoves'
                id='table'
                style={{
                  marginLeft: "150px",
                  width: "1100px",
                  background: "white",
                }}
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
                                  width: "680px",
                                }}
                              >
                                <p
                                  class='card-text'
                                  style={{
                                    fontSize: "15px",
                                    marginTop: "-15px",
                                  }}
                                >
                                  {item.Description}
                                </p>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div style={{ marginLeft: "100px" }}>
                              <a
                                style={{ marginRight: "40px" }}
                                class='btn btn-primary'
                                href={`/edit/${item._id}`}
                                style={{
                                  color: "white",
                                  marginRight: "10px",
                                  width: "150px",
                                  height: "40px",
                                }}
                              >
                                <i className='fas fa-edit'>&nbsp; Edit</i>
                              </a>

                              <a
                                className='btn btn-danger'
                                onClick={() => this.onDelete(item._id)}
                                style={{
                                  color: "white",
                                  width: "150px",
                                  height: "40px",
                                }}
                              >
                                <i className='far fa-trash-alt'>
                                  &nbsp; Delete
                                </i>
                              </a>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </td>
                  </tr>
                </tbody>
              </table>
            </ul>
          </div>
        </ul>
      </div>
    );
  }
}
