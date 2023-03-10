/*#############################################
                 Importaciones
###############################################*/

//Modulos
import { Link } from 'react-router-dom'

//Estilos
import './NavBar.css'
import CardWidget from '../cardWidget/CardWidget.js'

//Componentes
//Core

/*#############################################
                 Logica
###############################################*/
const NavBar = () => {//Funcion constructora


    return (

        <header className='header'>
            <a href="#a" className="logo">Tienda</a>
            <input className="menu-btn" type="checkbox" id="menu-btn" />
            <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>
            <ul className="menu">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/productos">Productos</Link></li>
                <li><Link to="/categoria/jewelery">jewelery</Link></li>
                <li><Link to="/categoria/electronics">electronics</Link></li>
                <li><Link to="/carrito"><CardWidget cantidad="10" /></Link></li>
            </ul>
        </header>

    )

}

/*#############################################
                 Exportacion
###############################################*/
export default NavBar









