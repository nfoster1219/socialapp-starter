import React from "react";
import Spinner from "react-spinkit";
import "./RegistrationForm.css";
import DataService from "../../dataService"


class RegistrationForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      password: "",
      displayName:""
    };

    this.client = new DataService ();
  }

  handleRegistration = e => {
    e.preventDefault();
   this.client.registerUser(this.state).then(result =>{
     console.log(result.data)
   })
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { loading, error } = this.props;
    return (
      <div className="RegistrationForm">
       <form id="registration-form" onSubmit={this.handleRegistration}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            autoFocus
            required
            onChange={this.handleChange}
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            required
            onChange={this.handleChange}
          />

      <label htmlFor="displayName">Display Name</label>
          <input
            type="text"
            name="displayName"
            required
            onChange={this.handleChange}
          />
       <br/>
          
          <button type="submit" disabled={loading}>
            Register
          </button>

        </form>
        {loading && <Spinner name="circle" color="blue" />}
        {error && <p style={{ color: "red" }}>{error.message}</p>}
      </div>
    );
  }
}

export default RegistrationForm;
