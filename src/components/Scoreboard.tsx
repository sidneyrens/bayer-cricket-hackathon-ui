import React from 'react';
import { Button, Grid, Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import { QuestionResult } from '../util/types';
import { useRecoilValue } from 'recoil';
import { gameResults } from '../recoil/atoms';
import { comingSoon } from '../util/helpers';
import { useHistory } from 'react-router';

const createTableRow = ({ questionId, answerId, choiceId }: QuestionResult) => (
  <TableRow key={questionId}>
    <TableCell>{questionId}</TableCell>
    <TableCell>{answerId}</TableCell>
    <TableCell>{choiceId}</TableCell>
  </TableRow>
);

export default function Scoreboard(): JSX.Element {
  const questionResults = useRecoilValue(gameResults);
  const history = useHistory();

  return (
    <Grid container direction="column" className="scoreboardContainer" alignItems="center">
      <Grid container item xs={12} direction="row" className="scoreboardRow" justify="center" alignItems="center">
        <div className="scoreboardWrapper">
          <Table className="scoreboard">
            <TableHead>
              <TableRow className="header">
                <TableCell>Question</TableCell>
                <TableCell>Correct Answer</TableCell>
                <TableCell>Selected Answer</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>{questionResults.map(createTableRow)}</TableBody>
          </Table>
        </div>
      </Grid>
      <Grid container item xs={12} direction="row" className="buttonRow" justify="center" alignItems="center">
        <Grid container item xs={6} justify="center" onClick={() => history.push('/')}>
          <Button size="large" variant="outlined" className="answerBtn decline">
            No thanks
          </Button>
        </Grid>
        <Grid container item xs={6} justify="center">
          <Button size="large" variant="outlined" className="answerBtn" onClick={comingSoon}>
            Join Team?
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}
