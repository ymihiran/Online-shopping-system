import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router";
import axios from "axios";

function Results() {
  const location = useLocation();
  const [items, setitems] = useState([]);
  const input = location.state.type;
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
        SellerID: item.sellerID,
      },
    });
  }

  useEffect(() => {
    axios
      .get(`http://localhost:8070/service/ShopService/items`)
      .then((res) => {
        setitems(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return items
    .filter((item) => {
      if (input == "") {
        return item;
      } else if (item.Brand.toLowerCase().includes(input.toLowerCase())) {
        return item;
      }
    })
    .map((item) => {
      return (
        <div style={{ width: "70%", marginRight: "auto", marginLeft: "auto" }}>
          <br />
          <br />
          <br />
          <br />

          <table
            class='table table-hoves'
            id='table'
            style={{
              width: "800px",
              backgroundColor: "white",
              float: "left",
              marginLeft: "115px",
              marginTop: "-10px",
            }}
          >
            <tbody>
              <tr>
                <td>
                  {" "}
                  <a
                    onClick={clickItem.bind(this, item)}
                    style={{ float: "left" }}
                  >
                    {" "}
                    <img
                      style={{ height: "200px", width: "280px" }}
                      src={`http://localhost:3000/products-images/${item.photo}`}
                      alt=''
                    />
                  </a>
                  <div class='gol' style={{ marginLeft: "300px" }}>
                    <a>
                      <h2
                        style={{
                          fontSize: "30px",
                          fontFamily: "Times New Roman",
                          color: "#2f63a3",
                        }}
                      ></h2>
                    </a>
                    <p
                      class='card-text'
                      style={{
                        fontSize: "18px",
                        color: "#8080ff",
                        fontWeight: "bold",
                      }}
                    >
                      {item.Brand}
                    </p>
                    <p
                      class='card-text'
                      style={{
                        fontSize: "18px",
                        fontFamily: "Times New Roman",
                        marginTop: " -15px",
                      }}
                    >
                      {item.Title}
                    </p>
                    <p
                      class='card-text'
                      style={{
                        fontSize: "15px",
                        fontFamily: "Times New Roman",
                        marginTop: " -15px",
                        color: "red",
                      }}
                    >
                      Rs.{item.Price}
                    </p>
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
      );
    });
}

export default Results;
