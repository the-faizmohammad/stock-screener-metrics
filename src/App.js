import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Screeners from './routes/Screeners';
import Home from './routes/Home';
import Navigation from './components/Navigation';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Screeners/:companyId" element={<Screeners />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
