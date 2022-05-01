import Palette from './Palette';
import { Routes, Route } from 'react-router-dom';
import PaletteList from './PaletteList';
import SingleColorPalette from './SingleColorPalette';
import seedColors from './seedColors';
function App() {
  return (
    <Routes>
      <Route path="/" element={<PaletteList palettes={seedColors} />} />
      <Route path="/palette/:id" element={<Palette />} />
      <Route path="/palette/:paletteId/:colorId" element={<SingleColorPalette />} />
    </Routes>

    // <div className="App">
    //   <Palette palette={generatePalette(seedColors[5])} />
    // </div>
  );
}

export default App;
