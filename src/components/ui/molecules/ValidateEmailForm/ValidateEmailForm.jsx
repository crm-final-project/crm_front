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
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
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
          <Input name="code" type="text" id="code" label="Codigo" sx={{ mb: 6 }} />
          <Link href="#">Generar un nuevo codigo</Link>
          <Typography component="p" variant="caption" sx={{ mt: 24 }}>
            Al ingresar estas aceptando nuestros terminos y condiciones
          </Typography>
          <Grid container sx={{ mt: 2 }}>
            <FlowOptions />
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};
