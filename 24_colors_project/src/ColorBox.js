import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ColorBox.css';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import chroma from 'chroma-js';

export default function ColorBox(props) {
  const { name, background, paletteId, id, showLink } = props;
  const [copied, setCopied] = useState(false);

  const changeCopyState = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };

  const isDarkColor = chroma(background).luminance() <= 0.08;
  //.luminance takse a color value and returns a value between 0-1
  const isLightColor = chroma(background).luminance() >= 0.6;

  return (
    <CopyToClipboard text={background} onCopy={changeCopyState}>
      <div style={{ background }} className="ColorBox">
        <div className={`copy-overlay ${copied && 'show'}`} style={{ background }}></div>
        <div className={`copy-msg ${copied && 'show'}`}>
          <h1>copied!</h1>
          <p className={isLightColor && 'dark-text'}>{background}</p>
        </div>
        <div className="copy-container">
          <div className="box-content">
            <span className={isDarkColor && 'light-text'}>{name}</span>
          </div>
          <button className="copy-button">Copy</button>
        </div>
        {showLink && (
          <Link to={`/palette/${paletteId}/${id}`} onClick={(e) => e.stopPropagation()}>
            <span className={`see-more ${isLightColor && 'dark-text'}`}>MORE</span>
          </Link>
        )}
      </div>
    </CopyToClipboard>
  );
}
