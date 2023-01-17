/*#############################################
                 Importaciones
###############################################*/

//Modulos
//Estilos
import './ItemList.css'

//Componentes
import Item from '../item/Item'

//Core

/*#############################################
                 Logica
###############################################*/
const ItemList = (props) => {//Funcion constructora


    const listaDeProductos = [
        {
            id:1,
            nombre:"Perfume Carolin Herrera",
            descripcion:"Perfume de 200cc, fragancia fresca",
            precio:80000,
            categoria:"Perfume mujer",
            stock:5
        },{
            id:2,
            nombre:" Perfume Calvin klein",
            descripcion:"Aroma: floral amaderado, Notas de fondo: sándalo, ámbar, opopónaco, almizcle, cedro, vainilla. ",
            precio:20000,
            categoria:"Perfume hombre",
            stock:15
        },{
            id:3,
            nombre:"Calvin Klein Euphoria EDP 100 ml para mujer",
            descripcion:"Aroma: oriental flora, Notas de fondo: ámbar líquido, caoba, crema, violeta negra.",
            precio:60000,
            categoria:"Perfume mujer",
            stock:2
        },{
            id:4,
            nombre:"Antonio Banderas The Icon EDT 100 ml para hombre",
            descripcion:"Aroma: amaderado, Notas de fondo: musgo leñoso, ámbar oriental, sándalo, pachuli, musgo de roble, haba tonka, ámba",
            precio:15000,
            categoria:"perfume hombre",
            stock:20
        },

    ]

    //Tenemos un retraso de informacion

    const listaDeProductosRenderizables = listaDeProductos.map( productos => <Item key={productos.id} id={"producto" + productos.id} data={productos}/>)

    //Pasar la informacion real
    //Mostras la informacion real


    return(
        
        <div >
            <p>Este es el item List</p>

            <div>
                <h1>BANER PUBLICITARIO</h1>
            </div>

            {listaDeProductosRenderizables}
        </div>
        
    )

}

/*#############################################
                 Exportacion
###############################################*/
export default ItemList
