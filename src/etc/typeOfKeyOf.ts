type Point = { x: number; y: number };
type P = keyof Point; // type '"x" || "y"'

type Language = "EN" | "ES";
const userLanguage: Language = "EN";
const preferences = { language: userLanguage, theme: "light" };

console.log(typeof preferences); // "object"
type Preferences = typeof preferences; // type '{language: 'EN''; theme: string; }'
