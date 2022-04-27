import { Container, Box } from '@mui/material';
import { BtnLight } from '../../atoms';

export const FlowOptions = ({
  btn1_title,
  btn1onClick,
  btn1Disabled,
  btn2_title,
  btn2onClick,
  btn2Disabled,
  states,
}) => {
  return (
    <Container component='main' maxWidth='xs' sx={{ padding: 0 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <BtnLight title={btn1_title} onClick={btn1onClick} disabled={btn1Disabled} />
        <BtnLight title={btn2_title} onClick={btn2onClick} disabled={btn2Disabled} />
      </Box>
    </Container>
  );
};
