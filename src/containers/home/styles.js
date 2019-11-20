import { orange } from '@material-ui/core/colors';

const styles = (theme) => ({
  backgroundImg: {
    width: '100%',
    minHeight: '100vh',
    zIndex: '-1',
  },
  heroText: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
    minHeight: '100vh',
    color: 'white',
    padding: '0 0 20px 0',
  },
  container: {
    background: 'white',
    padding: '150px 0',
    borderBottom: '2px solid black',
  },
  containerOrange: {
    background: orange[700],
    padding: '150px 0',
    borderBottom: '2px solid black',
  },
  leadTitle: {
    margin: '50px 0',
  },
  leadSection: {
    padding: '0 40px',
    [theme.breakpoints.down('sm')]: {
      padding: '0',
    },
  },
  infoImage: {
    height: '400px',
    width: '100%',
    margin: '100px 0',
  },
  gmap: {
    height: '400px',
    width: '100%',
  },
  newsItemBorder: {
    borderLeft: '2px solid black',
    borderRight: '2px solid black',
    padding: '0 40px',
    [theme.breakpoints.down('md')]: {
      borderLeft: 'none',
      borderRight: 'none',
    },
    [theme.breakpoints.down('sm')]: {
      padding: '0',
    },
  },
  newsItem: {
    padding: '0 40px',
    [theme.breakpoints.down('sm')]: {
      padding: '0',
    },
  },
});

export default styles;
