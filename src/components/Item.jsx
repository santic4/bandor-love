import React from "react";
import '../styles/Item.css';



const Item = ({prod}) => {
    return(
        <div className="card">
        <img src={prod.imagen} alt={prod.nombre} />
        <div className="card-content">
          <h3>{prod.nombre}</h3>
          <p>Marca: {prod.marca}</p>
          <p>Precio: ${prod.precio}</p>
          <p>Categoría: {prod.categoria}</p>
          <p>Código: {prod.codigo}</p>
          <p>Stock: {prod.stock}</p>
        </div>
      </div>
    )
}

export default Item