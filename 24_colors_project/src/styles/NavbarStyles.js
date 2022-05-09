const styles = {
  navbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: '5vh',
  },
  logo: {
    marginRight: '15px',
    padding: '0 13px',
    fontSize: '22px',
    backgroundColor: '#eceff1',
    fontFamily: 'Roboto',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    '& a': {
      textDecoration: 'none',
      color: 'black',
    },
  },
  selectContainer: {
    marginLeft: 'auto',
    marginRight: '1rem',
  },
  slider: {
    width: '350px',
    margin: '0 10px',
    display: 'inline-block',
  },
};

export default styles;
