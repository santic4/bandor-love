import './App.css';
import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetail from './components/ItemDetail';


const App = () => {
  return (
    <div>
      <div>
        
        <NavBar />
        <ItemListContainer greeting="¡Hola, bienvenido a Bandor LOVE!" />

       <ItemDetail/>
        
      </div>
    </div>
  );
};

export default App;
