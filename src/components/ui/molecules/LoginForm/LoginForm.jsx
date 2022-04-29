import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import { makeStyles } from '@mui/styles';

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
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

import { login } from '../../../../api/login';
import { useNavigate } from 'react-router-dom';
import { Input } from '../../atoms';
import { loginValidate } from '../../../../validate/login';

const useStyles = makeStyles((theme) => ({
  button: {
    backgroundColor: 'red',
  },
  box: {
    mt: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

export const LoginForm = (props) => {
  const classes = useStyles();
  const navigate = useNavigate();

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
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          onSubmit={async (values) => {
            const credentials = {
              ...values
            }
            const {
              data: { access_token },
              status,
            } = await login(credentials);
            if (status === 200) {
              window.localStorage.setItem('access_token', access_token);
              navigate('/quotes');
            }
          }}
          validationSchema={loginValidate}
        >
          {({ isSubmitting }) => (
            <Form className={classes.box}>
              <Input
                name='email'
                label='Email'
                placeholder='email'
                type='text'
              />
              <Input
                name='password'
                label='Pasword'
                placeholder='password'
                type='password'
              />
              <FormControlLabel
                control={<Checkbox value='remember' color='primary' />}
                label='Remember me'
              />
              <Button
                type='submit'
                fullWidth
                disabled={isSubmitting}
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
                    <p style={{ margin: '3px 0 0 15px' }}>
                      Don't have an account?
                    </p>
                    <p style={{ textAlign: 'center', margin: 0 }}>Sign Up</p>
                  </Link>
                </Grid>
              </Grid>
            </Form>
          )}
        </Formik>
      </Box>
    </Container>
  );
};
