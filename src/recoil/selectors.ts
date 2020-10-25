import { selector } from 'recoil';
import { currentQuestionIdx, questionListState } from './atoms';

export enum SELECTOR {
  TOTAL_QUESTIONS = 'TOTAL_QUESTIONS',
  CURRENT_QUESTION = 'CURRENT_QUESTION',
  HAS_NEXT_QUESTION = 'HAS_NEXT_QUESTION',
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
