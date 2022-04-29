import * as Yup from 'yup';

export const loginValidate = Yup.object({
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string()
    .min(5, 'Must be 5 characters or more')
    .required('No password provided'),
});
