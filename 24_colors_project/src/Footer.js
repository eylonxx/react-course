import React from 'react';

export default function Footer(props) {
  const { paletteName, emoji } = props.palette;
  return (
    <footer className="Palette-footer">
      <div>
        {paletteName}
        <span className="emoji">{emoji}</span>
      </div>
    </footer>
  );
}
