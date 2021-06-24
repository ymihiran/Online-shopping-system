import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory, useLocation } from "react-router-dom";

function CategoryView() {
  const location = useLocation();
  const [items, setItems] = useState([]);
  const history = useHistory();

  function clickItem(item) {
    history.push({
      pathname: `/itemview/${item.Title}`,
      state: {
        id: item._id,
        Brand: item.Brand,
        Title: item.Title,
        Price: item.Price,
        Quantity: item.Quantity,
        photo: item.photo,
        Description: item.Description,
        SellerID: item.SellerID,
      },
    });
  }

  useEffect(() => {
    axios
      .get(
        `http://localhost:8070/service/ShopService/items/category/${location.state.category}`
      )
      .then((res) => {
        setItems(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      {items.map((item) => {
        return (
          <div>
            <a onClick={clickItem.bind(this, item)}>
              <h1></h1>
              <table
                class='table table-hoves'
                id='table'
                style={{
                  width: "80%",
                  backgroundColor: "#f2f2f2",
                  float: "left",
                  marginLeft: "150px",
                  marginTop: "50px",
                }}
              >
                <tbody>
                  <tr>
                    <td
                      style={{
                        height: "320px",
                        width: "600px",
                        backgroundColor: "white",
                      }}
                    >
                      <a style={{ float: "left" }} href=''>
                        {" "}
                        <img
                          style={{ height: "300px", width: "350px" }}
                          src={`http://localhost:3000/products-images/${item.photo}`}
                          alt=''
                        />
                      </a>
                      <td
                        style={{
                          width: "350px",
                          backgroundColor: "white",
                          height: "280px",
                        }}
                      >
                        <br />
                        <br />
                        <p
                          class='card-text'
                          style={{
                            fontSize: "20px",
                            color: "#8080ff",
                            fontWeight: "bold",
                            fontFamily: "Times New Roman",
                            marginTop: " -15px",
                          }}
                        >
                          {item.Brand}
                        </p>
                        <p
                          class='card-text'
                          style={{
                            fontSize: "20px",
                            fontWeight: "bold",
                            fontFamily: "Times New Roman",
                            marginTop: " -15px",
                          }}
                        >
                          {item.Title}
                        </p>
                        <p>
                          Price:{" "}
                          <span style={{ color: "red" }}> {item.Price}</span>
                        </p>
                        <br />
                        <span style={{ color: "blue" }}>
                          {" "}
                          {item.Description}
                        </span>
                        <td></td>
                      </td>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p
                        class='card-text'
                        style={{
                          fontSize: "15px",
                          fontFamily: "Times New Roman",
                          marginTop: " -15px",
                          marginLeft: "80px",
                        }}
                      ></p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </a>
          </div>
        );
      })}
    </div>
  );
}

export default CategoryView;
