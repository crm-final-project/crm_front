import { Select as MuiSelect, InputLabel, MenuItem } from '@mui/material';

export const Selector = (props) => {
  return (
    <>
      <InputLabel id='test' sx={{ marginTop: '15px' }}>
        {props.label}
      </InputLabel>
      <MuiSelect sx={{ width: 1 }}>
        {props.items.map((item, index) => (
          <MenuItem value={item.val} key={index}>
            {item.text}
          </MenuItem>
        ))}
      </MuiSelect>
    </>
  );
};
