const styles = theme => ({
  imageContainerAbout: {
    width: '300px',
    margin: '100px 0',
    [theme.breakpoints.down('sm')]: {
      margin: '50px 0'
    }
  },

  image: {
    borderRadius: '50%'
  },

  title: {
    padding: '150px 0 50px 0'
  },
  imagesContainer: {
    padding: '10px 0'
  },
  sundayContainer: {
    marginTop: '150px',
    color: 'white',
    background: '#F57C00',
    padding: '10px 0'
  },
  sloganContainer: {
    color: 'white',
    background: '#F57C00',
    padding: '10px 0'
  },
  aboutAddonContainer: {
    maxWidth: '100%',
    overflow: 'hidden'
  }
});

export default styles;
