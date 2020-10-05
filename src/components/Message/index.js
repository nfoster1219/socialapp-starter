import React from 'react'
import Likes from "../Likes";
import AvatarImage from "../Avatarimage/avatarImage";

const Message = ({input}) => {
    const colorPicker = () => {
        const colorArray = ["#F26699", "#04ADBF", "#EDF257", "#F2E8FC", "#D9BABA"];
        const rand = Math.floor(Math.random() * 5);
        return colorArray[rand];
      }
    const dateBuilder = (date) => {
        const month= ["January","February","March","April","May","June","July",
            "August","September","October","November","December"]
        const rDate = date.slice(10).split('-')
        console.log(rDate)
        return `${month[rDate[1]]} ${rDate[2]}, ${rDate[0]}`
    }

    return(
        <div
        className="message"
        style={{ backgroundColor: colorPicker() }}
        key={input.id}
        >
        <AvatarImage username={message.username} />
        <h4>{input.username}</h4>
        <p>{input.text}</p>
        <h5>{dateBuilder(input.createdAt)}</h5>
        <Likes message={input} />
        </div>
    )
}

export default Message