import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form } from 'formik';
import { makeStyles } from '@mui/styles';
import { Box, Typography, Container } from '@mui/material';

import { FORMDATA, SELECTORS } from './formdata';
import { Input, Selector } from '../../atoms';
import { FlowOptions } from '../FlowOptions';
import { createUser } from '../../../../api/user';
import { userValidate } from '../../../../validate/userReg';

import './registerform.css';

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
  field: {
    width: '100%',
    marginBottom: '20px',
    '&:last-child': {
      marginBottom: 0,
    },
  },
}));

export const RegisterForm = ({titleBtn1, titleBtn2, variantBtn2}) => {
  const navigate = useNavigate();
  const classes = useStyles();

  const handleCancelBtn = () => {
    navigate('/login')
  }

  return (
    <>
      <Container component='main' maxWidth='xs'>
        <Box className='register-form-box'>
          <Typography
            variant='h5'
            sx={{ textAlign: 'center', marginBottom: 2 }}
          >
            Contact Info
          </Typography>
          <Formik
            initialValues={{
              firstName: '',
              secondName: '',
              lastName: '',
              email: '',
              phone: '',
              address: '',
              password: '',
              country: '',
              city: '',
            }}
            onSubmit={(values) => {
              const user = {
                first_name: values.firstName,
                second_name: values.secondName,
                last_name: values.lastName,
                ...values,
              };
              createUser(user)
                .then((res) => {
                  console.log(res.data);
                  navigate('/');
                })
                .catch((error) => console.error(error));
            }}
            validationSchema={userValidate}
          >
            {({ handleChange, isSubmitting }) => (
              <Form className={classes.box}>
                {FORMDATA.map((data, index) => (
                  <Input {...data} key={index} />
                ))}
                {SELECTORS.map((selector, index) => {
                  return <Selector {...selector} handleChange={handleChange} />;
                })}
                <Input name='city' label='City' type='text' />

                <FlowOptions
                  btn1_title={titleBtn1}
                  btn1onClick={handleCancelBtn}
                  btn2_variant={variantBtn2}
                  btn2_title={titleBtn2}
                  btn2Disabled={isSubmitting}
                />
              </Form>
            )}
          </Formik>
        </Box>
      </Container>
    </>
  );
};
