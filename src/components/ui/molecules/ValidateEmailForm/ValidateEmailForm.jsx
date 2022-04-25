import { useNavigate } from 'react-router-dom';
import {
  Link,
  Grid,
  Box,
  Typography,
  Container,
  CssBaseline,
} from "@mui/material";

import { FlowOptions } from "../../molecules";
// Import atoms
import { Input } from "../../atoms";

export const ValidateEmailForm = (props) => {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  const onClickCancel = () => navigate('/login');

  const onClickSend = () => {
    /* Service */
    navigate('/login');
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "90vh",
          justifyContent: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Valida tu email
        </Typography>
        <Typography component="p" sx={{ mt: 1 }}>
          Ingresa el codigo enviado:
        </Typography>
        <Box onSubmit={handleSubmit} component="form" noValidate sx={{ mt: 4, textAlign: "center", justifyContent: "center" }}>
          <Input name="new_password" type="text" id="new_password" label="Nueva Contraseña" sx={{ mb: 6 }} />
          <Input name="repeat_password" type="text" id="repeat_password" label="Repetir Contraseña" sx={{ mb: 6 }} />
          <Grid container sx={{ mt: 2 }}>
            <FlowOptions btn1_title="Cancelar" btn1onClick={onClickCancel} btn2_title="Cambiar" btn2onClick={onClickSend} />
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};
