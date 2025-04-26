import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import StyledTela from './pages/Styled';
import TailwindTela from './pages/Tailwind';

function App() {
  return (
    <div>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/styled" element={<StyledTela />} />
        <Route path="/tailwind" element={<TailwindTela />} />
      </Routes>
    </div>
  );
}

export default App;
