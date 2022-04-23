import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Button,
  Container,
  Grid,
  Typography,
  Box,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import Svg from '../Error404/Svg';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';

const useStyles = makeStyles({
  root: {
    '& svg;': {
      width: '500px'
    }
  }
})

export const Error = () => {
  const classes = useStyles();
  let navigate = useNavigate();
  const goHome = (e) => {
    e.preventDefault();
    navigate('/');;
  };


  return (
    <>
      <section>
        <Container maxWidth="lg">
          <Grid container sx={{ display: 'flex', justifyContent: 'center' }}>
            <Grid
              className={classes.root}
              item
              xs={10}
              sm={8}
              md={6}
              sx={{
                padding: '0px',
              }}
            >
              <Box
                sx={{
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '100vh',
                }}
              >
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                  <Svg />
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginTop: '40px',
                  }}
                >
                  <Typography
                    variant="h4"
                    sx={{ color: 'red', fontWeight: 'bold' }}
                  >
                    Sorry!
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                  <Typography
                    variant="h4"
                    sx={{ textAlign: 'center', fontWeight: 'bold' }}
                  >
                    The page can’t be found.
                  </Typography>
                </Box>
                <Box mt={2} sx={{ display: 'flex', justifyContent: 'center' }}>
                  <Typography
                    paragraph
                    sx={{ textAlign: 'center', fontWeight: 500 }}
                  >
                    The page you're looking for isn't available. Use the go back
                    button below
                  </Typography>
                </Box>
                <Box>
                  <Button
                    variant="outlined"
                    onClick={(e) => {
                      goHome(e);
                    }}
                    endIcon={<ArrowCircleRightOutlinedIcon />}
                  >
                    Go Home
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </section>
    </>
  );
}
