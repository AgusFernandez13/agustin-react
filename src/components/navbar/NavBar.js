// /*#############################################
//                  Importaciones
// ###############################################*/

// //Modulos
// //Estilos
// import './NavBar.css'
// import CardWidget from '../cardWidget/CardWidget.js'

// //Componentes
// //Core

// /*#############################################
//                  Logica
// ###############################################*/
// const NavBar = (props) => {//Funcion constructora


//     return(
        
//         <header className='navbar'>
//             <p>Mi primer enlace y te saludo = {props.saludo} y cuando me retiro digo = {props.despedida}</p>
//             <CardWidget cantidad="10"/>
//         </header>
        
//     )

// }

// /*#############################################
//                  Exportacion
// ###############################################*/
// export default NavBar




import React from 'react'
import CardWidget from '../cardWidget/CardWidget.js'
import { Link } from 'react-router-dom'
import "./NavBar.css"

const NavBar = (props) => {
  return (
    <header className='navbar'>
    <div><nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
          <a to="/">
            <img src='./iconoreact.png' width="50" />
          </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
            <div className="collapse navbar-collapse pestañas" id="navbarNav">
              <ul className="navbar-nav">
               <li className="nav-item">
                <a className="nav-a" to="/Inicio">Inicio</a>
               </li>
               <li className="nav-item">
            <a className="nav-a" to="/Productos">Productos</a>
             </li>
             <li className="nav-item">
              <a className="nav-a" to="/SobreNosotros">Sobre Nosotros</a>
              </li>

        </ul> 
      </div>
    </div>
  </nav></div>
  <CardWidget cantidad="cantidad de stock :10"/>
  </header>
  
  )
}

export default NavBar

