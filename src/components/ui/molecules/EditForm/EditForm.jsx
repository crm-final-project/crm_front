import * as React from 'react';
import { FORMDATA, SELECTORS } from './formdata';
import { Input, Selector } from '../../atoms';
import { makeStyles } from '@mui/styles';
import { Box, Typography, Container } from '@mui/material';
import './Editform.css';


const useStyles = makeStyles((theme) => ({
  button: {
    backgroundColor: 'red',
  },
}));

export const EditForm = (props) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      name: data.get('firstname'),
      email: data.get('email'),
      password: data.get('password'),
    });
  };
  const classes = useStyles();

  return (
    <Container component='main' maxWidth='xs'>
      <Box className='register-form-box'>
        <Box component='form' onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          {FORMDATA.map((data, index) => {
            return <Input {...data} key={index} />;
          })}
          {SELECTORS.map((s, index) => {
            return <Selector items={s.items} label={s.label}/>;
          })}
        </Box>
      </Box>
    </Container>
  );
};
