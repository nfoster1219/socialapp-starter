import React from "react"
import "./Message.css"
import {  Button, ThumbsUpIcon } from "evergreen-ui"
import DataService from "../../dataService"





class Message extends React.Component{
    state = { likeCount: this.props.likes.length}

    handleLike = ()=> {
    const dataService = new DataService()
    const username = dataService.getUsername()
    if(this.props.likes.some(like=>like.username === username))
     return 
    
    dataService.postLike(this.props.id).then(like =>{
        this.setState(latestState => ({ likeCount: latestState.likeCount +1}))
    })
}

render (){
    return (
    <div className="Message"> 
    {this.props.createAt}  {this.props.username} 
    {''} <i>posted</i>:<br />" {this.props.text}" 
     <br /> 
     <Button onClick={this.handleLike} appearance="primary" marginY={10} marginRight={10} iconBefore={ThumbsUpIcon} >Like</Button>
     {this.props.likes.length}
     <br />

    </div>
    )
}
}

export default Message;

