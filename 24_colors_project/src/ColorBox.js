import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import chroma from 'chroma-js';
import './ColorBox.css';

function ColorBox(props) {
  const { name, background, paletteId, id, showLink, luminance } = props;
  const [copied, setCopied] = useState(false);
  const changeCopyState = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };

  const textColor = (threshold) => {
    return luminance < threshold ? 'light-text' : 'dark-text';
  };

  return (
    <CopyToClipboard text={background} onCopy={changeCopyState}>
      <div style={{ background }} className="ColorBox">
        <div className={`copy-overlay ${copied && 'show'}`} style={{ background }}></div>
        <div className={`copy-msg ${copied && 'show'}`}>
          <h1>copied!</h1>
          <p className="">{background}</p>
        </div>
        <div className="copy-container">
          <div className="box-content">
            <span className={textColor(0.4)}>{name}</span>
          </div>
          <button className={`copy-button ${textColor(0.4)}`}>Copy</button>
        </div>
        {showLink && (
          <Link to={`/palette/${paletteId}/${id}`} onClick={(e) => e.stopPropagation()}>
            <span className={`see-more ${textColor(0.4)}`}>MORE</span>
          </Link>
        )}
      </div>
    </CopyToClipboard>
  );
}

export default ColorBox;
