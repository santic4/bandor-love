import React,{useEffect, useState} from "react";
import ItemDetail from "./ItemDetail";
import {useParams} from 'react-router-dom'
import { getFirestore, doc, getDoc } from 'firebase/firestore'

export const ItemDetailContainer = () => {
   
    const [producto, setProducto] = useState({})
    const { detailId } = useParams();
    
    useEffect (() => {
   
    const querydb = getFirestore();
    const queryDoc = doc(querydb, 'Items', detailId);
    
    getDoc(queryDoc)
    .then(res => setProducto({id: res.id, ...res.data() }))
   },[detailId])

    return (
        
   <div className="ItemDetailContainer">
        <ItemDetail producto={producto} />
   </div>
    )
}

export default ItemDetailContainer