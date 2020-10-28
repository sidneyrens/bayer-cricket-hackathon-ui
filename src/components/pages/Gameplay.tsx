import React, { useEffect } from 'react';
import { Button, Card, CardContent, Grid } from '@material-ui/core';
import { useRecoilState, useRecoilValue } from 'recoil';
import { currentQuestionIdx, gameResults, gameStatus, questionListState } from '../../recoil/atoms';
import { selectCurrentQuestion, selectHasNextQuestion, selectTotalQuestions } from '../../recoil/selectors';
import { GameStatus, Option, QuestionResult } from '../../util/types';
import Scoreboard from '../Scoreboard';
import { getQuestions } from '../../network/questions';

const createOptionBtn = (onClick, option: string) => (
  <Grid key={option} container xs={6} justify="center" alignItems="center" style={{ minHeight: '22.5vh' }}>
    <Button {...{ onClick: onClick.bind(null, option) }} size="large" variant="outlined" className="answerBtn">
      <h1>{option}</h1>
    </Button>
  </Grid>
);

export default function Gameplay() {
  const [questionIdx, setQuestionIdx] = useRecoilState(currentQuestionIdx);
  const [totalQuestions, setTotalQuestions] = useRecoilState(questionListState);
  const currentQuestion = useRecoilValue(selectCurrentQuestion);
  const hasNextQuestion = useRecoilValue(selectHasNextQuestion);
  const [questionResults, setQuestionResults] = useRecoilState(gameResults);
  const [currentGameStatus, setGameStatus] = useRecoilState(gameStatus);

  const handleClick = (id) => {
    setQuestionResults([
      ...questionResults,
      new QuestionResult(currentQuestion?.answer === id, currentQuestion?.id, currentQuestion?.answer, id),
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
    grabQuestions();
  }, []);

  const grabQuestions = async () => {
    const questions = await getQuestions();
    console.log(questions);
    setTotalQuestions(questions);
  };

  return currentGameStatus === GameStatus.OVER ? (
    <Scoreboard />
  ) : (
    <Grid container justify="center" alignItems="center" direction="column">
      <Grid container className="gameplayContainer" justify="center" alignItems="center">
        <Card>
          <CardContent>
            <h1>{`Question ${questionIdx + 1} of ${totalQuestions.length}`}</h1>
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
