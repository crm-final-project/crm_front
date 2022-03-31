import { Container } from '@mui/material';

export const TotalCash = (props) => {
  return (
    <Container
      component='main'
      sx={{ marginTop: '2vh' }}
      className={props.className}
    >
      <p className='no_margins'>Total { props.title }:</p>
      <h2 className='no_margins'>COP$ { props.val }</h2>
    </Container>
  );
};
