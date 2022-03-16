import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <About />
      <Projects />
      <Contact />
      <Footer />

    </div>
    
  );
}

export default App;
