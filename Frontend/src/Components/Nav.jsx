import React, { Component, useState } from "react";
import "../App.css";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
function Nav() {
  const [search, setSearch] = useState("");
  const history = useHistory();

  function handleEditSearch(e) {
    setSearch(e.target.value);
  }
  function handleSearch() {
    history.push({
      pathname: `/search_results`,
      state: {
        type: search,
      },
    });
  }
  return (
    <React.Fragment>
      <div
        class='search-logo'
        style={{
          width: "80%",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "100px",
        }}
      >
        <center>
          <form class='navbar-search-center'>
            <div class='input-group'>
              <a href=''>
                <img
                  style={{
                    height: "50px",
                    marginTop: "auto",
                    marginBottom: "auto",
                  }}
                  src='https://media.aayubo.com/assets/content/12-1uowsN3478s.jpg'
                  alt=''
                />
              </a>
              <input
                onChange={handleEditSearch}
                type='text'
                class='form-control bg-light border-0 small'
                id='myinput'
                onkeyup='searchFunction()'
                placeholder='Search for...'
                aria-label='Search'
                aria-describedby='basic-addon2'
                style={{ width: "30px", height: "50px" }}
                spellcheck='false'
                name='titlesearch'
                autocomplete='off'
              />
              <button
                onClick={handleSearch}
                class='btn btn-dark'
                type='button'
                value='Search'
                id='submit'
                onkeyup='search_button()'
                style={{
                  width: "100px",
                  height: "50px",
                  marginTop: "auto",
                  marginBottom: "auto",
                }}
              >
                SEARCH
              </button>
            </div>
          </form>
          <br />
          <div class='mainmenu pull-center' style={{ display: "inline-block" }}>
            <ul
              class='nav'
              style={{
                fontSize: "large",
                color: "black",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              <li>
                <a
                  style={{
                    fontSize: "18px",
                    color: "black",
                    marginRight: "30px",
                  }}
                  href='/'
                  class='active'
                >
                  <i class='fa fa-home'></i>Home
                </a>
              </li>
              <li class=''>
                <a
                  style={{
                    fontSize: "20px",
                    color: "black",
                    marginRight: "30px",
                  }}
                  href='/categories'
                >
                  Categories
                </a>
              </li>
              <li>
                <a
                  style={{
                    fontSize: "18px",
                    color: "black",
                    marginRight: "30px",
                  }}
                  href='/cart'
                >
                  Cart
                </a>
              </li>
            </ul>
          </div>
        </center>
        <br />
        <br />
      </div>
    </React.Fragment>
  );
}
export default Nav;
