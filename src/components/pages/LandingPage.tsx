import React from 'react';
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
}
