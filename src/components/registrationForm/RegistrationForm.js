import React from "react";
import Spinner from "react-spinkit";
import "./RegistrationForm.css";
import DataService from "../../dataService"
import { TextInput, Button } from "evergreen-ui"


class RegistrationForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      password: "",
      displayName: ""
    };
    this.client = new DataService();
  }

  handleRegistration = e => {
    e.preventDefault();
    console.log(this.state)
    this.client.registerUser(this.state)
      .then(response=> console.log(response))
    
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { loading, error } = this.props;
    return (
      <div className="RegistrationForm">
      <div className="popup">
        <form className="formPopup" id="registration-form" onSubmit={this.handleRegistration}>
        <label htmlFor="username"><b>Username</b></label>
        <TextInput
            name="username"
            placeholder="Username"
            autoFocus
            required
            onChange={this.handleChange}
          />
          <label htmlFor="password"><b>Password</b></label>
          <TextInput
            name="password"
            placeholder="Password"
            type="password"
            autoFocus
            required
            onChange={this.handleChange}
          />
          <label htmlFor="displayname"><b>Display Name</b></label>
           <TextInput
            name="displayName"
            placeholder="Display Name"
            autoFocus
            required
            onChange={this.handleChange}
          />
          <Button marginRight={190} appearance="primary" intent="none" type='submit'>Create Profile</Button>
          <Button marginRight={230} appearance="minimal" intent="danger" onClick={this.props.closePopup}>Close</Button>
        </form>
        {loading && <Spinner name="circle" color="blue" />}
        {error && <p style={{ color: "red" }}>{error.message}</p>}
      </div>
      </div>
    );
  }
}

export default RegistrationForm;
