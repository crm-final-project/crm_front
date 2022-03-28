import { Button } from '@mui/material';

export const BtnLight = (props) => {
  return (
    <Button
      type='submit'
      fullWidth
      variant='outlined'
      sx={{ mt: 3, mb: 2, width: '45%', height: '50px' }}
    >
      {!props.title ? 'prop "title" miss' : props.title}
    </Button>
  );
};
