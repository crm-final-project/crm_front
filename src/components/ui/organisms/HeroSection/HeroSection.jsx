import React from 'react';
import {
  Container,
  Grid,
  Typography,
  Button,
  Box,
} from '@mui/material';
import { useTheme } from '@mui/material/styles'; 
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  intro: {
    backgroundImage: 'linear-gradient(135deg, #0D3411 40%, #2d8254 60%)',
    padding: useTheme().spacing(8, 0),
    color: 'white',
  },
  introSubtitle: {
    marginBottom: useTheme().spacing(3),
  },
  ctaBtn: {
    background: 'white',
    color: useTheme().palette.primary.main,
    
  },
  container: {
    height: '100%',
    paddingLeft: useTheme().spacing(4),
    [useTheme().breakpoints.up('md')]: {
      fontSize: '44px',
    },
  },
}));

export const HeroSection = () => {
  const classes = useStyles();
  return (
    <>
      <section>
        <Box className={classes.intro}>
          <Container className={classes.container}>
            <Grid container alignItems="center" className={classes.container}>
              <Grid item xs={11} sm={8} md={8} lg={7}>
                <Typography
                  sx={(theme) => ({
                    fontWeight: 900,
                    fontSize: '36px',
                    marginBottom: theme.spacing(2),
                    [theme.breakpoints.up('md')]: {
                      fontSize: '44px',
                    },
                  })}
                  paragraph
                >
                  DOCU-CRM, easy and quickly personal tool
                </Typography>
                <Typography paragraph>
                  Create your quotations, fast templates, and saving your data.
                  Generate your invoices with just a few clicks.
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </section>
    </>
  );
}
