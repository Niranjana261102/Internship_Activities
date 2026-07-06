// mock-data.ts

export interface Knowledge {
  id: number;
  question: string;
  answer: string;
}

export let knowledgeData: Knowledge[] = [
  {
    id: 1,
    question: "What is TypeScript?",
    answer: "TypeScript is a typed superset of JavaScript that compiles to plain JavaScript."
  },
  {
    id: 2,
    question: "What is any?",
    answer: "`any` disables type checking for a value. It's an escape hatch — prefer `unknown` when you can."
  },
  {
    id: 3,
    question: "What is unknown?",
    answer: "`unknown` is a type-safe alternative to `any` — you must narrow it before using it."
  },
  {
    id: 4,
    question: "What is the difference between type and interface?",
    answer: "Both describe object shapes. Interfaces can be reopened and extended, while type aliases can also represent unions, primitives, and tuples."
  },
  {
    id: 5,
    question: "How do I install TypeScript?",
    answer: "Run `npm install -g typescript` for a global install, or `npm install -D typescript` per project."
  },
  {
    id: 6,
    question: "What is a generic?",
    answer: "A generic lets a function, class, or type work with multiple types while preserving type information."
  },
  {
    id: 7,
    question: "What is tsc?",
    answer: "`tsc` is the TypeScript compiler. Run it with a `tsconfig.json` to type-check and compile TypeScript."
  },
  {
    id: 8,
    question: "What is a tuple?",
    answer: "A tuple is an array with a fixed length and known types for each position."
  },
  {
    id: 9,
    question: "What is an enum?",
    answer: "An enum is a named set of constant values."
  },
  {
    id: 10,
    question: "How can I get help?",
    answer: "Type a question, or use /topics to see available topics and /quiz to test yourself."
  },
  {
    id: 11,
    question: "How do I greet the chatbot?",
    answer: "You can say hello, hi, or hey to start a conversation."
  },
  {
    id: 12,
    question: "Can you tell me a joke?",
    answer: "Why do programmers prefer dark mode? Because light attracts bugs."
  },
  {
    id: 13,
    question: "How do I exit the chatbot?",
    answer: "Type /quit or say goodbye to end the chat."
  }
];