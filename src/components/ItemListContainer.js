import React, { useEffect, useState } from 'react';
import '../styles/ItemListContainer.css';
import ItemList from "./ItemList";
import { getProducts } from "../mock/data"



const ItemListContainer = ({ greeting }) => {

 const [productos, setProductos] = useState([])



  useEffect(()=>{
    
   getProducts()
   .then((res)=> setProductos(res))
   .catch((error)=> console.log(error))
  },[])

  return (
    <div className="greeting">

      <h2>{greeting}</h2>

      <ItemList productos={productos}/>

      
    </div>
  );
};

export default ItemListContainer;