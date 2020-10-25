import React from 'react';
import { Button, Card, CardContent, Grid } from '@material-ui/core';
import { useRecoilState, useRecoilValue } from 'recoil';
import { currentQuestionIdx, gameResults } from '../../recoil/atoms';
import { selectCurrentQuestion, selectTotalQuestions } from '../../recoil/selectors';
import { Option, QuestionResult } from '../../util/types';

const createOptionBtn = (onClick, option: Option) => (
  <Grid key={option.id} container xs={6} justify="center" alignItems="center">
    <Button {...{ onClick: onClick.bind(null, option.id) }}>{option.answer}</Button>
  </Grid>
);

export default function Gameplay() {
  const [questionIdx, setQuestionIdx] = useRecoilState(currentQuestionIdx);
  const totalQuestions = useRecoilValue(selectTotalQuestions);
  const currentQuestion = useRecoilValue(selectCurrentQuestion);
  const [questionResults, setQuestionResults] = useRecoilState(gameResults);

  const handleClick = (id) => {
    alert(`Clicked ${id}`);
    setQuestionResults([...questionResults, new QuestionResult(currentQuestion?.id === id, currentQuestion?.id)]);
    setQuestionIdx(questionIdx + 1);
  };

  const createBtn = createOptionBtn.bind(null, handleClick);

  return (
    <Grid container justify="center" alignItems="center" direction="column">
      <Grid container className="gameplayContainer" justify="center" alignItems="center">
        <Card>
          <CardContent>
            <h1>{currentQuestion?.question}</h1>
          </CardContent>
        </Card>
      </Grid>
      <Grid container className="gameplayContainer" justify="center" alignItems="center">
        {/*<h1>{`${questionIdx + 1} of ${totalQuestions}`}</h1>*/}
        {/*<h1>{`Selected: ${JSON.stringify(currentQuestion, null, 2)}`}</h1>*/}
        {currentQuestion?.options.map(createBtn)}
      </Grid>
    </Grid>
  );
}
