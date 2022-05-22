import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import MiniPalette from './MiniPalette';
import { withStyles } from '@mui/styles';
import styles from './styles/PaletteListStyles';

function PaletteList(props) {
  const navigate = useNavigate();
  const goToPalette = (id) => {
    navigate(`/palette/${id}`);
  };
  const { palettes, classes } = props;
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <nav className={classes.nav}>
          <h1>React colors!</h1>
          <Link to="/palette/new">Create palette</Link>
        </nav>
        <div className={classes.palettes}>
          {palettes.map((palette) => (
            <MiniPalette key={palette.id} {...palette} handleClick={() => goToPalette(palette.id)} />
          ))}
        </div>
      </div>
    </div>
  );
}
export default withStyles(styles)(PaletteList);
