import { HeaderBar } from '../../molecules';
import { FlowOptions, RegisterForm } from '../../molecules';

export const UserRegForm = (props) => {
  return (
    <>
      <HeaderBar />
      <RegisterForm />
      <FlowOptions btn1_title='cancel' btn2_title='continue' />
    </>
  );
};
