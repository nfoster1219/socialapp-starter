import React from "react"
import { Pane, Avatar, Button, Textarea } from "evergreen-ui"
import DataService from "../../dataService"


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
          height='12vh'
          width='60vw'
          marginTop='10px'
          background='tint2'
        >
          <Avatar isSolid name="Tyler Ammons" size={40}
            marginRight='10px'
            paddingTop='10px'/>

          <form id="PostMessage" onSubmit={this.handleMessage}>

          <Textarea
            name="PostBox"
            placeholder="What's up?"
            height='8vh'
            width='40vw'
            value={this.state.value}
            onChange={e => this.setState({ value: e.target.value })}
            
          />
          <Button
            appearance='primary'
            float='right'
            height='8vh'
          > Post
          </Button>

          </form>
        </Pane>
    )
}}






export default SendPost;