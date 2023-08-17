import React from 'react';
import '../styles/Item.css';
import { Link } from 'react-router-dom';

const Item = ({ prod }) => {
  return (
    <div className="card">
      <img src={prod.imagen} alt={prod.nombre} />
      <div className="card-content">
        <h3>{prod.nombre}</h3>
        <p>Marca: {prod.marca}</p>
        <p>Precio (u.) : ${prod.precio}</p>
        <p>Stock: {prod.stock}</p>
      </div>
      <Link to={`/item/${prod.id}`}>
        <button>Ver Más</button>
      </Link>
    </div>
  );
};



export default Item;
