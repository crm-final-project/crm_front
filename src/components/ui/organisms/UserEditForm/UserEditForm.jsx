import { HeaderBarEdit, FlowOptionsDark, EditForm } from '../../molecules';
import {ReactComponent as UserEdit} from '../../../../assets/userEdit.svg';
import useMediaQuery from '@mui/material/useMediaQuery';


export const UserEditForm = (props) => {
  const hidden = useMediaQuery(theme => theme.breakpoints.down('md'));
  return (
    <>
      <HeaderBarEdit />
      <EditForm />
      {hidden ? null : <UserEdit />}
      <FlowOptionsDark btn1_title='Regresar' btn2_title='Guardar' />
    </>
  );
};
