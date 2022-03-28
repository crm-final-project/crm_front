import { Container, Box } from '@mui/material';
import { BtnLight } from '../../atoms';

export const LoginOptions = (props) => {
  return (
    <Container component='main' maxWidth='xs'>
      <Box sx={{ display: 'flex', justifyContent: 'space-between'}}>
        <BtnLight title='Cancel'/>
        <BtnLight title='Continue'/>
      </Box>
    </Container>
  );
};
