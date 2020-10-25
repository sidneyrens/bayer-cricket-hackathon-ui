import { selector } from 'recoil';
import { currentQuestionIdx, gameResults, gameStatus, questionListState, userState } from './atoms';

export enum SELECTOR {
  TOTAL_QUESTIONS = 'TOTAL_QUESTIONS',
  CURRENT_QUESTION = 'CURRENT_QUESTION',
  HAS_NEXT_QUESTION = 'HAS_NEXT_QUESTION',
  USER_LOGGED_IN = 'USER_LOGGED_IN',
  ATTEMPT_LOGIN = 'ATTEMPT_LOGIN',
  SELECT_GAME_STATE = 'SELECT_GAME_STATE',
}

export const selectTotalQuestions = selector({
  key: SELECTOR.TOTAL_QUESTIONS,
  get: ({ get }) => get(questionListState).length,
});

export const selectCurrentQuestion = selector({
  key: SELECTOR.CURRENT_QUESTION,
  get: ({ get }) => {
    const questionList = get(questionListState);
    const currentIdx = get(currentQuestionIdx);
    return currentIdx > -1 ? questionList[currentIdx] : null;
  },
});

export const selectHasNextQuestion = selector({
  key: SELECTOR.HAS_NEXT_QUESTION,
  get: ({ get }) => get(currentQuestionIdx) < get(questionListState).length - 1,
});

export const userLoggedIn = selector({
  key: SELECTOR.USER_LOGGED_IN,
  get: ({ get }) => Object.values(get(userState)).every(Boolean),
});

// TODO: Replace with selectorFamily
export const attemptLogin = selector({
  key: SELECTOR.ATTEMPT_LOGIN,
  get: ({ get }) => console.log('Attempt login selector ran!'),
});

export const selectGameState = selector({
  key: SELECTOR.SELECT_GAME_STATE,
  get: ({ get }) => ({
    gameStatus: get(gameStatus),
    gameResults: get(gameResults),
    currentQuestionIdx: get(currentQuestionIdx),
  }),
  set: ({ reset }) => {
    reset(gameResults);
    reset(gameStatus);
    reset(currentQuestionIdx);
  },
});
