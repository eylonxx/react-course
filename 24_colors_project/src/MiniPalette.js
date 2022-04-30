import React from 'react';
import { withStyles } from '@mui/material';

const styles = {
  main: {
    backgroundColor: 'purple',
    border: '3px solid teal ',
  },
};

function MiniPalette(props) {
  const { classes } = props;
  return (
    <div className={classes.main}>
      <h1>hi</h1>
    </div>
  );
}
export default withStyles(styles)(MiniPalette); //returns the class with those classes
