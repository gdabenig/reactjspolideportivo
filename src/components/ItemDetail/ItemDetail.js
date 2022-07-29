import React from 'react';
import { useState } from 'react';
import { useCartContext } from '../../Context/CartContext';
import { Link } from 'react-router-dom';
import ItemCount from '../../components/ItemCount/ItemCount';
import '../ItemCount/styles.css';


const ItemDetail = ({ product }) => {

    const [GoToCart, setGoToCart] = useState(false);
    const {addProduct} = useCartContext();

    const onAdd = (quantity) => {
        setGoToCart(true);
        addProduct(product,quantity);
    };


    return (
        <div className="detail">
            <img src={product.image} alt={product.title} width="400" />
            <div>
                <h1>{product.title}</h1>
                <h2>{product.description}</h2>
                <h3>$ {product.price}</h3>
                <h4>Stock: {product.stock}</h4>
                {
                    GoToCart
                        ? <Link to='/cart'>Terminar compra</Link>
                        : <ItemCount stock={product.stock} initial={1} onAdd={onAdd} />
                }
                
            </div>
        </div>
    );
};

export default ItemDetail;
