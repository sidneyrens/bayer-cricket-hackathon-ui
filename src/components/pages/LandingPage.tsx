import React from 'react';
import {} from 'recoil';
import Login from '../Login';
import { Link, Typography, Card } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import unitedWayPic from '../../united_way_badge-Th.png';

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

export default function LandingPage() {
  const classes = useStyles();
  return (
    <>
      <Card>
        <Typography className={classes.heading} variant="h1">
          Welcome!
        </Typography>
        <Login />
        <Typography className={classes.heading} variant="h4">
          If you would Like to make a donation to United Way
          <Link href="https://uwgsl.tfaforms.net/4602967"> Click Here </Link>
          <img src={unitedWayPic} alt="united way pic" />
        </Typography>
      </Card>
    </>
  );
}
