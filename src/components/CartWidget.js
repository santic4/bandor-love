import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const CartWidget = () => {
  return (
    <div className="cart-widget">
      <FaShoppingCart />
      <span className="notification">5</span>
    </div>
  );
};

export default CartWidget;