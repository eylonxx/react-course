import React, { useState } from 'react';
import ColorBox from './ColorBox';
import './Palette.css';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

export default function Palette(props) {
  const [level, setLevel] = useState(500);
  const changeLevel = (newLevel) => {
    setLevel(newLevel);
  };
  const { colors } = props.palette;

  const colorBoxes = colors[level].map((color) => <ColorBox background={color.hex} name={color.name} />);
  return (
    <div className="Palette">
      <div className="slider">
        <Slider
          defaultValue={level}
          min={100}
          max={900}
          step={100}
          trackStyle={{ backgroundColor: 'transparent' }}
          railStyle={{ height: '8px' }}
          handleStyle={{
            backgroundColor: 'green',
            outline: 'none',
            border: '2px solid green',
            boxShadow: 'none',
            width: '13px',
            height: '13px',
            marginLeft: '-7px',
            marginTop: '-3px',
          }}
          onAfterChange={changeLevel}
        />
      </div>
      {/* navbar here */}
      <div className="Palette-colors">{colorBoxes}</div>
      {/* footer here */}
    </div>
  );
}
