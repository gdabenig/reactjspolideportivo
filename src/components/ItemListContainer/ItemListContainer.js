import React, { useEffect, useState } from 'react';
import ItemList from '../ItemList';
import { getProds } from '../../Mocks/FakeApi';
import { useParams } from 'react-router-dom';
const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const { categoryId } = useParams();
     useEffect(() => {
        setLoading(true);
        
              

        // const URL = categoryId 
            // ? `https://fakestoreapi.com/products/category/${categoryId}`
            // : 'https://fakestoreapi.com/products';
            const URL = categoryId 
            ? `https://fakestoreapi.com/category/iphone`
            : 'https://fakestoreapi.com/category/motorola';
            // alert (URL);
            
                
        fetch(URL)
            .then((res) => res.json())
            .then((json) => setProducts(json))
            .finally(() => {
                setLoading(false);
            });

         getProds(categoryId)
            .then((res) => {
                setProducts(res);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setLoading(false);
            }); 
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

