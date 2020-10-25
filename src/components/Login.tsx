import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import { userState } from '../recoil/atoms';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import { VisibilityOff, Visibility, AccountCircle } from '@material-ui/icons';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        height: 500,
        width: 300,
        justify: 'center',
    },
    control: {
        padding: theme.spacing(15),
    },
}));

export default function Login(): JSX.Element {
    const user = useRecoilValue(userState);
    const setUser = useSetRecoilState(userState);
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const classes = useStyles();

    return (
        <Grid container spacing={5} className={classes.root} justify="center">
            <Card className={classes.paper}>
                <CardContent>
                    <Grid
                        container
                        xs={12}
                        style={{ height: '100%' }}
                        direction="column"
                        justify="space-evenly"
                        spacing={4}
                        alignItems="center"
                    >
                        <Input
                            type="text"
                            id="userName"
                            onChange={(e) => setUser({ ...user, userName: e.target.value })}
                            startAdornment={
                                <InputAdornment position="start">
                                    <AccountCircle />
                                </InputAdornment>
                            }
                        />
                        <Input
                            id="password"
                            value={password}
                            type={showPassword ? 'text' : 'password'}
                            onChange={(e) => setPassword(e.target.value)}
                            startAdornment={
                                <InputAdornment position="start">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={() => setShowPassword(!showPassword)}
                                        onMouseDown={handleMouseDownPassword}
                                    >
                                        {showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </Grid>
                </CardContent>
            </Card>
        </Grid>
    );
}
