import React, { Component } from "react";

//import our service
import DataService from "../../dataService";
import Messages from '../Messages/Messages'
import SendPost from '../SendPost/SendPost'
import './Feed.css';
import {Pane} from 'evergreen-ui'
import { store } from "../../redux";
// import Scroll from '../feed/Scroll'

class Feed extends Component {
  //set our initial state and set up our service as this.client on this component
  constructor(props) {
    super(props);
    this.client = new DataService();
    this.filterFlag = false
    this.state = {
      feed: [],
      loading: false,
      page: 0,
      prevY: 0
    };
  }
  filterMessages() {
    this.setState({
      feed: this.state.feed.filter(message => 
        message.username === window.location.pathname.split('/')[2])
      // message.username === store.getState().auth.login.result.username)
      })
  }

  //get a new message from the API and add it to the data object in state
  getMessages(number) {
    this.setState({ loading: true })
    this.filterFlag = this.props.flag
    return this.client.getMessages(number)
    .then((result) => {
      const data = result.data.messages;
      this.setState({ feed: data });
      if(this.filterFlag) {
        this.filterMessages()
      }
      this.setState({ loading: false})
    });
  }


  handleObserver(entities, observer) {
    const y = entities[0].boundingClientRect.y;
    if (this.state.prevY > y) {
      this.getMessages(this.state.feed.length + 20)
      this.setState({ page: this.state.page + 1})
    }
    this.setState({prevY: y})
  }

  //when the component mounts, get the first message
  componentDidMount() {
    if(this.filterFlag) {
      this.getMessages();
    }
    this.getMessages(20);

    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 1.0
    }
    this.observer = new IntersectionObserver(
      this.handleObserver.bind(this),
      options
    )
    this.observer.observe(this.loadingRef)
  }





  render() {
      // Additional css
      const loadingCSS = {
        height: "100px",
        margin: "30px"
      };
  
      // To change the loading icon behavior
      const loadingTextCSS = { display: this.state.loading ? "block" : "none" };
      let post = <SendPost feed={this.state.feed} update={this.getMessages} />
      if(this.filterFlag) {
        post = null
      } else {
        post = <SendPost feed={this.state.feed} update={this.getMessages} />
      }
    return (
      <Pane>
        {post}
        <Messages feed={this.state.feed} />
        <div
          ref={loadingRef => (this.loadingRef = loadingRef)}
          style={loadingCSS}
        >
          <span style={loadingTextCSS}>Loading...</span>
        </div>
      </Pane>
    );
  }
}
export default Feed;
