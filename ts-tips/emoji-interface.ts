// emoji interface extension with utility types

// Define the base interface for an emoji
interface EmojiInterface {
  name: string;
  emoji: string;
}

// Extend the base interface to include a description
interface ExtendedEmojiInterface extends EmojiInterface {
  description: string;
}

// Define additional properties for the emoji
type AdditionalEmojiProps = {
  category: string;
  usage: string;
};

// Combine all properties into one object
type CompleteEmoji = ExtendedEmojiInterface & AdditionalEmojiProps;

// Create an emoji object with all properties
const emoji: CompleteEmoji = {
  name: "thumbs up",
  emoji: "👍",
  description: "A gesture of approval or encouragement.",
  category: "Emotions",
  usage: "To express agreement or satisfaction.",
};

// Utility types

// Create a type containing only the preview properties of an emoji
type EmojiPreview = Pick<CompleteEmoji, "name" | "emoji">;

// Create a type containing all properties except name and emoji
type EmojiInfo = Omit<CompleteEmoji, "name" | "emoji">;

// Create separate objects for emoji preview and emoji info
const emojiPreview: EmojiPreview = {
  name: emoji.name,
  emoji: emoji.emoji,
};

const emojiInfo: EmojiInfo = {
  description: emoji.description,
  category: emoji.category,
  usage: emoji.usage,
};

// Output the preview and info objects
console.log("Emoji Preview:", emojiPreview);
console.log("Emoji Info:", emojiInfo);
