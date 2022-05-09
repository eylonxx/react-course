import React from 'react';
import styles from './styles/PaletteFooterStyles';
import { withStyles } from '@mui/styles';

function Footer(props) {
  const { paletteName, emoji } = props.palette;
  const { classes } = props;
  return (
    <footer className={classes.paletteFooter}>
      <div>
        {paletteName}
        <span className={classes.emoji}>{emoji}</span>
      </div>
    </footer>
  );
}
export default withStyles(styles)(Footer);
