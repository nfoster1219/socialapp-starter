import React from "react";
import LoginForm from "../components/loginForm/LoginForm";
import Menu from "../components/menu/Menu";
import Layout from '../components/Layout/index'
import { userIsNotAuthenticated } from "../redux/HOCs";
import RegistrationForm from "../components/registrationForm/RegistrationForm";
import { Button } from "evergreen-ui"


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showPopup: true };
  }

  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }
  render() {
    return (
        <div className="Home">
          <Menu />
          <h2>Your favorite microblogging platform</h2>
          <LoginForm />
          <hr />
          
          <Button onClick={this.togglePopup.bind(this)}>Create Profile</Button>

          {this.state.showPopup ?
            <RegistrationForm
              text='Click "Close Button" to hide popup'
              closePopup={this.togglePopup.bind(this)}
            />
            : null
          }
        </div>
    );
  }
}

export default userIsNotAuthenticated(Home);
