import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles/ItemListContainer.css';
import ItemList from "./ItemList";
import useGetProducts from '../hooks/useGetProducts';

const ItemListContainer = ({ greeting }) => {
  const { productos } = useGetProducts('Items');
  const { categoriaId } = useParams();

  const showImage = !categoriaId || categoriaId === 'inicio';

  return (
    <>
      <div className='h1Titular'>
        {showImage ? (
          <div className="image-container">
            <img src='../img/ads.png' alt='Anuncio' />
          </div>
        ) : (
          <div className="banner-container">
            <img src='../img/banner.png' alt='Otro-anuncio' />
          </div>
        )}
       
        <h2 className='divCategory'>
          {greeting} <span>{categoriaId && categoriaId}</span>
        </h2>
        
      </div>

      <div className="greeting">
        <ItemList productos={productos} />
      </div>
    </>
  );
};

export default ItemListContainer;