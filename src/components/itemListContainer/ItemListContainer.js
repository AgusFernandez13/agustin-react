/*#############################################
                 Importaciones
###############################################*/

//Modulos
//Estilos
import './ItemListContainer.css'
//Componentes
//Core

/*#############################################
                 Logica
###############################################*/
const ItemListContainer = (props) => {//Funcion constructora

    return(
        
        <p >
            Este es el component contenedor ItemListContainer {props.greeting}
        </p>
        
    )

}

/*#############################################
                 Exportacion
###############################################*/
export default ItemListContainer
