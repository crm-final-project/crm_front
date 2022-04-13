import { Button } from '@mui/material';

export const BtnLight = (props) => {
  const color = props.color;
  const STYLES = {
    BUTTON: { mt: 3, mb: 2, width: '45%', height: '50px', color: color, borderColor: color }
  }
  return (
    <Button
      type='submit'
      fullWidth
      variant='outlined'
      sx={STYLES.BUTTON}
    >
      {!props.title ? 'prop "title" miss' : props.title}
    </Button>
  );
};
