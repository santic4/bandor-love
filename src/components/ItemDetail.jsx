import React, {useState} from 'react';
import ItemCount from './ItemCount';
import '../styles/ItemDetail.css';
import { Link } from "react-router-dom";


const ItemDetail = ({producto}) => {

    const [quantityAdded, SetQuantityAdded] = useState(0);

    const handleOnAdd = (quantity) => {
        SetQuantityAdded (quantity)
    }

  
    return (
        <div className="ItemDetail">
           <h3>Estas viendo: {producto.nombre} </h3>
           <img src={producto.imagen} alt={producto.imagen} />
           <p>{producto.marca}</p>
           <p>{producto.precio}</p>
           {quantityAdded > 0 ? (
            <Link to='./cart' > Terminar Compra</Link>
           ) :  <ItemCount initial={1} stock={producto.stock} onAdd={handleOnAdd}/> }
          
           
        </div>
        
    )
}

export default ItemDetail;