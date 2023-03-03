import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"

import Nav from './components/Nav'
import Footer from './components/Footer';


import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import BookingPage from './pages/BookingPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/menu" element={<AboutPage />} />
          <Route path="/reservations" element={<BookingPage />} />
          <Route path="/confirmed" element={<AboutPage />} />

        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
