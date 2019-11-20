require('typeface-roboto');
require('typeface-anton');
require('typeface-gochi-hand');

const typography = () => ({
  h1: {
    fontFamily: 'Anton',
    textTransform: 'uppercase',
    letterSpacing: '0.7rem',
    textAlign: 'center',
  },
  h2: {
    fontFamily: 'Anton',
    textTransform: 'uppercase',
    letterSpacing: '0.7rem',
    lineHeight: '6rem',
    margin: '150px 0 50px 0',
  },
  h3: {
    fontFamily: 'Anton',
    textTransform: 'uppercase',
    letterSpacing: '0.6rem',
    lineHeight: '4rem',
  },
  h4: {
    fontFamily: 'Anton',
    textTransform: 'uppercase',
    letterSpacing: '0.5rem',
    margin: '50px 0',
  },
  h5: {
    fontFamily: 'Anton',
    textTransform: 'uppercase',
    letterSpacing: '0.4rem',
    margin: '20px 0',
  },
  h6: {
    fontFamily: 'Anton',
    textTransform: 'uppercase',
    letterSpacing: '0.4rem',
  },
  body1: {
    fontSize: '1.8rem',
    lineHeight: '3.6rem',
    margin: '2rem 0',
  },
  body2: {
    fontSize: '1.4rem',
    lineHeight: '2.8rem',
  },
});

export default typography;
