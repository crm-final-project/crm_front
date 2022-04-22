import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Box,
  Toolbar,
  Button,
  useScrollTrigger,
  Slide,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Brand } from '../../atoms';

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: 'white',
    ...theme.mixins.container,
  },
  drawerPaper: {
    width: 240,
  },
  logo: {
    marginRight: theme.spacing(3),
  },
  navBtn: {
    textTransform: 'capitalize',
    fontWeight: 600,
    margin: '0 10px',
  },
  navRegLink: {
    textDecoration: 'none',
    // color: theme.palette.background.paper,
  },
  activeNav: {
    color: theme.palette.primary.main,
  },
  OpenDrawerBtn: {
    marginLeft: 'auto',
    color: theme.palette.primary.main,
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  closeDrawerBtn: {
    display: 'flex',
    alignItems: 'center',
    ...theme.mixins.toolbar,
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}));

const HideOnScroll = ({ children, window }) => {
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};


export const HeaderBarEdit = (props) => {
  const classes = useStyles();




  return (
    <React.Fragment>
      <HideOnScroll {...props}>
        <AppBar color="inherit" elevation={0}>
          <Toolbar className={classes.toolbar}>
            <Box>
              <Link to="/" sx={{ textDecoration: 'none' }}>
                <Brand />
              </Link>
            </Box>
            <Button variant="contained" color="success">
              Logout
            </Button>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Box mt={7} />
      
    </React.Fragment>
  );
};
