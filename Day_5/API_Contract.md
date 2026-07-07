# API Contract

## Project

QA Bot - Shared API Contract

---

## Purpose

This document defines the API structure that will be shared between the TypeScript backend and the React Native frontend. Both applications should follow this contract to ensure they communicate correctly.

---

# Base URL

```text
http://localhost:3000
```

---

# Shared Data Types

## Question

```typescript
interface Question {
  id: number;
  question: string;
  answer: string;
}
```

## ChatResponse

```typescript
interface ChatResponse<T> {
  success: boolean;
  message: string;
  data?: T;
}
```

---

# API Endpoints

## 1. Get All Questions

**Method**

```text
GET
```

**Endpoint**

```text
/questions
```

### Success Response

```json
{
  "success": true,
  "message": "Questions fetched successfully",
  "data": [
    {
      "id": 1,
      "question": "What is TypeScript?",
      "answer": "TypeScript is a typed superset of JavaScript."
    }
  ]
}
```

---

## 2. Get Question by ID

**Method**

```text
GET
```

**Endpoint**

```text
/questions/{id}
```

### Success Response

```json
{
  "success": true,
  "message": "Question found",
  "data": {
    "id": 1,
    "question": "What is TypeScript?",
    "answer": "TypeScript is a typed superset of JavaScript."
  }
}
```

---

## 3. Create Question

**Method**

```text
POST
```

**Endpoint**

```text
/questions
```

### Request Body

```json
{
  "question": "What is Node.js?",
  "answer": "Node.js is a JavaScript runtime."
}
```

### Success Response

```json
{
  "success": true,
  "message": "Question created successfully",
  "data": {
    "id": 2,
    "question": "What is Node.js?",
    "answer": "Node.js is a JavaScript runtime."
  }
}
```

---

## 4. Update Question

**Method**

```text
PUT
```

**Endpoint**

```text
/questions/{id}
```

### Request Body

```json
{
  "question": "Updated Question",
  "answer": "Updated Answer"
}
```

### Success Response

```json
{
  "success": true,
  "message": "Question updated successfully",
  "data": {
    "id": 1,
    "question": "Updated Question",
    "answer": "Updated Answer"
  }
}
```

---

## 5. Delete Question

**Method**

```text
DELETE
```

**Endpoint**

```text
/questions/{id}
```

### Success Response

```json
{
  "success": true,
  "message": "Question deleted successfully"
}
```

---

# HTTP Status Codes

| Status Code | Meaning               |
| ----------- | --------------------- |
| 200         | OK                    |
| 201         | Created               |
| 400         | Bad Request           |
| 404         | Not Found             |
| 500         | Internal Server Error |

---

# Notes

* All requests and responses use JSON.
* Every response contains `success` and `message`.
* The `data` field contains the requested information when applicable.
* Both the TypeScript backend and the React Native frontend should follow this API contract.
