import { Option, Question } from '../util/types';

export const mapOptions = (id) => (e, idx): Option =>
  ({ id: `${id + 1}-a${idx + 1}`, answer: `${id + 1}-a${idx + 1}` } as Option);

export const createMockQuestion = (id) => {
  const options = new Array(4).fill(0).map(mapOptions(id));
  return {
    id,
    options,
    answerId: options[Math.floor(Math.random() + 3)].id,
    question: `Question text for question#${id}?`,
  } as Question;
};

export const createMockQuestionReal = (
  id: string,
  [question, options, answerId]: [string, string[], string | number],
) =>
  ({
    id,
    question,
    answerId: `${answerId}`,
    options: options.map(mapOptions(id)),
  } as Question);

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

export const realQuestions = [
  [
    'To be a good cricket player, you need...',
    [
      '1. Good hand-eye coordination',
      '2. Batting and bowling technique',
      '3. Ability to throw and catch a ball',
      '4. All of the above',
    ],
    4,
  ],
  ['How many teams play against each other in a cricket game?', ['1. Two', '2. Three', '3. Four', '4. Five'], 1],
  [
    'To be a good cricket player, you need...',
    [
      '1. Good hand-eye coordination',
      '2. Batting and bowling technique',
      '3. Ability to throw and catch a ball',
      '4. All of the above',
    ],
    4,
  ],
  [
    'To be a good cricket player, you need...',
    [
      '1. Good hand-eye coordination',
      '2. Batting and bowling technique',
      '3. Ability to throw and catch a ball',
      '4. All of the above',
    ],
    4,
  ],
];
// .map(([question, options, answer]) => createMockQuestionReal(question, options, answer));
