import { createMuiTheme } from '@material-ui/core/styles';
import merge from 'lodash/merge';

import { orange } from '@material-ui/core/colors';
import typography from './typography';
import palette from './palette';

const muiTheme = createMuiTheme({
  typography: {
    useNextVariants: true,
    fontFamily: typography.fontFamily,
  },
  palette,
});

muiTheme.typography = merge(
  muiTheme.typography,
  typography(muiTheme.typography),
);

// Overrides
muiTheme.overrides = {
  MuiTypography: {
    h1: {
      [muiTheme.breakpoints.down('md')]: {
        fontSize: '4rem',
        letterSpacing: '0.6rem',
      },
      [muiTheme.breakpoints.down('sm')]: {
        fontSize: '3rem',
        letterSpacing: '0.5rem',
      },
      [muiTheme.breakpoints.down('xs')]: {
        fontSize: '2rem',
        letterSpacing: '0.3rem',
      },
    },

    h2: {
      [muiTheme.breakpoints.down('md')]: {
        fontSize: '3.5rem',
        letterSpacing: '0.5rem',
      },
      [muiTheme.breakpoints.down('sm')]: {
        fontSize: '3rem',
        letterSpacing: '0.4rem',
      },
      [muiTheme.breakpoints.down('xs')]: {
        fontSize: '2rem',
        letterSpacing: '0.3rem',
      },
    },

    h3: {
      [muiTheme.breakpoints.down('md')]: {
        fontSize: '3rem',
        letterSpacing: '0.5rem',
      },
      [muiTheme.breakpoints.down('sm')]: {
        fontSize: '2.5rem',
        letterSpacing: '0.4rem',
      },
      [muiTheme.breakpoints.down('xs')]: {
        fontSize: '2rem',
        letterSpacing: '0.3rem',
      },
    },
    h4: {
      [muiTheme.breakpoints.down('md')]: {
        fontSize: '2.5rem',
        letterSpacing: '0.5rem',
      },
      [muiTheme.breakpoints.down('sm')]: {
        fontSize: '2.2rem',
        letterSpacing: '0.4rem',
      },
      [muiTheme.breakpoints.down('xs')]: {
        fontSize: '2rem',
        letterSpacing: '0.3rem',
      },
    },

    h5: {
      [muiTheme.breakpoints.down('lg')]: {
        fontSize: '1.2rem',
        letterSpacing: '0.4rem',
      },
      [muiTheme.breakpoints.down('sm')]: {
        fontSize: '2rem',
        letterSpacing: '0.4rem',
      },
      [muiTheme.breakpoints.down('xs')]: {
        fontSize: '1.2rem',
        letterSpacing: '0.3rem',
      },
    },
    body1: {
      [muiTheme.breakpoints.down('sm')]: {
        fontSize: '1.4rem',
      },
    },
    body2: {
      [muiTheme.breakpoints.down('sm')]: {
        fontSize: '1.2rem',
      },
    },
    colorInherit: {
      color: 'inherit',
    },
    colorSecondary: {
      color: muiTheme.palette.secondary.main,
    },
    colorPrimary: {
      color: muiTheme.palette.primary.main,
    },
  },
  MuiPopover: {
    root: {
      width: '100vw',
    },
  },
  MuiMenu: {
    paper: {
      backgroundColor: muiTheme.palette.primary.main,
      width: '100vw',
      minHeight: '400px',
      position: 'fixed',
      paddingBottom: '40px',
    },
    list: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
  MuiMenuItem: {
    root: {
      margin: 0,
      maxHeight: '100px',
    },
  },
  MuiButton: {
    // Name of the rule
    contained: {
      // Some CSS
      color: 'white',
      margin: '50px 0',
      backgroundColor: orange[500],
      '&:hover': {
        backgroundColor: orange[800],
      },
    },
  },
};

export default muiTheme;
