import React from 'react';
import { useParams } from 'react-router-dom';
import seedColors from './seedColors';
import { generatePalette } from './colorHelpers';
import ColorBox from './ColorBox';

export default function SingleColorPalette() {
  const { paletteId, colorId } = useParams();

  const findPalette = (id) => {
    return seedColors.find((palette) => palette.id === id);
  };
  const palette = generatePalette(findPalette(paletteId));

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
    <ColorBox key={color.id} name={color.name} background={color.hex} showLink={false} />
  ));
  return (
    <div className="Palette SingleColorPalette">
      SingleColorPalette
      <div className="Palette-colors">{colorBoxes}</div>
    </div>
  );
}
