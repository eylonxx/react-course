import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import chroma from 'chroma-js';
import './ColorBox.css';
import { withStyles } from '@mui/styles';

const styles = {
  seeMore: {
    background: 'rgba(255,255,255,0.3)',
    position: 'absolute',
    border: 'none',
    right: '0px',
    bottom: '0px',
    width: '60px',
    height: '30px',
    textAlign: 'center',
    lineHeight: '30px',
    textTransform: 'uppercase',
  },
  copyButton: {
    width: '100px',
    height: '30px',
    position: 'absolute',
    display: 'inline-block',
    top: '50%',
    left: '50%',
    marginLeft: '-50px' /*offset*/,
    marginTop: '-15px',
    textAlign: 'center',
    outline: 'none',
    background: 'rgba(255, 255, 255, 0.3)',
    fontSize: '1rem',
    lineHeight: '30px',
    border: 'none',
    textTransform: 'uppercase',
    textDecoration: 'none',
    opacity: '0',
  },
  ColorBox: {
    width: '20%',
    margin: '0 auto',
    display: 'inline-block',
    position: 'relative',
    cursor: 'pointer',
    marginBottom: '-4px',
    '&:hover button': {
      opacity: 1,
    },
  },
};

function ColorBox(props) {
  const { name, background, paletteId, id, showingFullPalette, luminance, classes } = props;
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

  const boxHeight = () => {
    return showingFullPalette ? 'showingFullPalette' : 'showingSinglePalette';
  };

  return (
    <CopyToClipboard text={background} onCopy={changeCopyState}>
      <div style={{ background }} className={`${classes.ColorBox} ${boxHeight()}`}>
        <div className={`copy-overlay ${copied && 'show'}`} style={{ background }}></div>
        <div className={`copy-msg ${copied && 'show'}`}>
          <h1>copied!</h1>
          <p className="">{background}</p>
        </div>
        <div className="copy-container">
          <div className="box-content">
            <span className={textColor(0.4)}>{name}</span>
          </div>
          <button className={`${classes.copyButton} ${textColor(0.4)}`}>Copy</button>
        </div>
        {showingFullPalette && (
          <Link to={`/palette/${paletteId}/${id}`} onClick={(e) => e.stopPropagation()}>
            <span className={`${classes.seeMore} ${textColor(0.4)}`}>MORE</span>
          </Link>
        )}
      </div>
    </CopyToClipboard>
  );
}

export default withStyles(styles)(ColorBox);
