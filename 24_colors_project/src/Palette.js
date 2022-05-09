import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import ColorBox from './ColorBox';
import seedColors from './seedColors';
import { generatePalette } from './colorHelpers';
import chroma from 'chroma-js';
import Navbar from './Navbar';
import Footer from './Footer';
import styles from './styles/PaletteStyles';
import { withStyles } from '@mui/styles';

function Palette(props) {
  const [level, setLevel] = useState(500);
  const [format, setFormat] = useState('hex');
  const { id } = useParams();
  const { classes } = props;

  const findPalette = (id) => {
    return seedColors.find((palette) => palette.id === id);
  };

  const changeLevel = (newLevel) => {
    setLevel(newLevel);
  };

  const changeFormat = (val) => {
    setFormat(val);
  };
  const palette = generatePalette(findPalette(id));

  const colorBoxes = palette.colors[level].map((color) => (
    <ColorBox
      background={color[format]}
      name={color.name}
      key={color.id}
      id={color.id}
      paletteId={id}
      luminance={chroma(color.hex).luminance()}
      showingFullPalette={true}
    />
  ));

  return (
    <div className={classes.Palette}>
      <Navbar sliderLevel={level} sliderChange={changeLevel} changeFormat={changeFormat} showingAllColors />
      <div className={classes.colors}>{colorBoxes}</div>
      <Footer palette={palette} />
    </div>
  );
}
export default withStyles(styles)(Palette);
