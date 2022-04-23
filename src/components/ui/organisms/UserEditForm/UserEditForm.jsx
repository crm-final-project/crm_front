import { HeaderBarEdit, FlowOptionsDark, RegisterForm } from '../../molecules';

export const UserEditForm = (props) => {
  return (
    <>
      <HeaderBarEdit />
      <RegisterForm />
      <FlowOptionsDark btn1_title='Regresar' btn2_title='Guardar' />
    </>
  );
};
