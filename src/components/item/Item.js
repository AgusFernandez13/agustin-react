// /*#############################################
//                  Importaciones
// ###############################################*/

// //Modulos
// //Estilos
// import './Item.css'
// import Card from 'react-bootstrap/Card';
// import { Link } from 'react-router-dom';


// //Componentes
// import ItemCount from '../itemCount/ItemCount'
// import ItemList from '../itemList/ItemList';

// //Core

// /*#############################################
//                  Logica
// ###############################################*/
// // const consultarProductos = async () => {
// //     const response = await fetch('./productos.json')
// //     const productos = await response.json()
// //     return productos 
// // }

// //  consultarProductos().then(productos => {
// //     productos.forEach((producto) => {
// //         ItemList.innerHTML += `
// //         <div class="card cardProducto">
// //             <img src="./img/${producto.img}" class="card-img-top" alt="...">
// //                 <div class="card-body">
// //                     <h5 class="card-title">${producto.nombre}</h5>
// //                     <p class="card-text">Modelo: ${producto.modelo}</p>
// //                     <p class="card-text">Marca: ${producto.marca}</p>
// //                     <p class="card-text">Precio:$ ${producto.precio}</p>
// //                     <p class="card-text">Stock: ${producto.stock}</p>
// //                     <button class="btn btn-dark">Agregar al carrito</button>
// //                 </div>
// //         </div>
        
// //         `
// //     });
// // })
// // const Item = (props) => {//Funcion constructora

// //     const { id, idCategoria, nombre, description, precio} = props.data

// //     return (

// //         <Card className='card-separated'>
// //             <Card.Header as="h5">{idCategoria}</Card.Header>
// //             <Card.Body>
// //                 <Card.Title>{nombre} || Value ={precio}</Card.Title>
// //                 <Card.Text>
// //                     {description}
// //                 </Card.Text>
// //                 <Link to={`/producto/${id}`}> Ver Detalle del Producto </Link>
// //                 <ItemCount stock={10} />
                
// //             </Card.Body>
// //         </Card>


// //     )

// // }

// /*#############################################
//                  Exportacion
// ###############################################*/
// export default consultarProductos

/*#############################################
                 Importaciones
###############################################*/

//Modulos
//Estilos
import './Item.css'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


//Componentes
import ItemCount from '../itemCount/ItemCount'

//Core

/*#############################################
                 Logica
###############################################*/
const Item = (props) => {//Funcion constructora

    const { title, category, description, price, id} = props.data

    return (

        <Card className='card-separated'>
            <Card.Header as="h5">{category}</Card.Header>
            <Card.Body>
                <Card.Title>{title} || Value ={price}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
                <Link to={`/producto/${id}`}> Ver Detalle del Producto </Link>
                <ItemCount stock={10} />
                
            </Card.Body>
        </Card>


    )

}

/*#############################################
                 Exportacion
###############################################*/
export default Item
