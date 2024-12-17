import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/home';
import { Opportunities } from './pages/opportunities';
import ScrollToTop from './config/scrollToTop';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/opportunities' element={<Opportunities />} />
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
