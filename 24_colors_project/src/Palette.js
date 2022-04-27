import React, { useState } from 'react';
import ColorBox from './ColorBox';
import './Palette.css';
import Navbar from './Navbar';

export default function Palette(props) {
  const [level, setLevel] = useState(500);
  const [format, setFormat] = useState('hex');
  const changeLevel = (newLevel) => {
    setLevel(newLevel);
  };
  const { colors, paletteName, emoji } = props.palette;

  const changeFormat = (val) => {
    setFormat(val);
  };

  const colorBoxes = colors[level].map((color) => (
    <ColorBox background={color[format]} name={color.name} key={color.id} />
  ));
  return (
    <div className="Palette">
      <Navbar sliderLevel={level} sliderChange={changeLevel} changeFormat={changeFormat} />
      <div className="Palette-colors">{colorBoxes}</div>
      <footer className="Palette-footer">
        {paletteName}
        <span className="emoji">{emoji}</span>
      </footer>
    </div>
  );
}
