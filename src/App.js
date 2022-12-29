import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import NavBar from './components/navbar/NavBar';
import inicio from './components/paginas/inicio';
import productos from './components/paginas/productos';
import sobreNosotros from './components/paginas/sobreNosotros';

function App() {
  return (
    <div className="App">
      <Router>
        <navbar />
      </Router>
    </div>
  );
}

export default App;
