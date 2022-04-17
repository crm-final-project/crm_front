import { Typography } from "@mui/material";


export const BrandEdit = (props) => {
  return (
    <>
      <Typography
        variant="h6"
        noWrap
        component="div"
        sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
      >
        {!props.title ? 'Personal CRM' : props.title}
      </Typography>
    </>
  );
};
