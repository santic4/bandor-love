import React from "react";
import ItemDetail from "./ItemDetail";
import {useParams} from 'react-router-dom'
import useGetProductoById from '../hooks/useGetProductById'

export const ItemDetailContainer = () => {
   
    const { id } = useParams();
    
    const { producto } = useGetProductoById( 'Items', id );

    return (
        
   <div className="ItemDetailContainer">
        <ItemDetail producto={producto} />
   </div>
    )
}

export default ItemDetailContainer