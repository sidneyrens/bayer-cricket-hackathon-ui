import React from 'react';
import {} from 'recoil';
import Login from '../Login';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    heading: {
        padding: theme.spacing(10),
    },
    paper: {
        height: 300,
        width: 300,
        justify: 'center',
    },
    control: {
        padding: theme.spacing(15),
    },
}));

<<<<<<< HEAD
export default function LandingPage() {
    const classes = useStyles();
    return (
        <>
            <Typography className={classes.heading} variant="h1">
                LandingPage
            </Typography>
            <Login />
        </>
    );
=======
export default function LandingPage(): JSX.Element {
  return (
    <>
      <h1>LandingPage</h1>
      <br />
      <Login />
    </>
  );
>>>>>>> 8edc841ff4d7e6bf4758ef38aefef2d5b4c3e8e8
}
