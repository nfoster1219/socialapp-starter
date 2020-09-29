import React, { Component } from 'react';

//import our service
import DataService from '../../dataService';

import UserCard from '../userCard/UserCard';
import AvatarImage from '../Avatarimage/avatarImage';
import '../feed/Feed.css';
// import Scroll from '../feed/Scroll'

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
    // handleLikes() {
    //     let incrementButton = document.querySelector("#increment");
    //     let decrementButton = document.querySelector("#decrement");
    //     let counter = document.querySelector("#counter");
    //     console.log("+ button clicked");
    //     incrementButton.addEventListener("click", function() {

    //           // Calculate the new value for our counter:
    //         let newCounterValue = Number(counter.innerHTML) + 1;
    //         if(newCounterValue >= 10) {         // WHAT IS THIS? Check out "IF Statements" in the Useful Resources section.
    //         counter.style.color = "red";
    //       }

    //         counter.innerHTML = newCounterValue;
    //       })
    //     // Calculate the new value for our counter:
    //     let newCounterValue = { messages.likes} + 1;
    //     counter.innerHTML = newCounterValue;


//get a new message from the API and add it to the data object in state
getMessages(){ 
    return this.client.getMessages().then(result => {
        const data = result.data.messages;
        this.setState({ feed: data })
    })
}
// getLikes() { //catalyst to change state by getting messages//
//     return this.client.getMessages().then(result => {
//         const likes = result.data.messages.likes;
//         this.setState({ likes: likes.length })
//     })
// }
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
    // this.getLikes()
}


render() {
    return (

        // <div className="avatar">
        //     <p>AVATAR</p>
            <div className="User"><UserCard />
            {/* </div> */}
            {this.state.feed.map(message =>
                <ul className="feed">
                    <AvatarImage username={message.username} />
                    <h4>{message.username}</h4><h5>{message.createdAt}</h5><p>{message.text}</p>
                    <button className="likes">
                        👍 Like
                            </button> Likes: {message.likes.length}
                    {/* // likes: {counta}   */}
                </ul>)}


            {/* //experiment */}

            {this.state.feed.map(message =>
                <ul className="feed2">
                    <AvatarImage username={message.username} />
                    <h4>{message.username}</h4><h5>{message.createdAt}</h5><p>{message.text}</p>
                    <button className="like">
                        👍 Like
                            </button>
                    <br />

                    <br />


                </ul>)}

        </div>
    )
}
}
export default Feed;