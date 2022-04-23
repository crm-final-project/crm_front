import * as React from 'react';
import { FORMDATA, SELECTORS } from './formdata';
import { Input, Selector } from '../../atoms';
import { Box, Container } from '@mui/material';
import './Editform.css';


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
