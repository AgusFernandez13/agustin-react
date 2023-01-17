/*#############################################
                 Importaciones
###############################################*/

//Modulos
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
                <li><a href="#a">Productos</a></li>
                <li><a href="#a">Categorias</a></li>
                <li><a href="#a">Nosotros</a></li>
                <li><a href="#a"><CardWidget cantidad="10" /></a></li>
            </ul>
        </header>

    )

}

/*#############################################
                 Exportacion
###############################################*/
export default NavBar
