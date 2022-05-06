import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import seedColors from './seedColors';
import { generatePalette } from './colorHelpers';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import Footer from './Footer';

export default function SingleColorPalette() {
  const { paletteId, colorId } = useParams();
  const [format, setFormat] = useState('hex');

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
    <div className="Palette SingleColorPalette">
      <Navbar changeFormat={changeFormat} showingAllColors={false} />
      <div className="Palette-colors">
        {colorBoxes}
        <div className="go-back ColorBox">
          <Link to={`/palette/${paletteId}`} className="back-button">
            go back
          </Link>
        </div>
      </div>
      <Footer palette={palette} />
    </div>
  );
}
