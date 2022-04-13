import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Box,
  Drawer,
  Divider,
  Toolbar,
  Button,
  List,
  ListItem,
  ListItemText,
  ButtonGroup,
  IconButton,
  useScrollTrigger,
  Slide,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronRightIcon from '@mui/icons-material//ChevronRight';
import PersonIcon from '@mui/icons-material/Person';
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

const pages = [
  { name: 'Quotations', path: '/myquotes' },
  { name: 'Invoices', path: '/myinvoices' },
  { name: 'Expenses', path: '/myexpenses' },
];

export const HeaderBar = (props) => {
  const classes = useStyles();
  const [navDrawer, setNavDrawer] = useState(false);

  const toggleDrawer = () => {
    setNavDrawer(!navDrawer);
  };

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
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <ButtonGroup>
                {pages.map((nav, index) => (
                  <Link
                    to={nav.path}
                    key={nav.name}
                    style={{ textDecoration: 'none' }}
                  >
                    <Button
                      className={classes.navBtn}
                      sx={{ textDecoration: 'none' }}
                      variant="text"
                    >
                      {nav.name}
                    </Button>
                  </Link>
                ))}
              </ButtonGroup>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  width: 'fit-content',
                  backgroundColor: 'gray',
                  color: 'text.secondary',
                  '& svg': {
                    m: 1.5,
                  },
                  '& hr': {
                    mx: 0.5,
                  },
                }}
              >
                <Divider orientation="vertical" variant="middle" flexItem />
              </Box>
              <Link
                to="/login"
                style={{ textDecoration: 'none', marginLeft: 'auto', marginRight: '.5rem'}}
              >
                <Button
                  className={classes.navBtn}
                  variant="text"
                  startIcon={<PersonIcon />}
                >
                  Login
                </Button>
              </Link>
              <Link to="/register" sx={{ textDecoration: 'none' }}>
                <Button color="primary" variant="contained" disableElevation>
                  Sign Up
                </Button>
              </Link>
            </Box>
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
              <IconButton onClick={toggleDrawer}>
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Box mt={7} />
      <Drawer
        variant="temporary"
        onClose={toggleDrawer}
        open={navDrawer}
        anchor="right"
      >
        <Box>
          <IconButton onClick={toggleDrawer} color="primary">
            <ChevronRightIcon />
          </IconButton>
        </Box>
        <Divider />
        <List color="textPrimary">
          {pages.map((item, i) => (
            <Link
              key={item.name}
              to={item.path}
              style={{ textDecoration: 'none', color: 'rgba(0,0,0,0.9)' }}
              onClick={toggleDrawer}
            >
              <ListItem button key={i}>
                <ListItemText primary={item.name} />
              </ListItem>
            </Link>
          ))}
          <Link
            to="/login"
            sx={{ textDecoration: 'none', color: 'rgba(0,0,0,0.9)' }}
            onClick={toggleDrawer}
          >
            <ListItem button>
              <ListItemText primary="Login" />
            </ListItem>
          </Link>
          <Link
            to="/register"
            sx={{ textDecoration: 'none', color: 'rgba(0,0,0,0.9)' }}
            onClick={toggleDrawer}
          >
            <ListItem button>
              <ListItemText primary="Sign Up" />
            </ListItem>
          </Link>
        </List>
      </Drawer>
    </React.Fragment>
  );
};
