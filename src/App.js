import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Quote from './pages/Quote';
import Home from './pages/Home';
import CalculatorPage from './pages/CalculatorPage';

const App = () => (
  <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/calculator" element={<CalculatorPage />} />
        <Route path="/quote" element={<Quote />} />
      </Routes>
    </Router>
  </>
);

export default App;
