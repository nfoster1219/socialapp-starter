import React from "react"
import { Pane, Button, Textarea } from "evergreen-ui"
import DataService from "../../dataService"
import AvatarImage from "../Avatarimage/avatarImage"
import { store } from "../../redux"


class SendPost extends React.Component {
  constructor(props) {
  super(props)
  this.state = {value:""}
  this.client = new DataService(); 
  }

  handleMessage = e => {
    e.preventDefault();
    const message = {
      text: this.state.value
    }
    this.client.postMessage(message)
    }



render() {
    return (
        <Pane
          display='flex'
          alignItems='flex-start'
          justifyContent='flex-start'
          flexDirection='row'
          flexWrap='wrap'
          background='tint2'
          height='110px'
          width='100%'
          border='default'
    
        >
          <AvatarImage 
            username={store.getState().auth.login.result.username}
            size={64}
            alignSelf="flex-start"
          />

          <form id="PostMessage" style={{height: '100px'}}onSubmit={this.handleMessage}>

          <Textarea
            name="PostBox"
            placeholder="What's up?"
            resize='none'
            height='100px'
            width='400px'
            value={this.state.value}
            onChange={e => this.setState({ value: e.target.value })}
          />

          <Button
            appearance='primary' 
            marginLeft='10px'
            bottom="10px"
          > 
            Post
          </Button>

          </form>
        </Pane>
    )
}}






export default SendPost;