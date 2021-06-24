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
      .get(`http://192.168.8.161:8280/api/service/get_item/1`)
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
        <div style={{ marginTop: "-40px" }}>
          <table>
            <tbody>
              <td>
                <div
                  className='view zoom overlay z-depth-2 rounded'
                  style={{
                    height: "600px",
                    width: "268px",
                    marginLeft: "132px",
                  }}
                >
                  <img
                    style={{
                      height: "600px",
                      width: "268px",
                      position: "relative",
                    }}
                    src='https://ucee64e79efa713e718e51bfca63.previews.dropboxusercontent.com/p/orig/ABIB_VqpQftMqp-pseGrp0FMtfgn6Fq6y2Xe9OZUuLO4H_52BVn0zXNm_QA-Hg-as9hSN4yn2RZQnAf3f-0zIOd8uMeYIE0ZZ5PjlLaU2idDwSzo9ndJNJn9zYBb8t8YqIAs5nrPe29DCs72hcFm0tul1WrXyejit2WFUjngr-JokhRgpXY_BQZJzmzGr8BiWUqKbopX_icN09ajPz9l-2Skhn6FfXv3SgfRMSp8F8r3Nl8mdIlbjNK3BAmk0r5wojGkCS9NkYgMaUn-UHV11m29KHjfIFw6S2_qm4gGnIx7p-Pt2rszpK30i73mb-4MfeE4K7ZeQcfjSwSn_qKkM1KW9G1EvgJwrnKli81UegV2uEQLQvvLWjxPFczyrmF9QPU/p.gif?fv_content=true&size_mode=5'
                    alt=''
                  />
                  <img
                    style={{
                      height: "600px",
                      width: "268px",
                      position: "relative",
                    }}
                    src='https://uc12077fd8c9fa4d76c01ad3d6a2.previews.dropboxusercontent.com/p/orig/ABL9JZKq3fMgOgjBto5H6-CoQ9tUfWdLDNVExkBzPgf-r4myRsxHVLtYLVXTpddTK1yYsrDVG1sszgwvcNUYhwZv2H06_5Dooa4li__OduepZal65B-4IdWoz-29zgOLQ-8MvVlWIWtSsJURf6l7zDQcxakSpCACcCaJ4QhbLz7qhFxc5HhBXA2PMLjAFAMRyZsXt1MMI9O6koIuQ_cH1Ak17t2rTf5ySI1DvM3RduI4zEFNtNXpeq2L9aq-fh5YDIqgEYRDgbjqigkeDe3csjQrdbpMyL9asoBXMgXBA3jdh3GJ0uxK5_OnrtztDoIDaTK9176j-fClvGeKWCWcNHcQZOmFCQ5uqT6cMrvl2m4bu3rqqEv46da_uZVnn1yG3Z0/p.gif?fv_content=true&size_mode=5'
                    alt=''
                  />
                </div>
              </td>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default items;
