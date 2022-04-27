import React, { useState } from 'react';
import Slider from 'rc-slider';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import 'rc-slider/assets/index.css';
import './Navbar.css';

export default function Navbar(props) {
  const { sliderLevel, sliderChange, changeFormat } = props;
  const [format, setFormat] = useState('hex');
  const handleChange = (e) => {
    setFormat(e.target.value);
    changeFormat(e.target.value);
  };
  return (
    <div className="Navbar">
      <div className="logo">
        <a href="/">reactcolorpicker</a>
      </div>
      <div className="slider">
        <div className="slider-container">
          <span>Level: {sliderLevel}</span>
          <Slider
            defaultValue={sliderLevel}
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
            onChange={sliderChange}
          />
        </div>
      </div>
      <div className="select-container">
        <Select value={format} onChange={handleChange}>
          <MenuItem value="hex">HEX</MenuItem>
          <MenuItem value="rgb">RGB</MenuItem>
          <MenuItem value="rgba">RGBA</MenuItem>
        </Select>
      </div>
    </div>
  );
}
