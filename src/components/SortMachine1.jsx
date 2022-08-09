import React from "react";
import EmojiCard from "./EmojiCard";
import "../style/SortMachine1.css";

let emoji = [
  "😊",
  "😆",
  "🍎",
  "🍌",
  "👩‍❤️‍👩",
  "🤣",
  "😍",
  "😎",
  "🍰",
  "🍓",
  "👨‍💻",
  "🦸‍♀️",
  "🧛‍♂️",
  "🧙‍♂️",
  "🧙‍♀️",
];

let totalEmoji = [];

for (let i = 0; i < emoji.length; i++) {
  totalEmoji.push(Math.floor(Math.random() * emoji.length));
}

let [
  emoji1,
  emoji2,
  emoji3,
  emoji4,
  emoji5,
  emoji6,
  emoji7,
  emoji8,
  emoji9,
  emoji10,
  emoji11,
  emoji12,
  emoji13,
  emoji14,
  emoji15,
] = totalEmoji;

function SortMachine1() {
  return (
    <React.StrictMode>
      <section className="slotMachin">
        <EmojiCard
          emoji1={emoji[emoji1]}
          emoji2={emoji[emoji2]}
          emoji3={emoji[emoji3]}
        />
        <EmojiCard
          emoji1={emoji[emoji4]}
          emoji2={emoji[emoji5]}
          emoji3={emoji[emoji6]}
        />
        <EmojiCard
          emoji1={emoji[emoji7]}
          emoji2={emoji[emoji8]}
          emoji3={emoji[emoji9]}
        />
        <EmojiCard
          emoji1={emoji[emoji10]}
          emoji2={emoji[emoji11]}
          emoji3={emoji[emoji12]}
        />
        <EmojiCard
          emoji1={emoji[emoji13]}
          emoji2={emoji[emoji14]}
          emoji3={emoji[emoji15]}
        />
      </section>
    </React.StrictMode>
  );
}

export default SortMachine1;
