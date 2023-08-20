import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/cartContext';
import '../styles/card.css';


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

      <div className='precio'>
        <button onClick={() => clearCart()} className='buttonClear'>Limpiar Carrito</button>
        <h3>Total: ${total.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</h3>
        <button><Link to='/checkout' className='checkout'>Checkout</Link> </button>
      </div>

      <div className="CartPage">
        {cart.map(p =>
          <div key={p.id} className="CartItem">
            <h3>{p.nombre}</h3>
            <img src={p.imagen} alt={p.nombre} />
            <p>Marca: {p.marca}</p>
            <p>Precio (u.) : ${p.precio}</p>
            <p>Cantidad: {p.quantity}</p> 
          </div>)}
      </div>

     
    </section>
  );
};

export default Cart;
