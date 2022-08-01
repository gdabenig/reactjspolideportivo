import React from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from "../../Context/CartContext"; 
import ItemCart from '../ItemCart/ItemCart';

const Cart = () => {
    const { cart, totalPrice } = useCartContext();
    if(cart.lenght === 0){
        return(
            <>
                <p>No hay elementos en el carrito</p>
                <Link to='/'>Hacer compras</Link>
            </>
        );
    };


    return(
        <>
            {
                cart.map(product => <ItemCart key={product.id} product={product} />)
            }
            <p>
                TOTAL DE SU COMPRA : {totalPrice()}
            </p>
        </>
    );
    
};

export default Cart;