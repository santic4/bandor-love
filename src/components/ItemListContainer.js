import React  from 'react';
import { useParams } from 'react-router-dom';
import '../styles/ItemListContainer.css';
import ItemList from "./ItemList";
import useGetProducts from '../hooks/useGetProducts';


const ItemListContainer = ({ greeting }) => {
  const { productos } = useGetProducts('Items');
  const { categoriaId } = useParams();
 

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
