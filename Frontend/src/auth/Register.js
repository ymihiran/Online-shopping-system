import React, { useState } from "react";
import axios from "axios";

import { useHistory } from "react-router-dom";

function Register() {
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVerify, setpasswordVerify] = useState("");

  async function register(e) {
    e.preventDefault();

    try {
      const registerData = {
        email,
        password,
        passwordVerify,
      };
      await axios
        .post(
          "http://localhost:8070/service/ShopService/userauth",
          registerData
        )
        .then((response) => {
          history.push("/Login");
        });
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
      <div
        class='myform form '
        style={{
          marginTop: "80px",
          background: "#f2f2f2",
          width: "600px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <div class='logo mb-3'>
          <div class='col-md-12 text-center'>
            <h1>Register</h1>
          </div>
        </div>

        <br />
        <br />
        <form onSubmit={register} class='horizontal'>
          <div class='form-group' style={{ marginLeft: "50px" }}>
            <p for='exampleInputPassword' style={{ marginLeft: "50px" }}>
              Email
            </p>
            <input
              type='text'
              style={{ width: "80%", height: "40px", marginLeft: "50px" }}
              placeholder='Email'
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div class='form-group' style={{ marginLeft: "50px" }}>
            <p for='exampleInputPassword' style={{ marginLeft: "50px" }}>
              Password
            </p>
            <input
              type='password'
              style={{ width: "80%", height: "40px", marginLeft: "50px" }}
              placeholder='Password'
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>

          <div class='form-group' style={{ marginLeft: "50px" }}>
            <p for='exampleInputPassword' style={{ marginLeft: "50px" }}>
              Verify Password
            </p>
            <input
              type='password'
              style={{ width: "80%", height: "40px", marginLeft: "50px" }}
              placeholder='Verify Password'
              onChange={(e) => setpasswordVerify(e.target.value)}
              value={passwordVerify}
            />
          </div>

          <br />
          <div class='form-group'>
            <p class='text-center'>
              already have an account <a href='/Login'>sign in</a>
            </p>
          </div>
          <div class='col-md-12 text-center '>
            <br />
            <br />
            <button
              type='submit'
              class=' btn btn-block mybtn btn-primary tx-tfm'
            >
              Register
            </button>
          </div>
          <div class='col-md-12 '>
            <div class='login-or'>
              <hr class='hr-or' />
            </div>
          </div>
        </form>
      </div>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}
export default Register;
