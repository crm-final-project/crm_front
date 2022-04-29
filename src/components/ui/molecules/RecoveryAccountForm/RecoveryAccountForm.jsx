import { Grid, Box, Typography, Container, CssBaseline } from '@mui/material';
import { FlowOptions } from '../../molecules';

// Import atoms
import { Input } from '../../atoms';
import { useNavigate } from 'react-router-dom';

export const RecoveryAccountForm = (props) => {
  const navigate = useNavigate();

  const onClickCancel = () => navigate('/login');

  const onClickSend = () => {
    /* Service */
    navigate('/reset-password');
  };

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
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
        <Typography component='h1' variant='h5'>
          Recupera tu cuenta
        </Typography>
        <Box
          component='form'
          noValidate
          sx={{ mt: 4, textAlign: 'center', justifyContent: 'center' }}
        >
          <Input name='code' type='email' id='code' label='Email' />
          <Typography component='p' variant='caption' sx={{ mt: 3, mb: 10 }}>
            Enviaremos instrucciones a tu correo eletronico para que puedas
            recuperar tu cuenta.
          </Typography>
          <Grid container sx={{ mt: 2 }}>
            <FlowOptions
              btn1onClick={onClickCancel}
              btn2onClick={onClickSend}
              btn1_title='Cancel'
              btn2_title='Enviar'
            />
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};
