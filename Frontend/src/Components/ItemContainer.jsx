import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";
class ItemContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.product._id,
      Brand: this.props.product.Brand,
      Title: this.props.product.Title,
      Price: this.props.product.Price,
      Quantity: this.props.product.Quantity,
      photo: this.props.product.photo,
      Description: this.props.product.Description,
      SellerID: this.props.product.sellerID,
    };
  }
  render() {

    return (
      <div>
        <Link
          className='cons-link'
          to={{
            pathname: `/itemview/${this.state.Title}`,
            state: {
              id: this.state.id,
              Brand: this.state.Brand,
              Title: this.state.Title,
              Price: this.state.Price,
              Quantity: this.state.Quantity,
              photo: this.state.photo,
              Description: this.state.Description,
              SellerID: this.state.SellerID,
            },
          }}
        >
          <div style={{ marginTop: "40px", marginLeft: "30px", justifyContent:"center" }}>
            <table
              class='table table-hoves'
              id='table'
              style={{
                width: "600px",
                backgroundColor: "white",
                float: "left",
                marginLeft: "115px",
                marginTop: "-10px",
                boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
              }}
            >
              <tbody>
                <tr>
                  <td>
                    {" "}
                    <a style={{ float: "left" }}>
                      {" "}
                      <img
                        style={{ height: "200px", width: "200px" }}
                        src={`http://localhost:3000/products-images/${this.state.photo}`}
                        alt=''
                      />
                    </a>
                    <div class='gol' style={{ marginLeft: "220px" }}>
                      <a href='/get_vehicle/{{this.id}}'>
                        <h2
                          style={{
                            fontSize: "30px",
                            fontFamily: "Arial",
                            color: "#2f63a3",
                          }}
                        >  {this.state.Title}</h2>
                      </a>
                      <p
                        class='card-text'
                        style={{
                          fontSize: "18px",
                          color: "#8080ff",
                          fontWeight: "bold",
                        }}
                      >
                        {this.state.Brand}
                      </p>
                      <p
                        class='card-text'
                        style={{
                          fontSize: "12px",
                          fontFamily: "Arial",
                          color: "#808080",
                          marginTop: " -15px",
                        }}
                      >
                        {this.state.Description}
                      </p>
                      <p
                        class='card-text'
                        style={{
                          fontSize: "20px",
                          fontWeight: "bold",
                          fontFamily: "Arial",
                          marginTop: " -15px",
                          color: "red",
                        }}
                      >
                        Rs.{this.state.Price}.00
                      </p>

                      <button type="button" class="btn btn-dark">Purchase</button>

                    </div>
                  </td>
                </tr>
                <th style={{ float: "right", color: "#ffd11a" }} scope='col'>
                  <span class='fa fa-star checked'></span>
                  <span class='fa fa-star checked'></span>
                  <span class='fa fa-star checked'></span>
                  <span class='fa fa-star checked'></span>
                  <span class='fa fa-star'></span>
                </th>
              </tbody>
            </table>
          </div>
        </Link>
      </div>
    );
  }
}

export default ItemContainer;
