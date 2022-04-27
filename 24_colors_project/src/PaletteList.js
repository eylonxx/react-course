import React from 'react';
import { Link } from 'react-router-dom';

export default function PaletteList(props) {
  const { palettes } = props;
  return (
    <div>
      {palettes.map((palette) => (
        <Link key={palette.id} to={`/palette/${palette.id}`}>
          {palette.paletteName}
        </Link>
      ))}
    </div>
  );
}
