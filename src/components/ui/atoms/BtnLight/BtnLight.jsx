import { Button } from '@mui/material';

export const BtnLight = ({ color, onClick, title }) => {
  const myColor = color;
  const STYLES = {
    BUTTON: {
      mt: 3,
      mb: 2,
      width: '45%',
      height: '50px',
      color: myColor,
      borderColor: myColor,
    },
  };
  return (
    <Button
      type='submit'
      fullWidth
      variant='outlined'
      sx={STYLES.BUTTON}
      onClick={onClick}
    >
      {!title ? 'prop "title" miss' : title}
    </Button>
  );
};
