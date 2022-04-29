import { HeaderBar } from '../../molecules';
import { RegisterForm } from '../../molecules';

export const UserRegForm = (props) => {
  return (
    <>
      <HeaderBar />
      <RegisterForm title='Contact Information' titleBtn1={'cancel'} titleBtn2={'continue'} />
    </>
  );
};
