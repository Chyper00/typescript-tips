// emoji interface extension

interface EmojiInterface {
  name: string;
  emoji: string;
}

interface ExtendedEmojiInterface extends EmojiInterface {
  description: string;
}

const emoji: ExtendedEmojiInterface = {
  name: "thumbs up",
  emoji: "👍",
  description: "A gesture of approval or encouragement.",
};

console.log(`${emoji.name} ${emoji.emoji}: ${emoji.description}`);
