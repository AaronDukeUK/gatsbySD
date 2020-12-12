import React from 'react';
import { Link } from 'gatsby';
import {
  AppBar,
  Box,
  Hidden,
  Button,
  Toolbar,
  Typography,
  Menu,
  MenuItem,
  Fab
} from '@material-ui/core';

import FacebookIcon from '@material-ui/icons/Facebook';

import MenuIcon from '@material-ui/icons/Menu';

import { withStyles } from '@material-ui/core/styles';

import CookieConsent from 'react-cookie-consent';

import styles from './styles';

const Header = ({ classes }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <header>
      <CookieConsent>
        This website uses cookies to enhance the user experience.
      </CookieConsent>
      <AppBar position="fixed">
        <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Link to="/" style={{ color: 'white' }}>
            <Typography variant="h5">The Squirrels Drey</Typography>
          </Link>
          <Hidden lgDown>
            <Typography variant="h6">Homemade Food</Typography>
          </Hidden>

          <Hidden smDown>
            <Box>
              <Button color="inherit">
                <Link to="/about" style={{ color: 'white' }}>
                  <Typography variant="h5">About</Typography>
                </Link>
              </Button>
              {/*
              <Button color="inherit">
                <Link to="/menus" style={{ color: 'white' }}>
                  <Typography variant="h5">Menus</Typography>
                </Link>
              </Button>
              */}

              <Button color="inherit">
                <Link
                  to="/recipes"
                  style={{ textDecoration: 'none', color: 'white' }}
                >
                  <Typography variant="h5">Recipes</Typography>
                </Link>
              </Button>
              <Button color="inherit">
                <Link
                  to="/contact"
                  style={{ textDecoration: 'none', color: 'white' }}
                >
                  <Typography variant="h5">Contact</Typography>
                </Link>
              </Button>
              <Button color="inherit">
                <Link
                  to="/food"
                  style={{ textDecoration: 'none', color: 'white' }}
                >
                  <Typography variant="h5">Food</Typography>
                </Link>
              </Button>
            </Box>
            <Box>
              <Fab
                size="small"
                color="primary"
                aria-label="add"
                className={classes.fab}
                href="https://www.facebook.com/TheSquirrelsDrey"
              >
                <FacebookIcon />
              </Fab>
              <Fab
                size="small"
                color="primary"
                aria-label="add"
                className={classes.fab}
                href="https://www.tripadvisor.co.uk/Restaurant_Review-g7176428-d15110475-Reviews-The_Squirrels_Drey-Sporle_Norfolk_East_Anglia_England.html"
              >
                <svg
                  width="24"
                  height="15"
                  viewBox="0 0 24 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.7075 0.304576C15.3773 0.399295 16.0333 0.567548 16.6815 0.766725C17.813 1.11516 18.8807 1.59923 19.8849 2.22719C19.9547 2.27054 20.048 2.29805 20.1303 2.29805C21.3098 2.30292 22.4888 2.30122 23.6673 2.30219C23.7622 2.30219 23.8567 2.31217 23.9514 2.31753C23.9514 2.34066 23.9548 2.3504 23.9509 2.35576C23.8959 2.44049 23.8401 2.52401 23.7849 2.6085C23.3848 3.22211 23.043 3.86395 22.8411 4.57349C22.8192 4.6497 22.8146 4.7135 22.8662 4.78825C23.9161 6.29596 24.2512 7.95122 23.8124 9.73553C23.4277 11.3005 22.5306 12.5206 21.1676 13.3845C20.1934 14.0023 19.1171 14.2964 17.9673 14.3027C17.4843 14.3056 17.0036 14.2406 16.5317 14.1184C15.3819 13.8201 14.3963 13.2469 13.584 12.3789C13.4769 12.2649 13.3761 12.1459 13.2619 12.0171C12.8323 12.6572 12.4096 13.2869 11.9767 13.9331C11.5455 13.2888 11.1286 12.6652 10.7127 12.0441C10.684 12.0592 10.6757 12.0609 10.6701 12.0662C10.6606 12.074 10.6526 12.0835 10.645 12.0925C9.66254 13.2528 8.42657 13.964 6.92082 14.2019C6.0832 14.3346 5.25362 14.2869 4.44011 14.0626C3.28717 13.7459 2.30736 13.1376 1.51577 12.2401C0.742189 11.3626 0.261048 10.3438 0.0803759 9.18549C-0.126349 8.10438 0.125422 7.06199 0.188243 6.809C0.370376 6.07365 0.68789 5.39844 1.12374 4.77754C1.15442 4.73346 1.16514 4.65555 1.15053 4.60295C0.972777 3.95112 0.666463 3.35822 0.307798 2.79039C0.216732 2.646 0.107647 2.51232 0.00684117 2.37378C0.00684117 2.35795 0.00684117 2.34164 0.00684117 2.32557C0.0270511 2.328 0.0470174 2.3319 0.0667404 2.3319C1.27349 2.33238 2.48 2.33287 3.68675 2.33044C3.73934 2.33044 3.79778 2.30876 3.84258 2.28003C4.69042 1.73607 5.59378 1.30509 6.54292 0.969554C7.22737 0.728009 7.9262 0.539546 8.6389 0.401486C9.32896 0.268052 10.0227 0.174064 10.7237 0.1278C12.4328 -0.00368571 13.7988 0.177229 14.7075 0.304576ZM13.1946 8.27434C13.1946 10.9243 15.3447 13.0892 17.9851 13.0789C20.6355 13.0694 22.7758 10.9654 22.7739 8.28627C22.7719 5.5253 20.5323 3.44977 17.8824 3.50358C15.2663 3.55788 13.2185 5.66653 13.1946 8.27434ZM6.00894 3.48532C3.43132 3.46292 1.18388 5.61418 1.22893 8.35444C1.27081 10.9099 3.37702 13.0763 6.0625 13.0531C8.68833 13.0307 10.7989 10.8865 10.8038 8.28992C10.8079 5.62221 8.67153 3.48532 6.00894 3.48532ZM6.24658 2.23523C7.70267 2.3241 8.98174 2.83154 10.0624 3.81428C11.1408 4.79507 11.7727 6.01862 12.0023 7.45742C12.2385 6.03566 12.8538 4.82356 13.912 3.85251C14.9719 2.88049 16.2339 2.37037 17.6661 2.2625C15.9666 1.50694 14.1745 1.18602 12.3298 1.15047C10.2333 1.10932 8.19404 1.41831 6.24658 2.23523Z"
                    fill="white"
                  />
                  <path
                    d="M17.9754 5.25113C19.6153 5.24845 20.9436 6.56964 20.9436 8.20786C20.9436 9.85241 19.6379 11.1237 18.0976 11.1824C16.3773 11.2484 15.0009 9.87773 15.0014 8.21517C15.0028 6.53361 16.389 5.22337 17.9754 5.25113ZM19.9097 8.21517C19.909 7.14623 19.0448 6.27745 17.9832 6.27745C16.9094 6.27745 16.0352 7.14161 16.0308 8.20737C16.027 9.26851 16.9055 10.1514 17.9693 10.1543C19.0348 10.1585 19.9102 9.28215 19.9097 8.21517Z"
                    fill="white"
                  />
                  <path
                    d="M5.94563 5.25113C7.58458 5.24943 8.91478 6.57305 8.91064 8.21103C8.90601 9.86897 7.59919 11.1125 6.08588 11.1814C4.35879 11.2603 2.96528 9.88358 2.96844 8.212C2.97185 6.51851 4.36755 5.22289 5.94563 5.25113ZM7.87774 8.20859C7.87458 7.13309 7.00482 6.27575 5.91909 6.2777C4.87183 6.27964 3.99428 7.16352 3.99671 8.21468C3.99939 9.27801 4.87597 10.1524 5.94271 10.1553C7.00287 10.1578 7.88042 9.27485 7.87774 8.20859Z"
                    fill="white"
                  />
                  <path
                    d="M17.9768 7.23121C18.5203 7.23073 18.9659 7.67656 18.9608 8.21687C18.9554 8.7584 18.5174 9.19717 17.9829 9.19742C17.4326 9.19742 16.9902 8.76254 16.9914 8.22369C16.9924 7.66463 17.4222 7.2317 17.9768 7.23121Z"
                    fill="white"
                  />
                  <path
                    d="M5.94052 7.22245C6.49227 7.22196 6.93567 7.66268 6.93786 8.21273C6.94005 8.75815 6.49251 9.20594 5.94344 9.20715C5.38121 9.20837 4.94755 8.77398 4.94804 8.20883C4.94804 7.65391 5.38073 7.22318 5.94052 7.22245Z"
                    fill="white"
                  />
                </svg>
              </Fab>
            </Box>
          </Hidden>

          <Hidden mdUp>
            <Button
              color="secondary"
              className={classes.menuButton}
              aria-label="menu"
              onClick={handleClick}
            >
              <MenuIcon />
            </Button>
            <Menu
              className={classes.mobileMenu}
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>
                <Typography variant="h5">
                  <Link
                    to="/"
                    style={{
                      textDecoration: 'none',
                      color: '#FFF'
                    }}
                  >
                    Home
                  </Link>
                </Typography>
              </MenuItem>

              <MenuItem onClick={handleClose}>
                <Typography variant="h5">
                  <Link
                    to="/about"
                    style={{
                      textDecoration: 'none',
                      color: '#FFF'
                    }}
                  >
                    About
                  </Link>
                </Typography>
              </MenuItem>

              {/*
              <MenuItem onClick={handleClose}>
                <Typography variant="h5">
                  <Link
                    to="/menus"
                    style={{
                      textDecoration: 'none',
                      color: '#FFF'
                    }}
                  >
                    Menus
                  </Link>
                </Typography>
              </MenuItem>
              */}

              <MenuItem onClick={handleClose}>
                <Typography variant="h5">
                  <Link
                    to="/contact"
                    style={{
                      textDecoration: 'none',
                      color: '#FFF'
                    }}
                  >
                    Contact
                  </Link>
                </Typography>
              </MenuItem>

              <MenuItem onClick={handleClose}>
                <Typography variant="h5">
                  <Link
                    to="/recipes"
                    style={{
                      textDecoration: 'none',
                      color: '#FFF'
                    }}
                  >
                    Recipes
                  </Link>
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Typography variant="h5">
                  <Link
                    to="/food"
                    style={{
                      textDecoration: 'none',
                      color: '#FFF'
                    }}
                  >
                    Food
                  </Link>
                </Typography>
              </MenuItem>
              <Box>
                <Button
                  style={{ margin: 0 }}
                  color="secondary"
                  size="large"
                  aria-label="facebook"
                  className={classes.fab}
                  href="https://www.facebook.com/TheSquirrelsDrey"
                >
                  <FacebookIcon />
                </Button>
                <Button
                  style={{ margin: 0 }}
                  color="secondary"
                  size="large"
                  aria-label="tripadvisor"
                  className={classes.fab}
                  href="https://www.tripadvisor.co.uk/Restaurant_Review-g7176428-d15110475-Reviews-The_Squirrels_Drey-Sporle_Norfolk_East_Anglia_England.html"
                >
                  <svg
                    width="24"
                    height="15"
                    viewBox="0 0 24 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.7075 0.304576C15.3773 0.399295 16.0333 0.567548 16.6815 0.766725C17.813 1.11516 18.8807 1.59923 19.8849 2.22719C19.9547 2.27054 20.048 2.29805 20.1303 2.29805C21.3098 2.30292 22.4888 2.30122 23.6673 2.30219C23.7622 2.30219 23.8567 2.31217 23.9514 2.31753C23.9514 2.34066 23.9548 2.3504 23.9509 2.35576C23.8959 2.44049 23.8401 2.52401 23.7849 2.6085C23.3848 3.22211 23.043 3.86395 22.8411 4.57349C22.8192 4.6497 22.8146 4.7135 22.8662 4.78825C23.9161 6.29596 24.2512 7.95122 23.8124 9.73553C23.4277 11.3005 22.5306 12.5206 21.1676 13.3845C20.1934 14.0023 19.1171 14.2964 17.9673 14.3027C17.4843 14.3056 17.0036 14.2406 16.5317 14.1184C15.3819 13.8201 14.3963 13.2469 13.584 12.3789C13.4769 12.2649 13.3761 12.1459 13.2619 12.0171C12.8323 12.6572 12.4096 13.2869 11.9767 13.9331C11.5455 13.2888 11.1286 12.6652 10.7127 12.0441C10.684 12.0592 10.6757 12.0609 10.6701 12.0662C10.6606 12.074 10.6526 12.0835 10.645 12.0925C9.66254 13.2528 8.42657 13.964 6.92082 14.2019C6.0832 14.3346 5.25362 14.2869 4.44011 14.0626C3.28717 13.7459 2.30736 13.1376 1.51577 12.2401C0.742189 11.3626 0.261048 10.3438 0.0803759 9.18549C-0.126349 8.10438 0.125422 7.06199 0.188243 6.809C0.370376 6.07365 0.68789 5.39844 1.12374 4.77754C1.15442 4.73346 1.16514 4.65555 1.15053 4.60295C0.972777 3.95112 0.666463 3.35822 0.307798 2.79039C0.216732 2.646 0.107647 2.51232 0.00684117 2.37378C0.00684117 2.35795 0.00684117 2.34164 0.00684117 2.32557C0.0270511 2.328 0.0470174 2.3319 0.0667404 2.3319C1.27349 2.33238 2.48 2.33287 3.68675 2.33044C3.73934 2.33044 3.79778 2.30876 3.84258 2.28003C4.69042 1.73607 5.59378 1.30509 6.54292 0.969554C7.22737 0.728009 7.9262 0.539546 8.6389 0.401486C9.32896 0.268052 10.0227 0.174064 10.7237 0.1278C12.4328 -0.00368571 13.7988 0.177229 14.7075 0.304576ZM13.1946 8.27434C13.1946 10.9243 15.3447 13.0892 17.9851 13.0789C20.6355 13.0694 22.7758 10.9654 22.7739 8.28627C22.7719 5.5253 20.5323 3.44977 17.8824 3.50358C15.2663 3.55788 13.2185 5.66653 13.1946 8.27434ZM6.00894 3.48532C3.43132 3.46292 1.18388 5.61418 1.22893 8.35444C1.27081 10.9099 3.37702 13.0763 6.0625 13.0531C8.68833 13.0307 10.7989 10.8865 10.8038 8.28992C10.8079 5.62221 8.67153 3.48532 6.00894 3.48532ZM6.24658 2.23523C7.70267 2.3241 8.98174 2.83154 10.0624 3.81428C11.1408 4.79507 11.7727 6.01862 12.0023 7.45742C12.2385 6.03566 12.8538 4.82356 13.912 3.85251C14.9719 2.88049 16.2339 2.37037 17.6661 2.2625C15.9666 1.50694 14.1745 1.18602 12.3298 1.15047C10.2333 1.10932 8.19404 1.41831 6.24658 2.23523Z"
                      fill="white"
                    />
                    <path
                      d="M17.9754 5.25113C19.6153 5.24845 20.9436 6.56964 20.9436 8.20786C20.9436 9.85241 19.6379 11.1237 18.0976 11.1824C16.3773 11.2484 15.0009 9.87773 15.0014 8.21517C15.0028 6.53361 16.389 5.22337 17.9754 5.25113ZM19.9097 8.21517C19.909 7.14623 19.0448 6.27745 17.9832 6.27745C16.9094 6.27745 16.0352 7.14161 16.0308 8.20737C16.027 9.26851 16.9055 10.1514 17.9693 10.1543C19.0348 10.1585 19.9102 9.28215 19.9097 8.21517Z"
                      fill="white"
                    />
                    <path
                      d="M5.94563 5.25113C7.58458 5.24943 8.91478 6.57305 8.91064 8.21103C8.90601 9.86897 7.59919 11.1125 6.08588 11.1814C4.35879 11.2603 2.96528 9.88358 2.96844 8.212C2.97185 6.51851 4.36755 5.22289 5.94563 5.25113ZM7.87774 8.20859C7.87458 7.13309 7.00482 6.27575 5.91909 6.2777C4.87183 6.27964 3.99428 7.16352 3.99671 8.21468C3.99939 9.27801 4.87597 10.1524 5.94271 10.1553C7.00287 10.1578 7.88042 9.27485 7.87774 8.20859Z"
                      fill="white"
                    />
                    <path
                      d="M17.9768 7.23121C18.5203 7.23073 18.9659 7.67656 18.9608 8.21687C18.9554 8.7584 18.5174 9.19717 17.9829 9.19742C17.4326 9.19742 16.9902 8.76254 16.9914 8.22369C16.9924 7.66463 17.4222 7.2317 17.9768 7.23121Z"
                      fill="white"
                    />
                    <path
                      d="M5.94052 7.22245C6.49227 7.22196 6.93567 7.66268 6.93786 8.21273C6.94005 8.75815 6.49251 9.20594 5.94344 9.20715C5.38121 9.20837 4.94755 8.77398 4.94804 8.20883C4.94804 7.65391 5.38073 7.22318 5.94052 7.22245Z"
                      fill="white"
                    />
                  </svg>
                </Button>
              </Box>
            </Menu>
          </Hidden>
        </Toolbar>
      </AppBar>
    </header>
  );
};

export default withStyles(styles)(Header);
