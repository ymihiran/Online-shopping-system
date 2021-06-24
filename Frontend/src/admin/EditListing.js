import axios from "axios";
import React, { Component } from "react";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert";
export default class EditListing extends Component {
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

  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      ...this.state,
      [name]: value,
    });
  };

  //Submit all edit details
  onSubmit = (e) => {
    e.preventDefault();
    const id = this.props.match.params.id;
    const { Brand, Title, Condition, Description, Quantity, Price } =
      this.state;

    const data = {
      Brand: Brand,
      Title: Title,
      Condition: Condition,
      Description: Description,
      Quantity: Quantity,
      Price: Price,
    };

    //`http://192.168.8.161:8280/api/service/update_item/${id}

    axios
      .put(`http://192.168.8.161:8280/api/service/update_item/${id}`, data)
      .then((response) => {
        Swal({
          position: "top-end",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500,
        });

        document.getElementById("Lisitngpage").click();
      })
      .catch(function (err) {
        console.log(err);
      });
  };
  //http://localhost:8070/seller/get/+id
  componentDidMount() {
    const id = this.props.match.params.id;
    axios
      .get(`http://192.168.8.161:8280/api/service/getspecific_item/${id}`)
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
      <div className='section'>
        <a id='Lisitngpage' href='/dashboard'></a>

        <div class='title' style={{ height: "60px" }}>
          <div>
            <h2 style={{ float: "right" }}>Preview</h2>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <ul className='navbar-nav '>
          <div
            className='section'
            style={{ marginLeft: "140px", float: "left" }}
          >
            <form>
              <div class='input-group mb-3' style={{ width: "800px" }}>
                <div
                  className='titlenames'
                  style={{ width: "300px", marginRight: "150;" }}
                >
                  <span>
                    {" "}
                    <p>
                      Title <span style={{ color: "red" }}>&#42;</span>
                    </p>
                  </span>
                </div>
                <input
                  id='Title'
                  name='Title'
                  type='text'
                  class='form-control'
                  value={this.state.Title}
                  onChange={this.handleInputChange}
                />
              </div>
              <br />

              <div class='input-group mb-3' style={{ width: "800px" }}>
                <div
                  className='titlenames'
                  style={{ width: "300px", marginRight: "150;" }}
                >
                  <span>
                    {" "}
                    <p>
                      Brand <span style={{ color: "red" }}>&#42;</span>
                    </p>
                  </span>
                </div>
                <input
                  value={this.state.Brand}
                  required
                  id='Brand'
                  name='Brand'
                  type='text'
                  class='form-control'
                  aria-label='Sizing example input'
                  aria-describedby='inputGroup-sizing-default'
                  onChange={this.handleInputChange}
                />
              </div>

              <br />

              <div class='input-group mb-3' style={{ width: "800px" }}>
                <div
                  className='titlenames'
                  style={{ width: "300px", marginRight: "150;" }}
                >
                  <span>
                    {" "}
                    <p>
                      Condition <span style={{ color: "red" }}>&#42;</span>
                    </p>
                  </span>
                </div>
                <select
                  value={this.state.Condition}
                  required
                  class='form-control'
                  id='Condition'
                  name='Condition'
                  onChange={this.handleInputChange}
                >
                  <option value='Default'>-</option>
                  <option value='New'>New</option>
                  <option value='New-with-Box'>New with Box</option>
                  <option value='Used'>Used</option>
                </select>
              </div>
              <div></div>

              <br />
              <br />
              <br />
              <br />
              <br />

              <div class='input-group mb-3' style={{ width: "800px" }}>
                <div
                  className='titlenames'
                  style={{ width: "300px", marginRight: "150;" }}
                >
                  <span>
                    {" "}
                    <p>
                      Quantity <span style={{ color: "red" }}>&#42;</span>
                    </p>
                  </span>
                </div>
                <input
                  value={this.state.Quantity}
                  required
                  id='Quantity'
                  name='Quantity'
                  type='text'
                  class='form-control'
                  aria-label='Sizing example input'
                  aria-describedby='inputGroup-sizing-default'
                  onChange={this.handleInputChange}
                />
              </div>

              <div class='input-group mb-3' style={{ width: "800px" }}>
                <div
                  className='titlenames'
                  style={{ width: "300px", marginRight: "150;" }}
                >
                  <span>
                    {" "}
                    <p>
                      Price <span style={{ color: "red" }}>&#42;</span>
                    </p>
                  </span>
                </div>
                <input
                  value={this.state.Price}
                  required
                  id='Price'
                  name='Price'
                  type='text'
                  class='form-control'
                  aria-label='Sizing example input'
                  aria-describedby='inputGroup-sizing-default'
                  onChange={this.handleInputChange}
                />
              </div>
              <br />
              <br />
              <br />
              <div class='input-group mb-3' style={{ width: "800px" }}>
                <div
                  className='titlenames'
                  style={{ width: "300px", marginRight: "150;" }}
                >
                  <span>
                    {" "}
                    <p>
                      Description <span style={{ color: "red" }}>&#42;</span>
                    </p>
                  </span>
                </div>
                <textarea
                  style={{ background: "#f2f2f2" }}
                  value={this.state.Description}
                  required
                  id='Description'
                  name='Description'
                  rows='8'
                  cols='150'
                  onChange={this.handleInputChange}
                ></textarea>
              </div>

              <a
                href='/'
                style={{ width: "300px", marginLeft: "20px" }}
                className='btn btn-danger'
              >
                Cancel
              </a>
              <button
                type='submit'
                className='btn btn-success'
                onClick={this.onSubmit}
                style={{ width: "200px", marginLeft: "20px" }}
              >
                Publish
              </button>
              <br />
              <br />
              <br />
            </form>
          </div>
        </ul>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    );
  }
}
