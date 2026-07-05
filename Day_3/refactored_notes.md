# Day 3 - JavaScript to TypeScript Refactoring

## Changes Made

### 1. Converted JavaScript files to TypeScript
- qa-bot.js → qa-bot.ts
- knowledge.js → knowledge.ts
- commands.js → commands.ts
- quiz-questions.js → quiz-questions.ts

### 2. Added Type Annotations
- Added types to variables.
- Added types to function parameters.
- Added return types to functions.

### 3. Created Interfaces
Created interfaces to define the structure of objects.

Interfaces added:
- Question
- ParsedCommand
- KnowledgeEntry

### 4. Used Generics
Converted the shuffle() function into a generic function.

Example:
const shuffle = <T>(array: T[]): T[]

This allows the function to work with any type of array.

### Functionality

The application logic and output remain exactly the same. Only TypeScript features were added to improve code quality and type safety.
