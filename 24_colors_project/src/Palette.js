import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import ColorBox from './ColorBox';
import seedColors from './seedColors';
import './Palette.css';
import { generatePalette } from './colorHelpers';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Palette() {
  const [level, setLevel] = useState(500);
  const [format, setFormat] = useState('hex');
  const { id } = useParams();
  console.log(id);

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
      showLink={true}
    />
  ));

  return (
    <div className="Palette">
      <Navbar sliderLevel={level} sliderChange={changeLevel} changeFormat={changeFormat} showingAllColors />
      <div className="Palette-colors">{colorBoxes}</div>
      <Footer palette={palette} />
    </div>
  );
}
