import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/cartContext';
import Item from './Item';

import "../styles/card.css"

const Cart = () => {
  const { cart, clearCart, totalQuantity, total } = useContext(CartContext);

  if (totalQuantity === 0) {
    return (
      <div className='CartPage'>
        <h1>No hay items en el carrito</h1>
        <Link to='/' className='Option'>Productos</Link>
      </div>
    );
  }

  return (
    <section className='carrito'>

    <div className="CartPage">
      {cart.map(p => <Item key={p.id} prod={p} />)}
    </div>

    <div className='precio'>
    <button onClick={() => clearCart()} className='buttonClear'>Limpiar Carrito</button>
    <h3>Total: ${total.toFixed(2)}</h3>
    <Link to='/checkout' className='checkout'>Checkout</Link>
    </div>

    </section>
  );
};

export default Cart;
