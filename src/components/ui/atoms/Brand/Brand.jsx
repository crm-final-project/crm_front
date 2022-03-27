import { makeStyles } from '@mui/styles';
import { Typography } from '@mui/material';

const useStyles = makeStyles(() => ({
	root: {
		display: 'flex',
	}
}))

export const Brand = (props) => {
	// const classes = useStyles();
  return (
    <>
      <Typography
        variant="h6"
        noWrap
        component="div"
        sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
      >
        PERSONAL CRM
      </Typography>
    </>
  );
};
