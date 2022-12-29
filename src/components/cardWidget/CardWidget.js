/*#############################################
                 Importaciones
###############################################*/

//Modulos
//Estilos
import './CardWidget.css'

//Componentes
//Core

/*#############################################
                 Logica
###############################################*/
const CardWidget = (props) => {//Funcion constructora

    return(
       <div className='contenedorCarrito'>
       
            <img src="./carrito.png" width="50"></img>
            <p>{props.cantidad}</p>

        </div>
    )

}

/*#############################################
                 Exportacion
###############################################*/
export default CardWidget