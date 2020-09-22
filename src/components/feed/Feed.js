import React, { Component } from 'react';

//import our service
import DataService from '../../dataService';

import UserCard from '../userCard/UserCard';
import AvatarImage from '../Avatarimage/avatarImage';
import '../feed/Feed.css';

class Feed extends Component {
    //set our initial state and set up our service as this.client on this component
    constructor(props) {
        super(props);
        this.client = new DataService();
        this.state = {
            feed: [],
            userfeed: [],
            createdAt: ""
        }
    }



    //get a new message from the API and add it to the data object in state
    getMessages() { //catalyst to change state by getting messages//
        return this.client.getMessages().then(result => {
            const data = result.data.messages

            this.setState({ feed: data })
        })
    }
    getUserMessages = () => {
        //get all message and filter
        const loginData = JSON.parse(localStorage.getItem("login"))

        this.client.getMessages().then(result => {
            const userData = result.data.messages.filter(messages => loginData.result.username === messages.username)
            this.setState({ userfeed: userData })
            console.log(result.data.messages)
        })
    }

    // getTime = () => {
    //     //get all message and filter
    //     const postTime = JSON.parse(userfeed.getItem("createdAt"))
    //     this.setState({ createdAt })

    //when the component mounts, get the first message
    componentDidMount() {
        this.getMessages()
        this.getUserMessages()
        // this.getTime()
    }

    // Function to display data.text .username

    render() {
        return (
            <div className="avatar">
                <p>AVATAR</p>
                <UserCard />
            {/* </div> */}
            {/* // grab avatar pic here */}
    
  
        <div>
            
                    {/* <img src={this.avatarLocation}></img> */}
                    {this.state.feed.map(message =>
                        <ul className="feed">
                            <AvatarImage username={message.username} />
                            <h3>{ message.username }</h3><h5>{message.createdAt}</h5><p>{message.text}</p>
                        </ul>)}
                    
    
                    {/* {this.state.feed.map(message =>
                        <li></li>)} */}
</div>
                </div>
        )
    }
}
export default Feed;