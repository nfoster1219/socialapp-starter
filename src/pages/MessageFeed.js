import React from "react"
import Menu from"../components/menu/Menu"
import Message from"../components/message/Message"
import BackendService from "../dataService"

class MessageFeed extends React.Component {
    state={ messages:[] }

    componentDidMount(){
        new BackendService()
        .getRecentMessages()
        .then(messages =>{
            this.setState({messages})
        })
    }
    
    render () {
        if (this.state.messages.length === 0){
        return (
                <div className="MessageFeed">
                    <Menu />
                    <h1>Message Feed</h1>
                    <h2>Loading..</h2>
                </div>
            )
        }

        return (
            <div className="MessageFeed">
                <Menu />
                <h1>MessageFeed</h1>
                <ul>
                   {/* <Message {...this.state.messages[0]} /> */}
                   {this.state.messages.map(msg=> <Message key={msg.id}{...msg}/> )}
                </ul>
            </div>
        )
    }

    
}

export default MessageFeed;