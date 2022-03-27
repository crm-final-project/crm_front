import { TextField } from '@mui/material';

export const Input
 = (props) => {
	return (
    <TextField
      margin="normal"
      required
      fullWidth
      autoFocus
			name={props.name}
			label={props.label}
			id={props.id}
			type={props.type}
			autoComplete={props.autoComplete}
    />
  );
};
