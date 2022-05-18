import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ItemContainer from "./ItemContainer";
import "./CSS/home.css";

class items extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
    };
  }

  componentDidMount() {
    axios
      .get(`http://localhost:8070/service/ShopService/items`)
      .then((res) => {
        this.setState({ items: res.data });
      });
  }
  render() {
    return (
      <div>
        <ul>
          {this.state.items.map((item) => {
            return <ItemContainer product={item} />;
          })}
        </ul>
        
      </div>
    );
  }
}

export default items;
