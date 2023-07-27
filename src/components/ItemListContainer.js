import React, { useEffect, useState } from 'react';
import '../styles/ItemListContainer.css';
import ItemList from "./ItemList";
import { getProducts } from "../mock/data"
import { useParams } from 'react-router-dom';



const ItemListContainer = ({ greeting }) => {

 const [productos, setProductos] = useState([])

 const {categoriaId} = useParams()

  useEffect(()=>{
    
   getProducts()
   .then((res)=> {
   if(categoriaId){
    setProductos(res.filter((item)=> item.categoria === categoriaId))
   }else{
    setProductos(res)
   }
  })
   .catch((error)=> console.log(error))
  },[categoriaId])

  return (
    <div className="greeting">

      <h2>{greeting} <span>{categoriaId && categoriaId}</span></h2>

      <ItemList productos={productos}/>

      
    </div>
  );
};

export default ItemListContainer;