export const FORMDATA = [
  {
    name: 'firstName',
    label: 'First name',
    type: 'text',
    id: 'input-first-name',
    autoComplete: 'name',
  },
  {
    name: 'secondName',
    label: 'Second name',
    type: 'text',
    id: 'input-second-name',
    autoComplete: 'name',
  },
  {
    name: 'lastName',
    label: 'Last name',
    type: 'text',
    id: 'input-last-name',
  },
  {
    name: 'email',
    label: 'Email Address',
    type: 'email',
    id: 'input-email',
  },
  {
    name: 'phone',
    label: 'Phone',
    type: 'phone',
    id: 'input-phone',
    autoComplete: 'phone',
  },
  {
    name: 'address',
    label: 'Address',
    type: 'address',
    id: 'input-address',
    autoComplete: 'address',
  },
  {
    name: 'password',
    label: 'Password',
    type: 'password',
    id: 'input-password',
  },
  {
    name: 'confirmPass',
    label: 'Confirm Password',
    type: 'password',
    id: 'input-confirm-pass',
  },
];

export const SELECTORS = [
  {
    label: 'Treatment',
    name: 'treatment',
    items: [
      { val: 'sr', text: 'Sr.' },
      { val: 'sra', text: 'Sra.' },
      { val: 'otro', text: 'Otro' },
    ],
  },
  {
    label: 'Country',
    name: 'country',
    items: [{ val: 'colombia', text: 'Colombia' }],
  },
];
