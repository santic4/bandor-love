import React from "react";
import '../styles/ItemListContainer.css';


const ItemDetail = (producto) => {
    return (
        <div>
            <h3>Detalle de: {producto.nombre}</h3>
            <img src={producto.img} alt={producto.nombre}/>
            <p>{producto.nombre}</p>
            
        </div>
    )
}
console.log (producto)
export default ItemDetail