import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Tittle from './components/Tittle';
import TextInfo from './components/TextInfo';
import Button from './components/Button';

function App() {
  return (
    <div className="body">
      <Nav className = "Nav" />
      <Tittle className="exercise" />
      <TextInfo className="textInfo"/>
      <Button className="button"/>
    </div>
  );
}

export default App;
