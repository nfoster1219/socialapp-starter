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
          alignItems='center'
          justifyContent='flex-start'
          flexDirection='row'
          flexWrap='wrap'
          height='12vh'
          width='100%'
          marginTop='10px'
          border='default'
        >
          <AvatarImage 
            username={store.getState().auth.login.result.username}
            size={64}
            alignSelf="flex-start"
          />

          <form id="PostMessage" onSubmit={this.handleMessage}>

          <Textarea
            name="PostBox"
            placeholder="What's up?"
            resize='none'
            height='11vh'
            width='20vw'
            value={this.state.value}
            onChange={e => this.setState({ value: e.target.value })}
          />

          <Button
            appearance='primary'
            marginBottom='2vh'
            marginLeft='10px'
            alignSelf='flex-end'> 
            Post
          </Button>

          </form>
        </Pane>
    )
}}






export default SendPost;