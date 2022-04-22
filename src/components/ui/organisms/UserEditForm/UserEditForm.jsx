import { HeaderBarEdit, FlowOptionsDark, EditForm } from '../../molecules';

export const UserEditForm = (props) => {
  return (
    <>
      <HeaderBarEdit />
      <EditForm />
      <FlowOptionsDark btn1_title='Regresar' btn2_title='Guardar' />
    </>
  );
};
