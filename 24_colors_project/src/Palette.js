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
  const { colors } = props.palette;

  const changeFormat = (val) => {
    setFormat(val);
  };

  const colorBoxes = colors[level].map((color) => <ColorBox background={color[format]} name={color.name} />);
  return (
    <div className="Palette">
      <Navbar sliderLevel={level} sliderChange={changeLevel} changeFormat={changeFormat} />
      <div className="Palette-colors">{colorBoxes}</div>
      {/* footer here */}
    </div>
  );
}
