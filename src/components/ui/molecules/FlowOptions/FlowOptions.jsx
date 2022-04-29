import { Container, Box } from '@mui/material';
import { Btn } from '../../atoms';

export const FlowOptions = ({
  btn1_title,
  btn1onClick,
  btn1Disabled,
  btn1_variant,
  btn2_title,
  btn2onClick,
  btn2Disabled,
  btn2_variant,
  states,
}) => {
  return (
    <Container component='main' maxWidth='xs' sx={{ padding: 0 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Btn title={btn1_title} onClick={btn1onClick} disabled={btn1Disabled}
        variant={btn1_variant} />
        <Btn title={btn2_title} onClick={btn2onClick} disabled={btn2Disabled}
        variant={btn2_variant}/>
      </Box>
    </Container>
  );
};
