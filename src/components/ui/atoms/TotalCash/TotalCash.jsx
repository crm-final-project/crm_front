import { Container, Box } from '@mui/material';

export const TotalCash = (props) => {
  return (
    <Container component='main' maxWidth='xs' sx={{ marginTop: '2vh' }}>
      <p className='no_margins'>Total month:</p>
      <h2 className='no_margins'>COP$ 3.640.000</h2>
    </Container>
  );
};
