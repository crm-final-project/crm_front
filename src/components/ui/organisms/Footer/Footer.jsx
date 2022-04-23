import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Grid, IconButton } from '@mui/material';
import { useTheme } from '@mui/material/styles'; 
import { makeStyles } from '@mui/styles';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material//Facebook';
import InstagramIcon from '@mui/icons-material//Instagram';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: '25px 15px',
    borderTop: `1px solid ${useTheme().palette.divider}`,
    textAlign: 'center',
  },
  share: {
    fontSize: '32px',
    border: `1px solid ${useTheme().palette.divider}`,
    borderRadius: '50%',
    margin: useTheme().spacing(2, 1),
  },
  link: {
    display: 'inline-block',
    margin: useTheme().spacing(1),
  },
  footLink: {
    textDecoration: 'none',
    color: 'rgba(0,0,0,0.6)',
  },
}));

export const Footer = () => {
  const classes = useStyles();

  const shares = [<TwitterIcon />, <FacebookIcon />, <InstagramIcon />];
  // const footLinks = [
  //   { text: 'Contact', path: '/contact' },
  //   { text: 'Privacy Policy', path: '/privacy-policy' },
  //   { text: 'Terms of Service', path: '/terms' },
  // ];

  return (
    <section>
      <Grid
        container
        sx={(theme) => ({
          display: 'flex',
          justifyContent: 'center',
          padding: '25px 15px',
          borderTop: `1px solid ${theme.palette.gray.main}`,
          textAlign: 'center',
        })}
      >
        <Grid item xs={12} sm={10} md={8}>
          {shares.map((share, i) => (
            <IconButton
              size="medium"
              key={i}
              sx={(theme) => ({
                fontSize: '32px',
                border: `1px solid ${theme.palette.gray.main}`,
                borderRadius: '50%',
                margin: theme.spacing(2, 1),
              })}
            >
              {share}
            </IconButton>
          ))}
        </Grid>
        <Grid item xs={12} sm={10} md={8}>
          <Typography component={'span'} color="textSecondary" variant="body2">
            <span>&copy;{new Date().getFullYear()} </span>
            <Typography
              component={'span'}
              color="textSecondary"
              variant="body2"
              style={{ display: 'inline' }}
            >
              DocuCRM.
            </Typography>
            <span>
              All rights reserved. Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Est blanditiis dolorem culpa incidunt minus,
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est
              blanditiis dolorem culpa incidunt minus.
            </span>
          </Typography>
        </Grid>
      </Grid>
    </section>
  );
};
