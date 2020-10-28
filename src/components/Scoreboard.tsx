import React from 'react';
import { Button, Grid, Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import { QuestionResult } from '../util/types';
import { useRecoilValue } from 'recoil';
import { gameResults } from '../recoil/atoms';

const createTableRow = ({ questionId, answerId, choiceId }: QuestionResult) => (
  <TableRow key={questionId}>
    <TableCell>{questionId}</TableCell>
    <TableCell>{answerId}</TableCell>
    <TableCell>{choiceId}</TableCell>
  </TableRow>
);

export default function Scoreboard(): JSX.Element {
  const questionResults = useRecoilValue(gameResults);

  return (
    <Grid container direction="column" className="scoreboardContainer" justify="space-evenly" alignItems="center">
      <Table style={{ width: '50vw', backgroundColor: 'whitesmoke' }}>
        <TableHead>
          <TableRow>
            <TableCell>Question</TableCell>
            <TableCell>Correct Answer</TableCell>
            <TableCell>Selected Answer</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{questionResults.map(createTableRow)}</TableBody>
      </Table>
      <Grid container direction="row" justify="space-evenly">
        <Grid container item xs={6} justify="center">
          <Button size="large" variant="outlined" className="answerBtn decline">
            No thanks
          </Button>
        </Grid>
        <Grid container item xs={6} justify="center">
          <Button size="large" variant="outlined" className="answerBtn">
            Join Team?
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}
