import { Option, Question } from '../util/types';

export const createMockQuestion = (id) => {
  const options = new Array(4)
    .fill(0)
    .map((e, idx) => ({ id: `${id + 1}-a${idx + 1}`, answer: `${id + 1}-a${idx + 1}` } as Option));
  return {
    id,
    options,
    answerId: options[Math.floor(Math.random() + 3)].id,
    question: `Question text for question#${id}?`,
  } as Question;
};

export const createMockQuestionList = (length: number): Question[] =>
  new Array(length).fill(0).map((e, i) => createMockQuestion(`${i}`));

export const mockQuestionList = [
  {
    id: 'q1',
    answerId: 'a2',
    question: 'Is the answer a2?',
    options: [
      {
        answer: 'a1',
        id: 'a1',
      },
      {
        answer: 'a2',
        id: 'a2',
      },
    ] as Option[],
  },
] as Question[];
