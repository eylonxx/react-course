import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import seedColors from './seedColors';
import { generatePalette } from './colorHelpers';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import Footer from './Footer';
import chroma from 'chroma-js';
import './ColorBox.css';
import styles from './styles/PaletteStyles';
import { withStyles } from '@mui/styles';

function SingleColorPalette(props) {
  const { paletteId, colorId } = useParams();
  const [format, setFormat] = useState('hex');
  const { classes, luminance } = props;

  const textColor = (threshold) => {
    return luminance < threshold ? 'light-text' : 'dark-text';
  };

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
    <ColorBox
      key={color.name}
      name={color.name}
      background={color[format]}
      showingFullPalette={false}
      luminance={chroma(color.hex).luminance()}
    />
  ));
  return (
    <div className={classes.Palette}>
      <Navbar changeFormat={changeFormat} showingAllColors={false} />
      <div className={`${classes.colors} ${textColor(0.4)}`}>
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
