import { ArrowBackIos } from '@mui/icons-material';
import { Box, Container } from '@mui/material';
import Icon from '@mui/material/Icon';

const style = {
  container: {
    backgroundColor: 'green',
  },
  box: {
    width: '100%',
    height: '50px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: 17,
  },
};

export const TitleBar = (props) => {
  return (
    <Container style={style.container}>
      <Box style={style.box}>
        <ArrowBackIos />
        <p style={style.title}>Nueva cotización</p>
        <p></p>
      </Box>
    </Container>
  );
};
