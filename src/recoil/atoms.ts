import { atom } from 'recoil';
import { GameStatus, Question, QuestionResult, User } from '../util/types';
import { createMockQuestionList } from '../data/mockData';

export enum ATOM {
  CURRENT_USER = 'CURRENT_USER',
  CURRENT_QUESTIONS = 'CURRENT_QUESTIONS',
  CURRENT_QUESTION_IDX = 'CURRENT_QUESTION_IDX',
  GAME_RESULTS = 'GAME_RESULTS',
  SETTINGS_VISIBLE = 'SETTINGS_VISIBLE',
  GAME_STATUS = 'GAME_STATUS',
}

export const userState = atom({
  key: ATOM.CURRENT_USER, // unique ID (with respect to other atoms/selectors)
  default: {
    id: '',
    userName: '',
    scores: [],
    sponsorId: '',
  } as User, // default value (aka initial value)
});

export const questionListState = atom({
  key: ATOM.CURRENT_QUESTIONS,
  default: createMockQuestionList(15) as Question[],
});

export const currentQuestionIdx = atom({
  key: ATOM.CURRENT_QUESTION_IDX,
  default: 0,
});

export const gameResults = atom({
  key: ATOM.GAME_RESULTS,
  default: [] as QuestionResult[],
});

export const settingsVisible = atom({
  key: ATOM.SETTINGS_VISIBLE,
  default: false,
});

export const gameStatus = atom({
  key: ATOM.GAME_STATUS,
  default: GameStatus.MAIN_MENU,
});
