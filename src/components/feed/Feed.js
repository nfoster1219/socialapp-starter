import React, { Component } from 'react';

//import our service
import DataService from '../../dataService';

import UserCard from '../userCard/UserCard';
import AvatarImage from '../Avatarimage/avatarImage';
import '../feed/Feed.css';
// import Scroll from './Scroll'

class Feed extends Component {
    //set our initial state and set up our service as this.client on this component
    constructor(props) {
        super(props);
        this.client = new DataService();
        this.state = {
            feed: [],
            userfeed: [],
            createdAt: "",
            likes: [],
        }
    }
    //handleLikes()

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
    //when the component mounts, get the first message
    componentDidMount() {
        this.getMessages()
        this.getUserMessages()
        // this.getTime()
    }


    render() {
        return (
            
            <div className="avatar">
                <p>AVATAR</p>
                <UserCard />

                {/* // grab avatar pic here */}


                {this.state.feed.map(message =>
                    <ul className="feed">
                        <AvatarImage username={message.username} />
                        <h4>{message.username}</h4><h5>{message.createdAt}</h5><p>{message.text}</p>
                        <button>
                            👍 Like
                            </button>

                        {/* // likes: {counta} v  */}
                        
                        </ul>) }
                        
                </div>
                )
                }
               

                

            }
export default Feed;