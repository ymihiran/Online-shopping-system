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
                  src='https://uc08529162a5baedffc5287554f2.previews.dropboxusercontent.com/p/thumb/ABLvOA1MFcvjr4_bvCMShEDyP9fJAMRCrkDcTW0em66W_BA6ICO2pd-0Q6zGCxQ3ZEIzTU_Of-x3RXglZ-NzYZAQXGbbhjcUu0Ffd4qka0NGsgDYKsN2z5hSJzKTBGupqKVed0QxSs4Keqor0znsO_x7FZXgBS8vH3uszoCBvDlEsptE8dfDL8KZgQW6uC4jRyCaUSklOs_DdTzC7z0oWWNxdzttiajraZrRqRjEPYQQzdyX_gHjOSEPzZ4Z7Vy3oudF3WBQWSO1kfAjgSevrAg4ZDmeDPVtyt8NHuMblTPwwGYU9xR_pd9Yz8NfUy_Uc4vjpCDAxts2RmUlobzdA-fZen7dlKQundI5BMp1aFO97P-JCKomlrycv59AN07v6nLz1IXPQVxuzjGEq16j22ALmVJxDR9bFUoigfwTSU7CSA/p.jpeg?fv_content=true&size_mode=5'
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
