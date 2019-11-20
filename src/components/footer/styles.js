import { orange } from '@material-ui/core/colors';

const styles = (theme) => ({
  root: {
    background: orange[700],
  },
  container: {
    background: 'white',
    padding: '50px 0 100px 0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: '300px',
    [theme.breakpoints.down('md')]: {
      margin: '100px 0 0 0',
    },
  },
  copy: {
    borderTop: '2px solid black',
    padding: '40px 0',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1rem',
      lineHeight: '5rem',
    },
  },
  copyText: {
    color: 'white',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.5rem',
      lineHeight: '3rem',
    },
  },
  aaron: {
    width: '100%',
    fontFamily: 'Rock Salt',
  },
});

export default styles;
