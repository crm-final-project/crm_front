import { Box } from '@mui/material';

export const BtnClose = (props) => {
  const { setShowModal } = props;
  const STYLE = {
    BOX: {
      border: '1px solid white',
      width: '40px',
      height: '40px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '50%',
      marginTop: '5px',
      cursor: 'pointer',
    },
  };

  return (
    <Box sx={STYLE.BOX} onClick={() => setShowModal(false)}>
      X
    </Box>
  );
};
