import { TextField } from '@mui/material';
import { useField } from 'formik';

export const Input = (props) => {
  const [field, meta] = useField(props);

  return (
    <>
      <TextField
        margin='normal'
        fullWidth
        autoFocus
        {...props}
        {...field}
        name={props.name}
        label={props.label}
        id={props.id}
        autoComplete={props.autoComplete}
        sx={props.sx}
      />

      {meta.touched && meta.error && <span>{meta.error}</span>}
    </>
  );
};
