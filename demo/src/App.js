import './App.css';
import Manatee from '../src/components/Manatee/Manatee';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Narwhal from './components/Narwhal/Narwhal';
import Whale from './components/Whale/Whale';

function App() {
  return (

    <div className="wrapper">
      <BrowserRouter>
        <h1>Marine Mammals</h1>
        <nav>
          <Link to="/manatee">Manatee</Link>
          <Link to="/narwhal">Narwhal</Link>
          <Link to="/whale">Whale</Link>
        </nav>
        <Routes>
          <Route path="/manatee" element={<Manatee />} />
          <Route path="/narwhal" element={<Narwhal />} />
          <Route path="/whale" element={<Whale />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
