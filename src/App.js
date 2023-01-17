import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import NavBar from './components/navbar/NavBar';
import inicio from './components/paginas/inicio';
import productos from './components/paginas/productos';
import sobreNosotros from './components/paginas/sobreNosotros';
import Item from './components/item/Item';
import ItemCount from './components/itemCount/ItemCount';
import ItemList from './components/itemList/ItemList';
import Hooks from './components/hooks/Hooks';

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
