import './App.css';
import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';


const App = () => {
  return (
    <div>
      <div>
        
        <NavBar />
        <ItemListContainer greeting="¡Hola, bienvenido a Bandor LOVE!" />
      </div>
    </div>
  );
};

export default App;
