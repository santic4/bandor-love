import './App.css';
import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (

    <BrowserRouter>

    <NavBar />

    <Routes>

      <Route path='/' element={ <ItemListContainer greeting="¡Hola, bienvenido a Bandor LOVE!" />} />
      <Route path='/categoria/:categoriaId' element={ <ItemListContainer greeting="CATEGORIA:" />} />
      <Route path='/item/:id' element={ <ItemDetailContainer/>} />
       
    </Routes>

    </BrowserRouter>

  );
};




export default App;
