import {
  Avatar,
  CssBaseline,
  FormControlLabel,
  Checkbox,
  Link,
  Grid,
  Box,
  Typography,
  Container,
  Button,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

// Import atoms
import { Input } from "../../atoms";
import { BtnLogin } from "../../atoms";

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  button: {
    backgroundColor: "red",
  },
}));

export const ValidateEmailForm = (props) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };
  const classes = useStyles();

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
        <Box
          component="form"
          noValidate
          sx={{ mt: 4, textAlign: "center", justifyContent: "center" }}
        >
          <Input name="code" type="text" id="code" label="Codigo" />
          <Link href="#">Generar un nuevo codigo</Link>
          <Typography component="p" variant="caption" sx={{ mt: 10 }}>
            Al ingresar estas aceptando nuestros terminos y condiciones
          </Typography>
          <Grid container sx={{ mt: 2 }}>
            <Grid item xs={6}>
              <Button size="large" variant="outlined">
                Cancel
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button size="large" variant="outlined">
                Continue
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};
