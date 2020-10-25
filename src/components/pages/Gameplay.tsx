import React, { useEffect } from 'react';
import { Button, Card, CardContent, Grid } from '@material-ui/core';
import { useRecoilState, useRecoilValue } from 'recoil';
import { currentQuestionIdx, gameResults, gameStatus } from '../../recoil/atoms';
import { selectCurrentQuestion, selectHasNextQuestion, selectTotalQuestions } from '../../recoil/selectors';
import { GameStatus, Option, QuestionResult } from '../../util/types';
import Scoreboard from '../Scoreboard';

const createOptionBtn = (onClick, option: Option) => (
  <Grid key={option.id} container xs={6} justify="center" alignItems="center" style={{ minHeight: '22.5vh' }}>
    <Button {...{ onClick: onClick.bind(null, option.id) }} size="large" variant="outlined" className="answerBtn">
      <h1>{option.answer}</h1>
    </Button>
  </Grid>
);

export default function Gameplay() {
  const [questionIdx, setQuestionIdx] = useRecoilState(currentQuestionIdx);
  const totalQuestions = useRecoilValue(selectTotalQuestions);
  const currentQuestion = useRecoilValue(selectCurrentQuestion);
  const hasNextQuestion = useRecoilValue(selectHasNextQuestion);
  const [questionResults, setQuestionResults] = useRecoilState(gameResults);
  const [currentGameStatus, setGameStatus] = useRecoilState(gameStatus);

  const handleClick = (id) => {
    setQuestionResults([
      ...questionResults,
      new QuestionResult(currentQuestion?.answerId === id, currentQuestion?.id, currentQuestion?.answerId, id),
    ]);

    if (hasNextQuestion) {
      setQuestionIdx(questionIdx + 1);
    } else {
      setGameStatus(GameStatus.OVER);
    }
  };

  const createBtn = createOptionBtn.bind(null, handleClick);

  useEffect(() => {
    setGameStatus(GameStatus.IN_PROGRESS);
  }, []);

  return currentGameStatus === GameStatus.OVER ? (
    <Scoreboard />
  ) : (
    <Grid container justify="center" alignItems="center" direction="column">
      <Grid container className="gameplayContainer" justify="center" alignItems="center">
        <Card>
          <CardContent>
            <h1>{`Question ${questionIdx + 1} of ${totalQuestions}`}</h1>
            <h1>{currentQuestion?.question}</h1>
          </CardContent>
        </Card>
      </Grid>
      <Grid container className="gameplayContainer" justify="center" alignItems="center">
        {currentQuestion?.options.map(createBtn)}
      </Grid>
    </Grid>
  );
}
