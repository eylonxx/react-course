import React from 'react';
import { withStyles } from '@mui/styles';
import styles from './styles/MiniPaletteStyles';

function MiniPalette(props) {
  const { classes, paletteName, emoji, colors, handleClick } = props;

  const miniColorBoxes = colors.map((color) => (
    <div className={classes.miniColor} style={{ backgroundColor: color.color }} key={color.name}></div>
  ));
  return (
    <div onClick={handleClick} className={classes.root}>
      <div className={classes.colors}>{miniColorBoxes}</div>
      <h5 className={classes.title}>
        {paletteName} <span className={classes.emoji}>{emoji}</span>
      </h5>
    </div>
  );
}
export default withStyles(styles)(MiniPalette); //returns the class with those classes
