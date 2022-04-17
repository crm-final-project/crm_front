import React from 'react';
import {
  Grid,
  Typography,
  Box,
  Button,
} from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  outro: {
    display: 'flex',
    justifyContent: 'center',
    background: theme.palette.primary.main,
    padding: theme.spacing(8, 0),
    color: 'white',
    textAlign: 'center',
    marginTop: theme.spacing(2),
  },
}));

export const CtaSection = () => {
  const classes = useStyles();

  return (
    <div className={classes.outro}>
      <Grid
        container
        justify="center"
        alignItems="center"
        style={{ height: '100%' }}
      >
        <Grid item xs={12}>
          <Typography variant="h4" align="center">
            <b>Ready to create a digital document?</b>
          </Typography>
          <Box mt={3}>
            <Button
              classes={{ hover: classes.hover }}
              size="large"
              variant="contained"
              sx={(theme) => ({
                backgroundColor: 'white',
                color: theme.palette.primary.main,
                textTransform: 'capitalize',
                '&:hover': {
                  backgroundColor: '#2d8254',
                  color: 'white',
                },
              })}
            >
              Get Started
            </Button>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
