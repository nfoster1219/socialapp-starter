// // CODE FROM DMG'S DEMO ON 9.21.20 AM SESSION//



import React from "react";
import BackendService from "../../../src/dataService";

class MessageFeed extends React.Component {
    state = { messages: [] }


    componentDidMount() {
        new BackendService()
            .getRecentMessages()
            .then(messages => {
                console.log(messages)
                this.setState({ messages })
            })
    }



    render() {
        if (this.state.messages.length === 0){
            
        }
        return (
            <div className="MessageFeed">

                <h1>MEssage Feed</h1>
                {/* <h3>something loading...</h3> */}
                <ul>
                    <li>{this.state.message[0].text}</li>
                </ul>
            </div>
        )
    }
}

export default MessageFeed