import Palette from './Palette';
import seedColors from './seedColors';
import { generatePalette } from './colorHelpers';

function App() {
  console.log();
  return (
    <div className="App">
      <Palette palette={generatePalette(seedColors[5])} />
    </div>
  );
}

export default App;
