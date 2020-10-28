export interface User {
  id: string;
  userName: string;
  scores: Score[];
  sponsorId: string;
}

export interface Score {
  gameDate: Date;
  score: number;
}

export interface Question {
  id: string;
  answer: string;
  question: string;
  options: string[];
}

export interface Option {
  id: string;
  answer: string;
}

export interface TQuestionResult {
  correct?: boolean;
  questionId?: string;
  answer?: string;
  choice?: string;
}

export class QuestionResult implements TQuestionResult {
  correct = false;
  questionId = '';
  answer = '';
  choice = '';

  constructor(correct: boolean, questionId?: string, answer?: string, choice?: string) {
    Object.assign(this, { correct, questionId, choice, answer });
  }
}

export enum GameStatus {
  MAIN_MENU,
  IN_PROGRESS,
  OVER,
}
