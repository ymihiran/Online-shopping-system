import axios from "axios";
import React, { Component } from "react";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert";
export default class EditListing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: [],
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;

    console.log(id);

    axios
      .get(`http://192.168.8.161:8280/api/service/getspecific_item/${id}`)
      .then((response) => {
        this.setState({
          item: response.data,
        });

        console.log(response.data.post.Brand);
      })
      .catch(function (err) {
        console.log(err);
      });
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
            style={{
              float: "left",
              marginLeft: "80px",
              width: "1100px",
              background: "white",
            }}
          >
            <tbody>
              <tr>
                <td>
                  <tr>
                    <th>Order</th>
                    <th></th>
                    <th>Customer Details</th>
                  </tr>

                  {this.state.item.map((items) => (
                    <tr>
                      <td>
                        <p
                          class='card-text'
                          style={{
                            fontSize: "15px",
                            fontSize: "25px",
                            color: "#2f63a3",
                            marginLeft: "80px",
                            marginTop: "-15px",
                          }}
                        >
                          {items.Brand}
                        </p>{" "}
                        <br />
                        <img
                          style={{ height: "180px", width: "250px" }}
                          src={`http://localhost:3000/products-images/${items.photo}`}
                        ></img>{" "}
                        <br />
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
                        ></div>
                      </td>
                      <td>
                        <br />
                        <p
                          class='card-text'
                          style={{
                            fontSize: "15px;",
                            fontWeight: "bold",
                            marginTop: "-15px",
                          }}
                        >
                          Customer Name: {items.name}
                        </p>
                        <p
                          class='card-text'
                          style={{ fontSize: "15px", marginTop: "-15px" }}
                        >
                          {" "}
                          Address :{items.addresss}
                        </p>
                        <p
                          class='card-text'
                          style={{ fontSize: "15px;", marginTop: "-15px" }}
                        >
                          City: {items.city}
                        </p>
                        <p
                          class='card-text'
                          style={{ fontSize: "15px;", marginTop: "-15px" }}
                        >
                          State: {items.state}
                        </p>
                        <p
                          class='card-text'
                          style={{ fontSize: "15px;", marginTop: "-15px" }}
                        >
                          Zip Code: {items.zip}
                        </p>
                        <p
                          class='card-text'
                          style={{ fontSize: "15px", marginTop: "-15px" }}
                        >
                          Phone number : {items.phoneNumber}
                        </p>

                        <a href='/newOrders'>Back to Orders</a>
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
