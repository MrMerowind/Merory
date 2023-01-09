import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from './pages/Menu';
import HallOfFame from './pages/HallOfFame';
import Game from './pages/Game';
import Error from './pages/Error';
import Wrapper from './pages/Wrapper';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Wrapper />}>
          <Route index element={<Menu />} />
          <Route path="menu" element={<Menu />} />
          <Route path="game" element={<Game />} />
          <Route path="records" element={<HallOfFame />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
