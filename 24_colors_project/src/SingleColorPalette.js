import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import seedColors from './seedColors';
import { generatePalette } from './colorHelpers';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import Footer from './Footer';
import { withStyles } from '@mui/styles';
const styles = {
  Palette: { height: '100vh', overFlow: 'hidden', display: 'flex', flexDirection: 'column' },
  colors: {
    height: '90%',
  },
  goBack: {
    width: '20%',
    margin: '0 auto',
    height: '50%',
    display: 'inline-block',
    position: 'relative',
    cursor: 'pointer',
    marginBottom: '-4px',
    opacity: '1',
    backgroundColor: 'black',
    '& a': {
      width: '100px',
      height: '30px',
      position: 'absolute',
      color: 'white',
      display: 'inline-block',
      top: '50%',
      left: '50%',
      marginLeft: '-50px' /*offset*/,
      marginTop: '-15px',
      textAlign: 'center',
      outline: 'none',
      background: 'rgba(255, 255, 255, 0.3)',
      fontSize: '1rem',
      lineHeight: '30px',
      border: 'none',
      textTransform: 'uppercase',
      textDecoration: 'none',
    },
  },
};

function SingleColorPalette(props) {
  const { paletteId, colorId } = useParams();
  const [format, setFormat] = useState('hex');
  const { classes } = props;

  const findPalette = (id) => {
    return seedColors.find((palette) => palette.id === id);
  };
  const palette = generatePalette(findPalette(paletteId));

  const changeFormat = (val) => {
    setFormat(val);
  };

  const gatherShades = (palette, colorToFilterBy) => {
    let shades = [];
    let allColors = palette.colors;
    for (let key in allColors) {
      shades = shades.concat(allColors[key].filter((color) => color.id === colorToFilterBy));
    }
    return shades.slice(1);
  };
  const shades = gatherShades(palette, colorId);

  const colorBoxes = shades.map((color) => (
    <ColorBox key={color.name} name={color.name} background={color[format]} showingFullPalette={false} />
  ));
  return (
    <div className={classes.Palette}>
      <Navbar changeFormat={changeFormat} showingAllColors={false} />
      <div className={classes.colors}>
        {colorBoxes}
        <div className={classes.goBack}>
          <Link to={`/palette/${paletteId}`}>go back</Link>
        </div>
      </div>
      <Footer palette={palette} />
    </div>
  );
}
export default withStyles(styles)(SingleColorPalette);
