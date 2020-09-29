import {  Button, ThumbsUpIcon } from "evergreen-ui"
on the render part:
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
export default Likes