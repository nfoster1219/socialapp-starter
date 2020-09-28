import React from "react";

import DataService from "../../dataService";



class UserCard extends React.Component {
    constructor(props) {
        super(props)

        this.client = new DataService();

        this.state = {
            formData: {
                displayName: "",
                about: "",
                password: ""
            },

            "user": {
                "pictureLocation": null,
                "username": "null",
                "displayName": "null",
                "about": "null",
                "googleId": null,
                "createdAt": "null",
                "updatedAt": "null",

            },
            "statusCode": null
        }
    }
    componentDidMount() {
        this.client.getSingleUser(this.props.username).then((userData) => {
            this.setState(userData)
        })
    }
    handleChange = event => {
        const newformData = { ...this.state.formData };
        newformData[event.target.name] = event.target.value;

        this.setState({ formData: newformData });
    };

    handleUpdateUser = event => {
        event.preventDefault()
        this.client.updateUser(this.state.user.username, this.state.formData)
//This doesn't work for me when I type on page- error line 47
    }


    render() {
        return (
            <div className="usercard">
                <h3>User Name: {this.state.user.username}</h3>
                <h3>Display Name: {this.state.user.displayName}</h3>
                <h3>About: {this.state.user.about}</h3>
                <img />

                <form id="Profile-form" onSubmit={this.handleUpdateUser}>
                    <label htmlFor="displayName">displayName</label>
                    <input
                        type="text"
                        name="displayName"
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

                    <label htmlFor="about">About</label>
                    <input
                        type="text"
                        name="about"
                        required
                        onChange={this.handleChange}
                    />
                    <button type="submit">
                        Update User Info
          </button>
                </form>
            </div>
        );
    }
}

export default UserCard;



