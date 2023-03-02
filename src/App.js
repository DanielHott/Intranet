import './App.css';
import { Route, Routes } from 'react-router-dom';
import Main from './components';
import Beneficios from './pages/benefits/index';

function App() {
  return (
    <Routes>
      <Route path="/beneficios" element={<Beneficios />} />
      <Route path="/" element={<Main />} />
    </Routes>
  );
}

export default App;
