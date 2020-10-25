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
  answerId: string;
  question: string;
  options: Option[];
}

export interface Option {
  id: string;
  answer: string;
}

export interface TQuestionResult {
  correct?: boolean;
  questionId?: string;
  answerId?: string;
  choiceId?: string;
}

export class QuestionResult implements TQuestionResult {
  correct = false;
  questionId = '';
  answerId = '';
  choiceId = '';

  constructor(correct: boolean, questionId?: string, answerId?: string, choiceId?: string) {
    Object.assign(this, { correct, questionId, choiceId, answerId });
  }
}
