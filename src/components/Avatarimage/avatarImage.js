import React from "react";
import { Avatar } from "evergreen-ui";

class AvatarImage extends React.Component {
  constructor(props) {
    super(props);
    this.avatarLocation = `https://socialapp-api.herokuapp.com/users/${this.props.username}/picture`;
    this.size = this.props.size ? this.props.size : 40
  }

  render() {
    return <Avatar isSolid 
        src={this.avatarLocation} 
        size={this.size} 
        margin='10px'
    />;
  }
}

export default AvatarImage;
