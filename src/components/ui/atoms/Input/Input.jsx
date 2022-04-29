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
        id={props.id}
        sx={props.sx}
      />

      {meta.touched && meta.error && <span style={{color: 'red', marginBottom: 8}}>{meta.error}</span>}
    </>
  );
};
