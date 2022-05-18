import React, { useState } from "react";

function MainHeader() {
  if (localStorage.getItem("type") == "seller") {
    return (
      <React.Fragment>
        <div style={{ width: "100%", height: "40px", background: "#e6e6e6" }}>
          <div class='mainmenu pull-center' style={{ float: "right" }}>
            <ul class='nav'>
              <li style={{ marginRight: "40px" }}>
                <a style={{ fontSize: "20px" }} href='/dashboard'>
                  <i class='fa fa-user'></i> Home
                </a>
              </li>
              <li style={{ marginRight: "40px" }}>
                <a style={{ fontSize: "20px" }} href='/logOut'>
                  <i class='fa fa-user'></i> Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </React.Fragment>
    );
  } else if (localStorage.getItem("type") == "user") {
    return (
      <React.Fragment>
        <div style={{ width: "100%", height: "40px", background: "black" }}>
          <div class='mainmenu pull-center' style={{ float: "right" }}>
            <ul class='nav'>
              <li style={{ marginRight: "40px" }}>
                <a style={{ fontSize: "20px" }} href='/'>
                  <i class='fa fa-user'></i> Home
                </a>
              </li>
              <li style={{ marginRight: "40px" }}>
                <a style={{ fontSize: "20px" }} href='/logOut'>
                  <i class='fa fa-user'></i> Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <div
          class='search-logo'
          style={{ width: "100%", height: "40px", background: "black" }}
        >
          <div class='mainmenu pull-center' style={{ float: "right" }}>
            <ul class='nav'>
              <li style={{ marginRight: "40px" }}>
                <a style={{ fontSize: "20px" }} href='/'>
                  <i class='fa fa-user'></i> Home
                </a>
              </li>
              <li style={{ marginRight: "40px" }}>
                <a style={{ fontSize: "20px" }} href='/Login'>
                  <i class='fa fa-user'></i> Login
                </a>
              </li>
            </ul>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default MainHeader;
