import axios from "axios";
import "../App.css";

import React, { Component } from "react";

export default class itemDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      business: [],
      Brand: "",
      Title: "",
      Condition: "",
      Description: "",
      Quantity: "",
      Price: "",
    };
  }

  //http://localhost:8070/seller/get/+id
  componentDidMount() {
    const id = this.props.match.params.id;
    axios
      .get(`http://localhost:8070/service/ShopService/seller/get/${id}`)
      .then((response) => {
        this.setState({
          Brand: response.data.post.Brand,
          Title: response.data.post.Title,
          Condition: response.data.post.Condition,
          Description: response.data.post.Description,
          Quantity: response.data.post.Quantity,
          Price: response.data.post.Price,
        });
      })
      .catch(function (err) {
        console.log(err);
      });
  }

  render() {
    return (
      <div class='container'>
        <h1>working</h1>
        <div class='card'>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <div class='container-fliud'>
            <div class='wrapper row'>
              <div class='preview col-md-6'>
                <div class='preview-pic tab-content'>
                  <div class='tab-pane active' id='pic-1'>
                    <img
                      style={{ height: "380px", width: "450px" }}
                      src={`http://localhost:3000/products-images/${this.state.photo}`}
                    />
                  </div>
                </div>
              </div>
              <input value=''></input>
              <p class='product-description'>{this.state.Description}</p>
              <h4 class='price'>
                current price: <span>{this.state.Price}</span>
              </h4>
            </div>
          </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </div>
    );
  }
}
