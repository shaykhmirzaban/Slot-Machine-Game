import React from "react";

const EmojiCard = (props) => {
  let text =
    props.emoji1 === props.emoji2 && props.emoji2 === props.emoji3
      ? "Match"
      : "Not Match";

  return (
    <div className="box1">
      <p>
        {props.emoji1} {props.emoji2} {props.emoji3}
      </p>
      <p>{text}</p>
    </div>
  );
};

export default EmojiCard;
