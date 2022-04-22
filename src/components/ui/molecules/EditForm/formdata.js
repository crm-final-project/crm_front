export const FORMDATA = [
  {
    name: 'firstname',
    label: 'First name',
    type: 'text',
    id: 'input-first-name',
    autoComplete: 'name',
  },
  {
    name: 'secondname',
    label: 'Second name',
    type: 'text',
    id: 'input-second-name',
    autoComplete: 'name',
  },
  {
    name: 'lastname',
    label: 'Last name',
    type: 'text',
    id: 'input-last-name',
    autoComplete: 'name',
  },
  {
    name: 'email',
    label: 'Email Address',
    type: 'email',
    id: 'input-email',
    autoComplete: 'email',
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
];

export const SELECTORS = [
  {
    label: 'Gender',
    items: [
      { val: 'male', text: 'Male' },
      { val: 'female', text: 'Female' },
      { val: 'other', text: 'Other' },
    ],
  },
  {
    label: 'Country',
    items: [{ val: 'colombia', text: 'Colombia' }],
  },
  {
    label: 'City',
    items: [
      { val: 'barranquilla', text: 'Barranquilla' },
      { val: 'bogota', text: 'Bogota' },
      { val: 'Medellin', text: 'Medellin' },
  ],
  }
];
