import React, { useContext } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { CartContext } from '../context/cartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
  const { cartQuantity } = useContext(CartContext);

  return (
    <div className="cart-widget">
      <Link to="/cart">

      <FaShoppingCart />
      
      {cartQuantity() > 0 && <span className="notification">{cartQuantity()}</span>}
      </Link>
    </div>
  );
};

export default CartWidget;






