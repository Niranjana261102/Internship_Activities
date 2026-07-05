//knowledge.ts

interface KnowledgeEntry {
    pattern: RegExp;
    answer: string | (() => string);
}

export const KNOWLEDGE: KnowledgeEntry[] = [
  { pattern: /\bhello\b|\bhi\b|\bhey\b/i, answer: "Hey there! Ask me anything, or type /quiz to start a TypeScript quiz." },
  { pattern: /\btime\b/i, answer: () => `It's ${new Date().toLocaleTimeString()}.` },
  { pattern: /\bjoke\b/i, answer: "Why do programmers prefer dark mode? Because light attracts bugs." },
  { pattern: /\bbye\b|\bgoodbye\b/i, answer: "Goodbye! Type /quit to leave." },
  { pattern: /\bwhat( i|')?s typescript\b|\bwhat is typescript\b/i, answer: "TypeScript is a typed superset of JavaScript that compiles to plain JavaScript." },
  { pattern: /\btype\b.*\binterface\b|\binterface\b.*\btype\b/i, answer: "Both describe object shapes. Interfaces can be reopened and extended; type aliases can also represent unions, primitives, and tuples." },
  { pattern: /\bwhat is any\b|\bany type\b/i, answer: "`any` disables type checking for a value. It's an escape hatch — prefer `unknown` when you can." },
  { pattern: /\bwhat is unknown\b/i, answer: "`unknown` is a type-safe alternative to `any` — you must narrow it before using it." },
  { pattern: /\binstall typescript\b|\bhow (do|to) i install\b/i, answer: "Run `npm install -g typescript` for a global install, or `npm install -D typescript` per project." },
  { pattern: /\bgeneric\b/i, answer: "A generic lets a function, class, or type work with multiple types while preserving type information, e.g. `function identity<T>(x: T): T`." },
  { pattern: /\btsc\b/i, answer: "`tsc` is the TypeScript compiler. Run it with a `tsconfig.json` to type-check and emit JavaScript." },
  { pattern: /\btuple\b/i, answer: "A tuple is an array with a fixed length and known types per position, e.g. `[string, number]`." },
  { pattern: /\benum\b/i, answer: "An enum is a named set of constant values, e.g. `enum Direction { Up, Down, Left, Right }`." },
  { pattern: /\bhelp\b/i, answer: "Type a question, or use /topics to see what I can answer and /quiz to test yourself." },
];

export const getAnswer = (text: string): string | null => {
  const match = KNOWLEDGE.find((entry) => entry.pattern.test(text));
  if (!match) return null;
  return typeof match.answer === "function" ? match.answer() : match.answer;
};
