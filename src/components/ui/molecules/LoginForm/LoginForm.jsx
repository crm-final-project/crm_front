import React, { useState } from 'react';

// Import components Material UI
import {
  Avatar,
  FormControlLabel,
  Checkbox,
  Link,
  Grid,
  Box,
  Typography,
  Container,
  Button,
  TextField,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

import { login } from '../../../../api/login';

export const LoginForm = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async () => {
    const credentials = {
      email,
      password,
    };
    const { data: { access_token }, status } = await login(credentials);
    if (status === 200) {
      window.localStorage.setItem('access_token', access_token);
      window.location = '/quotes';
    }
  };

  return (
    <Container component='main' maxWidth='xs'>
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          height: '90vh',
          justifyContent: 'center',
        }}
      >
        <Avatar sx={{ m: 1, backgroundColor: '#2d8254' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Login
        </Typography>
        <Box
          component='form'
          noValidate
          sx={{ mt: 1, display: 'flex', flexDirection: 'column' }}
        >
          <TextField
            sx={{ marginBottom: 2 }}
            id='email'
            onChange={handleEmail}
            label='Email'
            placeholder='email'
          />
          <TextField
            id='password'
            type='password'
            onChange={handlePassword}
            label='Password'
            placeholder='password'
          />
          <FormControlLabel
            control={<Checkbox value='remember' color='primary' />}
            label='Remember me'
          />
          <Button
            type='button'
            onClick={handleLogin}
            fullWidth
            variant='contained'
            sx={{ mt: 3, mb: 2, backgroundColor: '#2d8254' }}
          >
            Login
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href='/forgot' variant='body2'>
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href='/register' variant='body2'>
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};
