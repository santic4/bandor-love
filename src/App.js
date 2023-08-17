import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartProvider } from './context/cartContext';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer greeting="¡Hola, bienvenido a Bandor LOVE!" />} />
          <Route path='/categoria/:categoriaId' element={<ItemListContainer greeting="CATEGORIA:" />} />
          <Route path='/item/:id' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='*' element={<h1>404 NOT FOUND</h1>} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
