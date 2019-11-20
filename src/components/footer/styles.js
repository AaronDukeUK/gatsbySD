const styles = () => ({
  root: {
    background: 'white',
  },
  container: {
    padding: '50px 0 100px 0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    backgroundImage: "url('../../images/logo.svg')",
    height: '200px',
    width: '200px',

    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  copy: {
    borderTop: '2px solid black',
  },
});

export default styles;
