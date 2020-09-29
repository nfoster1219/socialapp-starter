import React from "react";
import DataService from "../../dataService";
import { Button, Pane, TextInput } from 'evergreen-ui';
import UploadPicture from '../uploadPicture/index';
import AvatarImage from '../Avatarimage/avatarImage'


class UserCard extends React.Component {
    constructor(props) {
        super(props)
        

        this.client = new DataService();

        this.state = {
            
                userName: "",
                displayName: "",
                about: "",
                password: "",
                joinedOn: ""

        }
    }
    componentDidMount() {
        this.getSingleUser();
        }
    

    getSingleUser() {
        let loginObject = JSON.parse(localStorage.getItem("login"))
        this.client.getSingleUser(loginObject.result.username).then((response) =>
          this.setState({
            userName: response.data.user.username,
            about: response.data.user.about,
            createdAt: response.data.user.createdAt,
            displayName: response.data.user.displayName,
            
          
          }),
        );
        
      }

    
    handleUpdateUser = () => {
        let loginObject = JSON.parse(localStorage.getItem("login"))
        let updateData = {
          password: this.state.password,
          about: this.state.about,
          displayName: this.state.displayName,
        };
        this.client.updateUser(loginObject.result.username, updateData);
        this.setState({ checked: false });
        
      };
    
      handleChange = (event) => {
        
        this.setState({ [event.target.name]: event.target.value });
      };
    
      handleSwitch = () => {
        this.setState({ checked: !this.state.checked });
      };


    render() {
        return (
            <Pane background="yellowTint" border="default" width={420} height={620} marginRight={16} float="left" className="usercard" >
              
              
                <h3>User Name: {this.state.userName}</h3>
                <h3>Display Name: {this.state.displayName}</h3>
                <h3>About: {this.state.about}</h3>
                <h5>Joined On: {this.state.createdAt}</h5>

                <UploadPicture />

                <form id="Profile-form" onSubmit={this.handleUpdateUser}>
                    <label htmlFor="displayName">Display Name</label>
                    <TextInput width="100%" marginBottom={16}
                        type="text"
                        name="displayName"
                        placeholder="Share your Name"
                        autoFocus
                        required
                        onChange={this.handleChange}
                    />
                    <br/>
                    <label htmlFor="about">About</label>
                    <TextInput width="100%" marginBottom={16}
                        type="text"
                        name="about"
                        placeholder="Tell us about you!!"
                        required
                        onChange={this.handleChange}
                    />
                    <Button  marginRight={16} intent="success" marginBottom={16} type="primary"  onClick={this.handleUpdateUser}>
                        Update User
                    </Button>
                </form>
                <form id="Passward-form" onSubmit={this.handleUpdateUser}>
                    
                    <label htmlFor="password">Password</label>
                    <TextInput width="100%" marginBottom={16}
                        type="password"
                        name="password"
                        placeholder="Reset your Password"
                        required
                        onChange={this.handleChange}
                    />
                    <Button marginRight={16} intent="danger" type="primary"  onClick={this.handleUpdateUser}>
                        Update Password
                    </Button>
                </form>
            </Pane>
        );
    }
}

export default UserCard;



