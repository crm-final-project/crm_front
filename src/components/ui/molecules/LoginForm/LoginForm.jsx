import * as React from 'react';

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
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';


// Import atoms
import { Input } from '../../atoms';
import { BtnLogin } from '../../atoms';

import { makeStyles } from '@mui/styles';
import { login } from '../../../../api/login';

const useStyles = makeStyles((theme) => ({
  button: {
    backgroundColor: 'red',
  },
}));


export const LoginForm
 = (props) => {
	 const handleLogin = (event) => {
		 event.preventDefault();
		 const data = new FormData(event.currentTarget);
     login(data);
  };
	const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
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
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <Input
            name="email"
            label="Email Address"
            type="email"
            id="email"
            autoComplete="email"
          />
          <Input
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <BtnLogin className={classes.button} />
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );	
};
