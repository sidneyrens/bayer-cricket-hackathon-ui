import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSetRecoilState, useRecoilValue, useRecoilState } from 'recoil';
import { userState, showTheRegister } from '../recoil/atoms';
import { VisibilityOff, Visibility, AccountCircle } from '@material-ui/icons';
import { Link, Button, Grid, IconButton, InputAdornment, Input, CardContent, Card } from '@material-ui/core';
import { User } from '../util/types';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  card: {
    height: 300,
    width: 300,
    justify: 'center',
    padding: theme.spacing(8),
    borderRadius: '5%',
    backgroundColor: 'rgba(240, 240, 240, 0.34)',
  },
  control: {
    padding: theme.spacing(4),
  },
  inputs: {
    margin: theme.spacing(2),
  },
  button: {
    margin: theme.spacing(2),
  },
}));

export default function Register(): JSX.Element {
  const user = useRecoilValue(userState);
  const setUser = useSetRecoilState(userState);
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showVerifyPassword, setShowVerifyPassword] = useState(false);
  const [verifyPassword, setVerifyPassword] = useState('');
  const [showRegister, setShowRegister] = useRecoilState(showTheRegister);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const classes = useStyles();

  const submitNewUser = async () => {
    const userToRegister: User = {
      id: '000',
      userName: user.userName,
      scores: [{ gameDate: new Date(), score: 10 }],
      sponsorId: 'asponsor',
    };
    setUser(userToRegister);
  };

  const aFunction = () => {
    setShowRegister(false);
  };

  return (
    <Grid container spacing={5} className={classes.root} justify="center">
      <Card className={classes.card} variant="outlined">
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
            <Grid direction="row">
              <Input
                className={classes.inputs}
                placeholder="username"
                type="text"
                id="userName"
                onChange={(e) => setUser({ ...user, userName: e.target.value })}
                startAdornment={
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                }
              />
            </Grid>
            <Grid direction="row">
              <Input
                className={classes.inputs}
                error={password !== verifyPassword ? true : false}
                placeholder="password"
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
            <Grid direction="row">
              <Input
                className={classes.inputs}
                id="verifyPassword"
                error={password !== verifyPassword ? true : false}
                placeholder="verify password"
                value={verifyPassword}
                type={showVerifyPassword ? 'text' : 'password'}
                onChange={(e) => setVerifyPassword(e.target.value)}
                startAdornment={
                  <InputAdornment position="start">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => setShowVerifyPassword(!showVerifyPassword)}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showVerifyPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </Grid>
            <Grid direction="row">
              <Button
                disabled={password !== verifyPassword ? true : false}
                className={classes.button}
                size="large"
                variant="outlined"
                onClick={submitNewUser}
              >
                Register
              </Button>
              <br />
              <Link onClick={aFunction}>Back to login</Link>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
}
