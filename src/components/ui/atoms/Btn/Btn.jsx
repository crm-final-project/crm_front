import { Button } from '@mui/material';

export const Btn = ({ color, onClick, title, disabled, variant }) => {
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
      variant={!variant ? "outlined" : variant}
      sx={STYLES.BUTTON}
      onClick={onClick}
      disabled={disabled}
    >
      {!title ? 'prop "title" miss' : title}

    </Button>
  );
};
