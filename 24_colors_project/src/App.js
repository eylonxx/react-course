import Palette from './Palette';
import { Routes, Route } from 'react-router-dom';
import PaletteList from './PaletteList';
import SingleColorPalette from './SingleColorPalette';
import seedColors from './seedColors';
import NewPaletteForm from './NewPaletteForm';
import { useState } from 'react';
function App() {
  const [palettes, setPalettes] = useState(seedColors);

  const savePalette = (newPalette) => {
    console.log(newPalette);
    setPalettes([...palettes, newPalette]);
  };
  return (
    <Routes>
      <Route path="/" element={<PaletteList palettes={palettes} />} />
      <Route path="/palette/new" element={<NewPaletteForm savePalette={savePalette} />} />
      <Route path="/palette/:id" element={<Palette palettes={palettes} />} />
      <Route path="/palette/:paletteId/:colorId" element={<SingleColorPalette />} />
    </Routes>

    // <div className="App">
    //   <Palette palette={generatePalette(seedColors[5])} />
    // </div>
  );
}

export default App;
