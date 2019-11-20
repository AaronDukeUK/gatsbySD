const styles = theme => ({
  container: {
    borderBottom: "2px solid black",
    paddingBottom: "100px"
  },

  imageContainer: {
    width: "300px",
    margin: "100px 0",
    [theme.breakpoints.down("sm")]: {
      margin: "0"
    }
  },

  image: {
    borderRadius: "50%"
  },

  title: {
    padding: "150px 0 50px 0"
  }
});

export default styles;
