import Palette from './Palette';
import { Routes, Route } from 'react-router-dom';
import PaletteList from './PaletteList';
import seedColors from './seedColors';
function App() {
  return (
    <Routes>
      <Route path="/" element={<PaletteList palettes={seedColors} />} />
      <Route path="/palette/:id" element={<Palette />} />
    </Routes>

    // <div className="App">
    //   <Palette palette={generatePalette(seedColors[5])} />
    // </div>
  );
}

export default App;
