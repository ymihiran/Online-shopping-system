import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Contact extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='container' style={{ marginLeft: "550px" }}>
        <div class='wrap-contact100'>
          <form
            class='contact100-form validate-form'
            action='/ContactSubmit'
            method='POST'
          >
            <span class='contact100-form-title'>Send Us A Message</span>

            <div
              class='wrap-input100 validate-input'
              data-validate='Please enter your name'
            >
              <input
                style={{ background: "#ccccff" }}
                class='input100'
                type='text'
                name='name'
                placeholder='Full Name'
                required
              />
              <span class='focus-input100'></span>
            </div>

            <div
              class='wrap-input100 validate-input'
              data-validate='Please enter your email: e@a.x'
            >
              <input
                style={{ background: "#ccccff" }}
                class='input100'
                type='text'
                name='email'
                placeholder='E-mail'
                required
              />
              <span class='focus-input100'></span>
            </div>

            <div
              class='wrap-input100 validate-input'
              data-validate='Please enter your message'
            >
              <textarea
                style={{ background: "#ccccff" }}
                required
                class='input100'
                name='message'
                placeholder='Your Message'
              ></textarea>
              <span class='focus-input100'></span>
            </div>

            <div class='container-contact100-form-btn'>
              <button class='contact100-form-btn'>
                <span>
                  <i class='fa fa-paper-plane-o m-r-6' aria-hidden='true'></i>
                  Send
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
