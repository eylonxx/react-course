import Palette from './Palette';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<h1>Palette list goes here</h1>} />
      <Route path="/palette/:id" element={<Palette />} />
    </Routes>

    // <div className="App">
    //   <Palette palette={generatePalette(seedColors[5])} />
    // </div>
  );
}

export default App;
