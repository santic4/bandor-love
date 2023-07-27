import React, { useEffect, useState } from 'react';
import '../styles/ItemListContainer.css';
import ItemCount from './ItemCount';
import ItemList from "./ItemList";
import {getProducts} from ".././mock/data"



const ItemListContainer = ({ greeting }) => {

 const [productos, setProductos] = useState([])

  useEffect(()=>{
   getProducts()
   .then((res)=> setProductos(res))
   .catch((error) => console.log(error))
  },[])

  const onAdd = (cantidad) =>{
    console.log(`Compraste ${cantidad} productos`)
  }

  
  return (
    <div className="greeting">

      <h2>{greeting}</h2>

      <ItemList productos={productos}/>

      <ItemCount initial={1} stock={10} onAdd={onAdd}/>
    </div>
  );
};

export default ItemListContainer;