import { HeaderBarEdit, FlowOptions, EditForm } from '../../molecules';
import { Grid, useMediaQuery, Box } from '@mui/material';
import {ReactComponent as UserEdit} from '../../../../assets/userEdit.svg';


export const UserEditForm = (props) => {
  const hidden = useMediaQuery(theme => theme.breakpoints.down('md'));
  return (
    <>
    <HeaderBarEdit />
    <Box paddingRight={hidden ? 0 : 30}>
      <Grid
        container
        spacing={12}
        direction="row"
        justifyContent="center"
        alignItems="center"
        >  
        <Grid item xs sm md={6}>
          <EditForm />
          <FlowOptions btn1_title='Cancel' btn2_title='Edit' />
        </Grid>
        <Grid item xs={0} sm={0} md={4}>
          {hidden ? null : <UserEdit />}
        </Grid>
      </Grid>
      </Box>
    </>
  );
};
