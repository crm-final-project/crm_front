import * as Yup from 'yup';
import { phoneRegExp } from '../utils/regexFields';

export const userValidate = Yup.object({
  firstName: Yup.string()
    .max(15, 'Must be 15 characters or less')
    .required('Required'),
  secondName: Yup.string()
    .max(15, 'Must be 15 characters or less').optional(),
  lastName: Yup.string()
    .max(15, 'Must be 15 characters or less')
    .required('Required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Required'),
  phone: Yup.string()
    .required('Required')
    .matches(phoneRegExp, 'Phone number is not valid')
    .min(10, 'to short')
    .max(10, 'to long'),
  address: Yup.string().max(15, '').required('Required'),
  password: Yup.string()
    .min(5, 'Must be 5 characters or more')
    .oneOf([Yup.ref('confirmPass'), null], 'Passwords must match')
    .required('No password provided'),
  confirmPass: Yup.string()
    .min(5, 'Must be 5 characters or more')
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('No password provided'),
  country: Yup.string().optional(),
  city: Yup.string().optional(),
})