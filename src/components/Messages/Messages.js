import React from "react";
import Likes from "../Likes";
import AvatarImage from "../Avatarimage/avatarImage";

const Messages = ({ feed }) => {
  const colorPicker = () => {
    const colorArray = ["#F26699", "#04ADBF", "#EDF257", "#F2E8FC", "#D9BABA"];
    const rand = Math.floor(Math.random() * 5);
    return colorArray[rand];
  }
  return feed.map((message) => (
    <div
      className="message"
      style={{ backgroundColor: colorPicker() }}
      key={message.id}
    >
      <AvatarImage username={message.username} />
      <h4>{message.username}</h4>
      <p>{message.text}</p>
      <h5>{message.createdAt}</h5>
      <Likes message={message} />
    </div>
  ));
};

export default Messages;
