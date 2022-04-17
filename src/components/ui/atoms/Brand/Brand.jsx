import { makeStyles } from '@mui/styles';
import { Box } from '@mui/material';
import {ReactComponent as Logo} from '../../../../assets/logoCRM.svg';

const useStyles = makeStyles(() => ({
	root: {
		display: 'flex',
	}
}))

export const Brand = (props) => {
	const classes = useStyles();
  return (
    <>
    <Box
      sx={{width: 200, height: 60}}
    >
      <Logo />
    </Box>
    </>
  );
};
