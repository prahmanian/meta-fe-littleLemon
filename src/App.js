import './App.css';
import Nav from './components/Nav'
import Footer from './components/Footer';


import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="App">
      <Nav />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
