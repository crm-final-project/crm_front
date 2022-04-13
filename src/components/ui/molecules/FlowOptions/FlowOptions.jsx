import { Container, Box } from '@mui/material';
import { BtnLight } from '../../atoms';

export const FlowOptions = (props) => {
  return (
    <Container component='main' maxWidth='xs'>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <BtnLight title={props.btn1_title} />
        <BtnLight title={props.btn2_title} />
      </Box>
    </Container>
  );
};
