//quiz-questions.ts

export interface Question {
    question: string;
    choices: string[];
    answer: number;
}

export const questions: Question[] = [
  {
    question: "What command compiles a TypeScript project using tsconfig.json?",
    choices: ["node build", "tsc", "ts-run", "npm compile"],
    answer: 1,
  },
  {
    question: "Which type is a type-safe alternative to `any`?",
    choices: ["never", "unknown", "void", "object"],
    answer: 1,
  },
  {
    question: "Which keyword declares a reusable object shape that can be extended with `extends`?",
    choices: ["type", "interface", "shape", "struct"],
    answer: 1,
  },
  {
    question: "What does the `?` mean after a property name, e.g. `age?: number`?",
    choices: ["It's readonly", "It's optional", "It's a generic", "It's private"],
    answer: 1,
  },
  {
    question: "Which type represents a function that never returns?",
    choices: ["void", "undefined", "never", "null"],
    answer: 2,
  },
  {
    question: "What is the fixed-length, positionally-typed array type called?",
    choices: ["array", "tuple", "list", "vector"],
    answer: 1,
  },
  {
    question: "Which utility type makes all properties of T optional?",
    choices: ["Required<T>", "Readonly<T>", "Partial<T>", "Pick<T>"],
    answer: 2,
  },
  {
    question: "What symbol is used to declare a generic parameter on a function?",
    choices: ["()", "[]", "{}", "<>"],
    answer: 3,
  },
];
