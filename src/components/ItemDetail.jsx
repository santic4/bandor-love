import React from "react";
import ItemCount from './ItemCount';

const ItemDetail = ({producto}) => {

    const onAdd = (cantidad) =>{
        console.log(`Compraste ${cantidad} productos`)
      }
    
    return (
        <div>
           <h3>detalle de {producto.nombre} </h3>
           <img src={producto.imagen} alt={producto.imagen} />
           <p>{producto.marca}</p>
           <p>{producto.precio}</p>
           <ItemCount initial={1} stock={producto.stock} onAdd={onAdd}/>
           
        </div>
        
    )
}

export default ItemDetail;