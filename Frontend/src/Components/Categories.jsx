import React, { Component, useState } from "react";
import { useHistory } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Item from "../Components/items";

function Categories() {
  const [categories, setCategories] = useState([
    "Lap-top",
    "Mobile",
    "Computer",
    "Tab",
    "Game-console",
    "Other",
  ]);
  const history = useHistory();

  function viewCategory(cat) {
    history.push({
      pathname: `/category_view/${cat}`,
      state: {
        category: cat,
      },
    });
  }
  return (
    <div>
      <div className='gap-2 d-md-flex '>
        {categories.map((cat) => {
          return (
            <div>
              <button
                style={{
                  paddingLeft: "50px",
                  marginLeft: "80px",
                  marginBottom: "30px",
                }}
                className='btn btn-primary btn-lg'
                onClick={viewCategory.bind(this, cat)}
              >
                {cat}
              </button>
              <br />
            </div>
          );
        })}
      </div>
      <Item />
    </div>
  );
}
export default Categories;
