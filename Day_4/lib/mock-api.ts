import { knowledgeData } from "./mock-data";
export interface Knowledge {
  id: number;
  question: string;
  answer: string;
}

export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

export function getAllQuestions(): ApiResponse<Knowledge[]> {
  return {
    success: true,
    message: "Questions fetched successfully.",
    data: knowledgeData
  };
}

export function getQuestionById(
  id: number
): ApiResponse<Knowledge | null> {

  const question = knowledgeData.find(item => item.id === id);

  if (!question) {
    return {
      success: false,
      message: "Question not found.",
      data: null
    };
  }

  return {
    success: true,
    message: "Question found.",
    data: question
  };
}

export function createQuestion(
  question: Knowledge
): ApiResponse<Knowledge> {

  knowledgeData.push(question);

  return {
    success: true,
    message: "Question created successfully.",
    data: question
  };
}

export function updateQuestion(
  id: number,
  updates: Partial<Knowledge>
): ApiResponse<Knowledge | null> {

  const question = knowledgeData.find(item => item.id === id);

  if (!question) {
    return {
      success: false,
      message: "Question not found.",
      data: null
    };
  }

  Object.assign(question, updates);

  return {
    success: true,
    message: "Question updated successfully.",
    data: question
  };
}

export function deleteQuestion(
  id: number
): ApiResponse<null> {

  const index = knowledgeData.findIndex(item => item.id === id);

  if (index === -1) {
    return {
      success: false,
      message: "Question not found.",
      data: null
    };
  }

  knowledgeData.splice(index, 1);

  return {
    success: true,
    message: "Question deleted successfully.",
    data: null
  };
}


