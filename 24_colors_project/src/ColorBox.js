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
    textDecoration: 'none',
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
      opacity: '1',
      transition: '0.5s',
    },
  },
  boxContent: {
    boxSizing: 'border-box',
    position: 'absolute',
    padding: '10px',
    width: '100%',
    left: '0',
    bottom: '0',
    color: 'black',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    fontSize: '12px',
  },
  copyOverlay: {
    opacity: '0',
    zIndex: '0',
    width: '100%',
    height: '100%',
    transform: 'scale(0.1)',
  },
  showOverlay: {
    opacity: '1',
    transform: 'scale(50)',
    zIndex: '10',
    position: 'absolute',
    transition: 'transform 0.6s ease-in-out',
  },
  copyMessage: {
    position: 'fixed',
    left: '0',
    right: '0',
    top: '0',
    bottom: '0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    fontSize: '4rem',
    transform: 'scale(0.1)',
    opacity: '0',
    color: 'white',
    '& h1': {
      fontWeight: '400',
      textShadow: '1px 2px black',
      background: 'rgba(255, 255, 255, 0.2)',
      width: '100%',
      textAlign: 'center',
      marginBottom: '0',
      padding: '1rem',
      textTransform: 'uppercase',
    },
    '& p': {
      fontSize: '2rem',
      textTransform: 'uppercase',
      fontWeight: '100',
    },
  },
  showMessage: {
    opacity: '1',
    transform: 'scale(1)',
    zIndex: '25',
    transition: 'all 0.4s ease-in-out',
    transitionDelay: '0.3s',
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
        <div className={`${classes.copyOverlay} ${copied && classes.showOverlay}`} style={{ background }}></div>
        <div className={`${classes.copyMessage} ${copied && classes.showMessage}`}>
          <h1>copied!</h1>
          <p className="">{background}</p>
        </div>
        <div className="copy-container">
          <div className={classes.boxContent}>
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
