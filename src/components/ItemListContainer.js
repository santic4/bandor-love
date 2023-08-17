import React, { useEffect, useState } from 'react';
import '../styles/ItemListContainer.css';
import ItemList from "./ItemList";
import { useParams } from 'react-router-dom';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore'; // Importa collection y getDocs

const ItemListContainer = ({ greeting }) => {

  const [productos, setProductos] = useState([]);

  const { categoriaId } = useParams();

  useEffect(() => {

    const querydb = getFirestore();
    const queryCollection = collection(querydb, 'Items');

    if(categoriaId) {
      const queryFilter = query(queryCollection, where('categoria', '==', categoriaId))

      getDocs(queryFilter)
        .then((products) => {
          const productsData = products.docs.map((product) => ({
            id: product.id,
            ...product.data(),
          }));
  
          setProductos(productsData); // Actualiza el estado con los datos obtenidos
        })
    }else {
      
      getDocs(queryCollection)
      .then((products) => {
        const productsData = products.docs.map((product) => ({
          id: product.id,
          ...product.data(),
        }));

        setProductos(productsData); // Actualiza el estado con los datos obtenidos
      })
    }
  }, [categoriaId]);

  return (
    <section>
      <div className='h1Titular'>
        <h2>
          {greeting} <span>{categoriaId && categoriaId}</span>
        </h2>
      </div>

      <div className="greeting">
        <ItemList productos={productos} />
      </div>
    </section>
  );
};

export default ItemListContainer;