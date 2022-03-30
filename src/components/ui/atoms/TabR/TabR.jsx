import { Box } from '@mui/material';

export const TabR = (props) => {
  const styles = {
    width: '1',
    height: '50px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '15px',
    color: 'White',
    fontWeight: 600,
    backgroundColor: props.color,
    cursor: 'pointer',
  };

  return (
    <Box sx={styles} onClick={props.onClick}>
      {props.title} ({props.value})
    </Box>
  );
};
