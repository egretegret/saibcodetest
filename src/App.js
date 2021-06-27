import CarouselCom from './components/CarouselCom';
import HoverCom from './components/HoverCom';
import AccordionCom from './components/AccordionCom';
import { Navbar } from 'react-bootstrap';
import Footer from './components/Footer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar bg="light" expand="lg" fixed="top">
          <Navbar.Brand href="#home">SAIB</Navbar.Brand>
        </Navbar>
      </header>
      <div className="contents">
        <br></br>
        <br></br>
        <h1>About Us</h1>
        <br></br>
        <CarouselCom />
        <br></br>
        <HoverCom />
        <h1>Lorem Ipsum</h1>
        <br></br>
        <AccordionCom />
        <br></br>
        <h2>-</h2>
        <Footer />
      </div>

    </div>
  );
}

export default App;
