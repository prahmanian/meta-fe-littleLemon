import './App.css';
import Nav from './components/Nav'
import Footer from './components/Footer';


// import HomePage from './pages/HomePage';
// import AboutPage from './pages/AboutPage';
import BookingPage from './pages/BookingPage';

function App() {
  return (
    <div className="App">
      <Nav />
      {/* <HomePage /> */}
      {/* <AboutPage /> */}
      <BookingPage />
      <Footer />
    </div>
  );
}

export default App;
