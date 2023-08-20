import React, { useState, useContext } from 'react';
import ItemCount from './ItemCount';
import '../styles/ItemDetail.css';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/cartContext';

const ItemDetail = ({ producto }) => {
  const { addItem } = useContext(CartContext);
  const [quantityAdded, setQuantityAdded] = useState(0); 

  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity);

    const item = {
      id: producto.id,
      nombre: producto.nombre,
      precio: producto.precio,
      marca: producto.marca,
      codigo: producto.codigo,
      stock: producto.stock,
      imagen: producto.imagen,
      quantity: quantity, 
    };
    addItem(item, quantity);
  };

  return (
    <section>
      <div className='tituloCarrito'>
        <h3>Estas viendo: {producto.nombre} </h3>
      </div>

      <div className="ItemDetail">
        <img src={producto.imagen} alt={producto.nombre} />
        <h2>$ {producto.precio}</h2>
        <h6>{producto.marca}</h6>
        <p>Categoria: {producto.categoria}</p>
        <p>COD: {producto.codigo}</p>
        <p>Stock: {producto.stock}</p>
      </div>

      <div className='contador'>
        {quantityAdded > 0 ? (
          <Link to='/cart' className='finish'>Ir al carrito</Link>
        ) : (
          <ItemCount initial={1} stock={producto.stock} onAdd={handleOnAdd} />
        )}
      </div>
    </section>
  );
}

export default ItemDetail;
