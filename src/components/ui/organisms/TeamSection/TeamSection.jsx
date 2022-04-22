import React from 'react';
import {
  Container,
  Grid,
  Typography,
  Box,
  Avatar,
} from '@mui/material';
import user from '../../../../assets/img/user.png';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    height: '100%',
  },
}));

const backendTeam = [
  { id: 1, name: 'Jose Vallejo', cargo: 'Fullstack Developer', image: user },
  { id: 2, name: 'Andres Hugueth', cargo: 'Backend Developer', image: user },
  { id: 3, name: 'Adrian De la asuncion', cargo: 'Backend Developer', image: user },
  { id: 4, name: 'Jesus Gonzalez', cargo: 'Backend Developer', image: user },
];

const frontendTeam = [
  { id: 1, name: 'Ronnie Barrios', cargo: 'Fullstack Developer', image: user },
  { id: 2, name: 'Wilder Rincon', cargo: 'Frontend Developer', image: user },
  { id: 3, name: 'David De la Hoz', cargo: 'Frontend Developer', image: user },
  { id: 4, name: 'Jhonatan Angarita', cargo: 'Frontend Developer', image: user },
];

export const TeamSection = () => {
  const classes = useStyles();
  return (
    <>
      <section>
        <Container
          maxWidth="xl"
          className={classes.container}
          sx={{ padding: '20px' }}
        >
          <Box mb={1}>
            <Typography variant="h4" align="center">
              <b>Meet our Team Members</b>
            </Typography>
          </Box>
          <Box mb={4}>
            <Typography variant="h6" align="center">
              Learn more about our development team
            </Typography>
          </Box>
          <Box mb={3}>
            <Typography variant="h4" align="center">
              <b>Backend Team</b>
            </Typography>
          </Box>
          <Grid container sx={{ display: 'flex', justifyContent: 'center' }}>
            {backendTeam.map((user, i) => (
              <Grid
                item
                xs={10}
                sm={6}
                md={3}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: 10,
                }}
                key={user.id}
              >
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                  }}
                >
                  <Avatar
                    alt="Remy Sharp"
                    src={user.image}
                    sx={(theme) => ({
                      width: 192,
                      height: 192,
                      [theme.breakpoints.up('md')]: {
                        width: 256,
                        height: 256,
                      },
                    })}
                  />
                </Box>
                <Box>
                  <Typography
                    sx={(theme) => ({
                      fontWeight: 700,
                      fontSize: '20px',
                      textAlign: 'center',
                      marginBottom: theme.spacing(2),
                      [theme.breakpoints.up('md')]: {
                        fontSize: '28px',
                      },
                    })}
                    paragraph
                  >
                    {user.name}
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    sx={(theme) => ({
                      fontWeight: 500,
                      fontSize: '1rem',
                      textAlign: 'center',
                      marginTop: '-20px',
                      [theme.breakpoints.up('md')]: {
                        fontSize: '1.2rem',
                      },
                    })}
                    paragraph
                  >
                    {user.cargo}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
          <Box mt={2} mb={3}>
            <Typography variant="h4" align="center">
              <b>Frontend Team</b>
            </Typography>
          </Box>
          <Grid container sx={{ display: 'flex', justifyContent: 'center' }}>
            {frontendTeam.map((user, i) => (
              <Grid
                item
                xs={10}
                sm={6}
                md={3}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: 10,
                }}
                key={user.id}
              >
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                  }}
                >
                  <Avatar
                    alt="Remy Sharp"
                    src={user.image}
                    sx={(theme) => ({
                      width: 192,
                      height: 192,
                      [theme.breakpoints.up('md')]: {
                        width: 256,
                        height: 256,
                      },
                    })}
                  />
                </Box>
                <Box>
                  <Typography
                    sx={(theme) => ({
                      fontWeight: 700,
                      fontSize: '20px',
                      textAlign: 'center',
                      marginBottom: theme.spacing(2),
                      [theme.breakpoints.up('md')]: {
                        fontSize: '28px',
                      },
                    })}
                    paragraph
                  >
                    {user.name}
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    sx={(theme) => ({
                      fontWeight: 500,
                      fontSize: '1rem',
                      textAlign: 'center',
                      marginTop: '-20px',
                      [theme.breakpoints.up('md')]: {
                        fontSize: '1.2rem',
                      },
                    })}
                    paragraph
                  >
                    {user.cargo}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </section>
    </>
  );
};
