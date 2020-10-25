import React, { useState } from 'react';

import { useSetRecoilState, useRecoilValue } from 'recoil';
import { userState } from '../recoil/atoms';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import { VisibilityOff, Visibility, AccountCircle } from '@material-ui/icons';
import IconButton from '@material-ui/core/IconButton';

export default function Login(): JSX.Element {
  const user = useRecoilValue(userState);
  const setUser = useSetRecoilState(userState);
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Card>
      <CardContent>
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
      </CardContent>
    </Card>
  );
}
