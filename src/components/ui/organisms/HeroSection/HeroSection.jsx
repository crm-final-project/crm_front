import React from 'react';
import {
  Container,
  Grid,
  Typography,
  Button,
  Box,
} from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  intro: {
    backgroundImage: 'linear-gradient(135deg, #0D3411 40%, #2d8254 60%)',
    padding: theme.spacing(8, 0),
    color: 'white',
  },
  introSubtitle: {
    marginBottom: theme.spacing(3),
  },
  ctaBtn: {
    background: 'white',
    color: theme.palette.primary.main,
    
  },
  container: {
    height: '100%',
    paddingLeft: theme.spacing(4),
    [theme.breakpoints.up('md')]: {
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
                  Create a quote, easy and quickly with just one click
                </Typography>
                <Typography paragraph>
                  Create your documents easy, fast and send them to your clients
                  in an agile way, generate your digital documents and send them
                  to your clients.
                </Typography>
                <Button
                  size="large"
                  variant="contained"
                  sx={{
                    background: 'white',
                    color: 'primary.main',
                    textTransform: 'capitalize',
                  }}
                >
                  Discover More
                </Button>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </section>
    </>
  );
}
