import React, { Component } from "react";
import Item from "../Components/items";
import "./CSS/home.css";
class Main extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <center>
          <section
            style={{
              backgroundColor: "#959595",
              width: "1200px",
              alignContent: "center",
            }}
          >
            <div class='container'>
              <div class='header' style={{ height: "410px ", width: "1200px" }}>
                <img
                  src='https://media.aayubo.com/assets/content/1-1ubneN2383w.jpg'
                  style={{
                    height: "410px ",
                    width: "1210px",
                    marginLeft: "-80px",
                  }}
                />
              </div>
            </div>
          </section>
        </center>
        <Item />
      </React.Fragment>
    );
  }
}
export default Main;
