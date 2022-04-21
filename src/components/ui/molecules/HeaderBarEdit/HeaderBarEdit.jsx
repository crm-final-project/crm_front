import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { BrandEdit } from '../../atoms';
import Button from '@mui/material/Button'
import PersonIcon from '@mui/icons-material/Person';

export const HeaderBarEdit = (props) => {


  return (
    <AppBar position='fixed'>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <PersonIcon />
          <BrandEdit title='Informacion de Contacto'/>
          <Typography
            variant='h6'
            noWrap
            component='div'
            align='center'
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            {!props.pageTitle ? "Informacion de Contacto": props.pageTitle}
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          </Box>
          <Button variant="contained" color="success">
            Logout
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
