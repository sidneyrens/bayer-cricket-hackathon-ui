import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSetRecoilState, useRecoilValue, useRecoilState } from 'recoil';
import { userState, showTheRegister } from '../recoil/atoms';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import { VisibilityOff, Visibility, AccountCircle } from '@material-ui/icons';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Register from './Register';
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

export default function Login(): JSX.Element {
  const user = useRecoilValue(userState);
  const setUser = useSetRecoilState(userState);
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showRegister, setShowRegister] = useRecoilState(showTheRegister);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const classes = useStyles();

  const submitLogin = async () => {
    const userToLogin: User = {
      id: '1234',
      userName: user.userName,
      scores: [{ gameDate: new Date(), score: 10 }],
      sponsorId: 'jdjilargo',
    };
    console.log('in login');
    setUser(userToLogin);
    console.log(user);
    // const userRes = await makeLoginCall(userToLogin);
    // console.log(userRes);
    // setUser(userRes.data);
  };

  return (
    <>
      {showRegister ? (
        <Register />
      ) : (
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
                    type="text"
                    placeholder="username"
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
                    id="password"
                    placeholder="password"
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
                  <Button className={classes.button} size="large" variant="outlined" onClick={submitLogin}>
                    Login
                  </Button>
                  <Button
                    className={classes.button}
                    size="large"
                    variant="outlined"
                    onClick={() => setShowRegister(true)}
                  >
                    Register
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      )}
    </>
  );
}
