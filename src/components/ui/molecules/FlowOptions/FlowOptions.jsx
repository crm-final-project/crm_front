import { Container, Box } from '@mui/material';
import { BtnLight } from '../../atoms';

export const FlowOptions = ({ btn1_title, btn2_title, btn1onClick, btn2onClick, states }) => {

  return (
    <Container component='main' maxWidth='xs'>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <BtnLight title={btn1_title} onClick={btn1onClick} />
        <BtnLight title={btn2_title} onClick={btn2onClick} />
      </Box>
    </Container>
  );
};
