import { Container, Box } from '@mui/material';
import { BtnLight, BtnDark } from '../../atoms';

export const FlowOptionsDark = (props) => {
  return (
    <Container component='main' maxWidth='xs'>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <BtnLight title={props.btn1_title} />
        <BtnDark title={props.btn2_title} />
      </Box>
    </Container>
  );
};
