import './App.css';
import Manatee from '../src/components/Manatee/Manatee';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Narwhal from './components/Narwhal/Narwhal';
import Whale from './components/Whale/Whale';
import Dolphin from './components/Dolphin/Dolphin';


function App() {
  return (

    <div className="wrapper">
      <BrowserRouter>
        <h1>Marine Mammals</h1>
        <nav>
          <ul>
            <li><Link to="/manatee">Manatee</Link></li>
            <li><Link to="/narwhal">Narwhal</Link></li>
            <li><Link to="/whale">Whale</Link></li>
            <li><Link to="/whale?type=beluga">Beluga Whale</Link></li>
            <li><Link to="/whale?type=blue">Blue Whale</Link></li>
            <li><Link to="/dolphin">Dolphin</Link></li>
            <li><Link to="/dolphin/white/john">Dolphin 1</Link></li>
            <li><Link to="/dolphin/grey/joey">Dolphin 2</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/manatee" element={<Manatee />} />
          <Route path="/narwhal" element={<Narwhal />} />
          <Route path="/whale" element={<Whale />} />
          <Route path="/dolphin" element={<Dolphin/>}/>
          <Route path="/dolphin/:category/:name" element={<Dolphin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
