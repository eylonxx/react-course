import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import './ColorBox.css';
import { withStyles } from '@mui/styles';
import styles from './styles/ColorBoxStyles';

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
