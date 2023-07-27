import React from "react";
import Item from './Item';
import '../styles/ItemList.css';

const ItemList = ({productos}) => {
    return (
        <div className="padreCards">
            {productos.map((prod)=> <Item key={prod.id} prod={prod}/>)}
        </div>
    )
}

export default ItemList