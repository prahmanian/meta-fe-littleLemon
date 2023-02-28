import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav'
import Footer from './components/Footer';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Specials from './components/Specials';

function App() {
  return (
    <>
      <Nav />
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <Specials />
        <Testimonials />
        <About />
      </div>
      <Footer />
    </>
  );
}

export default App;
