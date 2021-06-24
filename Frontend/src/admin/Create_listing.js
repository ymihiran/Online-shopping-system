import React, { useState } from "react";
import axios from "axios";
import FormData from "form-data";
import "./css/create-listing-form-colums.css";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import swal from "sweetalert";
export default function Ceate_listing() {
  var id = localStorage.getItem("user");
  const [Title, setTitle] = useState("");
  const [Brand, setBrand] = useState("");
  const [Category, setCategory] = useState("");
  const [Condition, setCondition] = useState("");
  const [Description, setDescription] = useState("");
  const [Quantity, setQuantity] = useState("");
  const [Price, setPrice] = useState("");
  const [photo, setFileName] = useState("");
  const [sellerID, setsellerID] = useState("");

  const history = useHistory();

  function onChangeFile(e) {
    console.log(e.target.files[0]);
    setFileName(e.target.files[0]);
    setsellerID(id);
  }

  function sendData(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append("Title", Title);
    formData.append("Brand", Brand);
    formData.append("Category", Category);
    formData.append("Condition", Condition);
    formData.append("Description", Description);
    formData.append("Quantity", Quantity);
    formData.append("Price", Price);
    formData.append("photo", photo);
    formData.append("sellerID", sellerID);

    axios
      .post("http://localhost:8070/service/ShopService/seller/add", formData)
      .then((response) => {
        history.push("/dashboard");
      })
      .catch((err) => {
        alert(err);
      });
  }
  return (
    <div class='section'>
      <br />
      <div class='d-flex' style={{ marginLeft: "100px" }}>
        <form onSubmit={sendData} style={{ marginLeft: "80px" }}>
          <input
            style={{ opacity: "0" }}
            disabled
            id='sellerID'
            name='sellerID'
            type='text'
            class='form-control'
            value={id}
            aria-label='Sizing example input'
            aria-describedby='inputGroup-sizing-default'
          />
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
              required
              id='Title'
              name='Title'
              type='text'
              class='form-control'
              aria-label='Sizing example input'
              aria-describedby='inputGroup-sizing-default'
              onChange={(e) => {
                setTitle(e.target.value);
              }}
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
                  Category <span style={{ color: "red" }}>&#42;</span>
                </p>
              </span>
            </div>
            <select
              name='Category'
              id='Category'
              required
              class='form-control'
              onChange={(e) => {
                setCategory(e.target.value);
              }}
            >
              <option value='Default'>-</option>
              <option value='Mobile'>Mobile</option>
              <option value='Lap-top'>Lap top</option>
              <option value='Tab'>Tab</option>
              <option value='Game-console'>Game console</option>
              <option value='Computer'>Computer</option>
              <option value='XBOX'>XBOX</option>
              <option value='Other'>Other</option>
            </select>
          </div>
          <div></div>

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
                  Brand <span style={{ color: "red" }}>&#42;</span>
                </p>
              </span>
            </div>
            <input
              required
              id='Brand'
              name='Brand'
              type='text'
              class='form-control'
              aria-label='Sizing example input'
              aria-describedby='inputGroup-sizing-default'
              onChange={(e) => {
                setBrand(e.target.value);
              }}
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
              required
              class='form-control'
              id='Condition'
              name='Condition'
              onChange={(e) => {
                setCondition(e.target.value);
              }}
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
                  Photos <span style={{ color: "red" }}>&#42;</span>
                </p>
              </span>
            </div>
            <input
              required
              class='form-control'
              type='file'
              id='photo'
              name='photo'
              accept=''
              onChange={onChangeFile}
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
                  Quantity <span style={{ color: "red" }}>&#42;</span>
                </p>
              </span>
            </div>
            <input
              required
              id='Quantity'
              name='Quantity'
              type='text'
              class='form-control'
              aria-label='Sizing example input'
              aria-describedby='inputGroup-sizing-default'
              onChange={(e) => {
                setQuantity(e.target.value);
              }}
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
              required
              id='Price'
              name='Price'
              type='text'
              class='form-control'
              aria-label='Sizing example input'
              aria-describedby='inputGroup-sizing-default'
              onChange={(e) => {
                setPrice(e.target.value);
              }}
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
              required
              id='Description'
              name='Description'
              rows='8'
              cols='150'
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            ></textarea>
          </div>

          <a
            href='/'
            className='btn btn-danger'
            style={{ color: "white", width: "200px", marginRight: "20px" }}
          >
            Cancel
          </a>
          <button
            type='submit'
            className='btn btn-success'
            style={{ color: "white", width: "300px" }}
          >
            Publish
          </button>
          <br />
          <br />
          <br />
        </form>
      </div>
    </div>
  );
}
