import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  async function login(e) {
    e.preventDefault();

    try {
      const LoginData = {
        email,
        password,
      };
      await axios
        .post("http://localhost:8070/service/ShopService/auth/login", LoginData)
        .then((response) => {
          localStorage.setItem("user", email);
          localStorage.setItem("type", "user");

          history.push("/");
        });
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div
      class='myform form '
      style={{
        marginTop: "160px",
        background: "#f2f2f2",
        width: "600px",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <div class='logo mb-3'>
        <div class='col-md-12 text-center'>
          <h1>Login</h1>
        </div>
      </div>
      <div class='seller-login' style={{ float: "left", marginLeft: "50px" }}>
        <p class='text-center'>
          Login as a seller <a href='/sellerlogin'>Login</a>
        </p>
      </div>
      <br />
      <br />
      <form onSubmit={login} class='horizontal'>
        <div class='form-group'>
          <p style={{ marginLeft: "50px" }} for='exampleInputEmail1'>
            Email address
          </p>
          <input
            type='text'
            placeholder='Email'
            style={{ width: "80%", height: "40px", marginLeft: "50px" }}
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div class='form-group'>
          <p for='exampleInputPassword' style={{ marginLeft: "50px" }}>
            Password
          </p>
          <input
            type='password'
            placeholder='Password'
            style={{ width: "80%", height: "40px", marginLeft: "50px" }}
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <br />
        <div class='form-group'>
          <p class='text-center'>
            Create an account <a href='/register'>Create</a>
          </p>
        </div>
        <div class='col-md-12 text-center '>
          <br />
          <br />
          <button type='submit' class=' btn btn-block mybtn btn-primary tx-tfm'>
            Login
          </button>
        </div>
        <div class='col-md-12 '>
          <div class='login-or'>
            <hr class='hr-or' />
          </div>
        </div>
      </form>
    </div>
  );
}
export default Login;
