import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import "../App.css";
import swal from "sweetalert";
function ItemView({ match }) {
  const [count, setCount] = useState(0);

  let location = useLocation();
  function increamentCount() {
    setCount(count + 1);
  }
  function decreamentCount() {
    if (count > 0) {
      setCount(count - 1);
    }
  }
  function addToCart() {
    console.log(location.state);
    const cartItem = {
      _id: location.state.id,
      qty: count,
      Brand: location.state.Brand,
      Title: location.state.Title,
      Price: location.state.Price,
      Quantity: location.state.Quantity,
      photo: location.state.photo,
      SellerID: location.state.SellerID,
    };

    axios
      .get(
        `http://localhost:8070/service/ShopService/cart/${location.state.id}`
      )
      .then((res) => {
        const Item = res.data;
        return Item;
      })
      .then((Item) => {
        if (Item != null) {
          const newCartitem = {
            qty: parseInt(Item.Quantity) + parseInt(count),
          };
          axios
            .patch(
              `http://localhost:8070/service/ShopService/cart/${location.state.id}`,
              newCartitem
            )
            .then((res) => {
              console.log(res);
              swal({
                title: "Add to Cart!",
                text: "successfully add to the cart!",
                icon: "success",
                button: "Aww yiss!",
              });
            });
        } else {
          axios
            .post(`http://localhost:8070/service/ShopService/cart`, cartItem)
            .then((res) => {
              console.log(res);
              swal({
                title: "Add to Cart!",
                text: "successfully add to the cart!",
                icon: "success",
                button: "Aww yiss!",
              });
            })
            .catch((err) => {
              console.log(err);
            });
        }
      });
  }

  return (
    <div class='container'>
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
                    src={`http://localhost:3000/products-images/${location.state.photo}`}
                  />
                </div>
              </div>
            </div>
            <div class='details col-md-6'>
              <h3 class='product-title'>{location.state.Brand}</h3>
              <div class='rating'>
                <div class='stars' style={{ color: "#ffd11a" }}>
                  <span class='fa fa-star checked'></span>
                  <span class='fa fa-star checked'></span>
                  <span class='fa fa-star checked'></span>
                  <span class='fa fa-star'></span>
                  <span class='fa fa-star'></span>
                </div>
              </div>
              <p class='product-description'>{location.state.Description}</p>
              <h4 class='price'>
                current price: <span>{location.state.Price}</span>
              </h4>

              <h5 class='sizes'>
                <div>
                  <button
                    style={{
                      float: "left",
                      border: "2px solid #4caf50",
                      width: "50px",
                    }}
                    onClick={increamentCount}
                  >
                    +
                  </button>
                  <span style={{ marginLeft: "10px", marginRight: "10px" }}>
                    {count}
                  </span>
                  <button
                    style={{
                      float: "left",
                      border: "2px solid #4caf50",
                      width: "50px",
                    }}
                    onClick={decreamentCount}
                  >
                    -
                  </button>
                  <br />
                </div>
                <br></br>
                <a
                  href='/checkout'
                  style={{ width: "150px", height: "50px", float: "left" }}
                  className='btn btn-success'
                >
                  Purchase
                </a>
                <button
                  onClick={addToCart}
                  style={{ float: "left", marginTop: "10px" }}
                  className='add-to-cart'
                >
                  Add To Cart
                </button>
              </h5>
            </div>
          </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </div>
    </div>
  );
}

export default ItemView;
