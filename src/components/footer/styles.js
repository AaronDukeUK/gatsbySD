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
    width: '200px',
    [theme.breakpoints.down('md')]: {
      margin: '100px 0 0 0',
    },
  },
  copy: {
    borderTop: '2px solid black',
    padding: '40px 0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1rem',
      lineHeight: '5rem',
    },
  },
  copyText: {
    color: 'white',

    [theme.breakpoints.down('sm')]: {
      fontSize: '1.7rem',
      lineHeight: '3rem',
    },
  },
  aaron: {
    fontFamily: 'East Sea Dokdo',
    fontSize: '2rem',
  },
  ad: {
    width: '30px',
  },
});

export default styles;
