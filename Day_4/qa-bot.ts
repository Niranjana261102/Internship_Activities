#!/usr/bin/env node
//qa-bot.ts

import readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import { getAnswer } from "./lib/knowledge";
import { questions } from "./lib/quiz-questions";
import { parseCommand } from "./lib/command";
import {
  getAllQuestions,
  getQuestionById,
  createQuestion,
  updateQuestion,
  deleteQuestion
} from "./lib/mock-api";


const printHelp = (): void => {
  console.log(`Commands:
  /topics             List the kinds of questions I can answer
  /quiz               Start a TypeScript multiple-choice quiz

  /all                Show all questions
  /get <id>           Get a question by ID
  /create             Add a sample question
  /update <id>        Update a question
  /delete <id>        Delete a question

  /help               Show this help message
  /quit               Leave the chat

Type any question to get an answer.`);
};

const printTopics = (): void => {
  console.log("I can answer questions about: greetings, time, jokes, TypeScript basics (type vs interface, any, unknown, generics, tsc, tuple, enum).");
};

const shuffle = <T>(array: T[]): T[] => { // It works with any type of array.
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
};

const runQuiz = async (rl: readline.Interface): Promise<void> => {
  const shuffled = shuffle(questions);
  let score = 0;

  console.log("\nStarting the TypeScript quiz!");

  for (const [index, q] of shuffled.entries()) {
    console.log(`\nQ${index + 1}/${shuffled.length}: ${q.question}`);
    q.choices.forEach((choice: string, i: number) => {
      console.log(`  ${i + 1}. ${choice}`);
    });

    const answer = await rl.question("Your answer (1-4): ");
    const choiceIndex = Number(answer.trim()) - 1;

    if (choiceIndex === q.answer) {
      console.log("Correct!");
      score++;
    } else {
      console.log(`Wrong. The correct answer was: ${q.choices[q.answer]}`);
    }
  }

  console.log(`\nQuiz finished! Your score: ${score}/${shuffled.length}\n`);
};

const main = async (): Promise<void> => {
  const rl = readline.createInterface({ input, output });

  console.log("Welcome to qa-bot-cli! Ask me a question or type /help for commands.\n");

  while (true) {
    const line = await rl.question("you> ");
    if (!line.trim()) continue;

    const input = line.trim();

    if (input === "/all") {
      console.log(getAllQuestions());
      continue;
    }

    if (input.startsWith("/get ")) {
      const id = Number(input.split(" ")[1]);
      console.log(getQuestionById(id));
      continue;
    }

    if (input === "/create") {
      console.log(
        createQuestion({
          id: 14,
          question: "What is interface?",
          answer: "Interface defines object structure."
        })
      );
      continue;
    }

    if (input.startsWith("/update ")) {
      const id = Number(input.split(" ")[1]);

      console.log(
        updateQuestion(id, {
          answer: "Updated answer from qa-bot."
        })
      );

      continue;
    }

    if (input.startsWith("/delete ")) {
      const id = Number(input.split(" ")[1]);

      console.log(deleteQuestion(id));
      continue;
    }

    const parsed = parseCommand(line);

    if (!parsed.isCommand) {
      const answer = getAnswer(parsed.text!);
      console.log(`bot> ${answer ?? "Sorry, I don't know that one yet. Try /topics or /quiz."}`);
      continue;
    }

    switch (parsed.cmd) {
      case "help": {
        printHelp();
        break;
      }
      case "topics": {
        printTopics();
        break;
      }
      case "quiz": {
        await runQuiz(rl);
        break;
      }
      case "quit":
      case "exit": {
        console.log("Goodbye!");
        rl.close();
        return;
      }
      default: {
        console.log(`Unknown command: /${parsed.cmd}. Type /help for a list of commands.`);
      }
    }
  }
};

main().catch((err: unknown) => {
    const error = err as NodeJS.ErrnoException;

    if (error.code === "ABORT_ERR") {
        console.log("\nGoodbye!");
    } else {
        throw err;
    }
});