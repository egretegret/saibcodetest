import CarouselCom from './components/CarouselCom';
import HoverCom from './components/HoverCom';
import AccordionCom from './components/AccordionCom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CarouselCom />
        <HoverCom />
        <AccordionCom />
      </header>
    </div>
  );
}

export default App;
