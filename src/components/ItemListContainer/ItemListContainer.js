import React, { useEffect, useState } from 'react';
import { getFirestore, collection , getDocs, query, where } from 'firebase/firestore';
import ItemList from '../ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const { categoryId } = useParams();
         
     console.log(categoryId);
   
    useEffect(() => {
        setLoading(true);
        const querydb = getFirestore();
        const queryCollection = collection(querydb, 'productos');
        if(categoryId){
          const queryFilter = query(queryCollection, where('category', '==', categoryId))
          getDocs(queryFilter)    
            .then(res => setProducts (res.docs.map(product => ({id: product.id, ...product.data()}))))
            .then(setLoading(false));
        } else{
            getDocs(queryCollection)
                .then(res => setProducts (res.docs.map(product => ({id: product.id, ...product.data()}))))
                .then(setLoading(false));   
        }
     }, [categoryId]);

    
    return (
        <div>
            {loading ? (
                <h2>Cargando...</h2>
            ) : (
                <>
                    <ItemList items={products} />
                      
                </>
            )}
        </div>
    );
};

export default ItemListContainer;

