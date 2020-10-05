import React from "react";
import LoginForm from "../components/loginForm/LoginForm";
import Menu from "../components/menu/Menu";
import { userIsNotAuthenticated } from "../redux/HOCs";
import RegistrationForm from "../components/registrationForm/RegistrationForm";
import { Button } from "evergreen-ui"


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showPopup: false };
  }

  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }
  render() {
    const home = {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: '10vh'
    }
    const note = {
      background: '#F26699',
      boxShadow: '5px 5px 7px rgba(33,33,33,.7)',
      padding: '0 20px 20px 20px'
    }


    return (
        <div style={home}>
          <div style={note} >
          <Menu />
          <h2>The perfect PostIt publishing platform</h2>
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
        </div>
    );
  }
}

export default userIsNotAuthenticated(Home);
