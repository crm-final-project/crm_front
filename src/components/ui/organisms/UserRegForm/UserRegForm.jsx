import { HeaderBar } from '../../molecules';
import { LoginForm, LoginOptions, RegisterForm } from '../../molecules';

export const UserRegForm = (props) => {
	return <>
		<HeaderBar />
		<RegisterForm />
		<LoginOptions />
	</>
};
