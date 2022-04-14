import { Button } from '@mui/material';

export const BtnDark = (props) => {
  const STYLES = {
    BUTTON: { mt: 3, mb: 2, width: '45%', height: '50px', color: '#FFF', backgroundColor: '#2d8254' }
  }
  return (
    <Button
      type='submit'
      fullWidth
      variant='contained'
      sx={STYLES.BUTTON}
    >
      {!props.title ? 'prop "title" miss' : props.title}
    </Button>
  );
};
