import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

function LogoutBtn() {
  const history = useHistory();

  logOut();

  async function logOut() {
    await axios.get("http://localhost:8070/service/ShopService/auth/logout");
    localStorage.removeItem("user");

    localStorage.removeItem("type");
    history.push("/");
  }

  return <button onClick={logOut}></button>;
}

export default LogoutBtn;
