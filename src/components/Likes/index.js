import React, { useState } from "react";
import DataService from "../../dataService";
import {Button, ThumbsUpIcon} from 'evergreen-ui'

const Likes = ({ message }) => {
  const [likeCount, setLikeCount ] = useState(message.likes.length);
  const client = new DataService();
  const username = message.username;

  const handleLike = () => {
    const letter = {
        messageId: message.id
    }
    if (message.likes.some((like) => like.username === username))
        console.log('next')
      return client.postLike(letter)
      .then((like) => {
          setLikeCount(likeCount + 1)
      });
  };

  return (
    <div className="Likes">
      <Button
        onClick={() => handleLike()}
        appearance="primary"
        marginY={10}
        marginRight={10}
        iconBefore={ThumbsUpIcon}
      >
        Like
      </Button>
    {likeCount}
    </div>
  );
};

export default Likes;
