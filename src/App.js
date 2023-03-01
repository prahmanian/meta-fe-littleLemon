import './App.css';
import Nav from './components/Nav'
import Footer from './components/Footer';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Specials from './components/Specials';
import Banner from './components/Banner';

function App() {
  return (
    <>
      <Nav />
      <div className="App">

        <Banner />
        <Specials />
        <Testimonials />
        <About />
      </div>
      <Footer />
    </>
  );
}

export default App;
