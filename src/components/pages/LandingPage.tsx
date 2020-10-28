import React from 'react';
import Login from '../Login';
import { Link, Typography, Card } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import unitedWayPic from '../../united_way_badge-Th.png';
import { Grid } from '@material-ui/core';
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

  const onClickDonate = () => window.open('https://uwgsl.tfaforms.net/4602967', '_blank');

  return (
    <Grid container justify="center" alignItems="center" direction="column" style={{ height: '90vh' }}>
      <Grid container>
        <Login />
        <Typography className={classes.heading} variant="h4">
          If you would Like to make a donation to United Way
          <Link onClick={onClickDonate}>
            <img src={unitedWayPic} alt="united way pic" />
          </Link>
        </Typography>
      </Grid>
    </Grid>
  );
}
