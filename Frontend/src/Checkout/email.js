import React, { Component } from "react";
class email extends Component {
  constructor(props) {
    super(props);
    console.log(props);

    this.state = {
      name: this.props.details.name,
      email: this.props.details.email,
      total: this.props.details.Total,
    };
  }

  render() {
    return (
      <form className='contact-form' onSubmit={this.props.sendEmail}>
        <input hidden type='text' name='name' value={this.state.name} />
        <input hidden type='text' name='email' value={this.state.email} />
        <input hidden type='text' name='email' value={this.state.total} />

        <button type='submit' style={{ fontSize: "20px", color: "#2f63a3" }}>
          {" "}
          Back to home
        </button>
      </form>
    );
  }
}

export default email;
