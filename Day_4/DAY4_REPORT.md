# Day 4 Report – Build a Typed In-Memory Mock API Module

## Objective

Build a typed in-memory Mock API using TypeScript and implement CRUD (Create, Read, Update, Delete) operations.

## What I Implemented

* Created a typed Mock API module.
* Used TypeScript interfaces for data models and API responses.
* Stored data in an in-memory array.
* Implemented CRUD operations:

  * Create a new question
  * Read all questions
  * Read a question by ID
  * Update a question
  * Delete a question

* Used generic `ApiResponse<T>` for consistent responses.
* Used `Partial<Knowledge>` for updating selected fields.
* Integrated the Mock API with the existing QA Bot using new commands.

## Commands Added

* /help - Show available commands
* /topics - Show supported topics
* /quiz - Start the quiz
* /all - Show all questions
* /get <id> - Get a question by ID
* /create - Create a sample question
* /update <id> - Update a question
* /delete <id> - Delete a question
* /quit - Exit the chatbot

## Result

Successfully built a reusable typed Mock API module and integrated it with the QA Bot. All CRUD operations are working correctly using in-memory data.
