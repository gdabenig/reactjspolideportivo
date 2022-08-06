import { addDoc, collection, getFirestore,documentId, getDocs,query, updateDoc, where, writeBatch } from 'firebase/firestore';
import React from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from "../../Context/CartContext"; 
import ItemCart from '../ItemCart/ItemCart';

const Cart = () => {
    const { cart, totalPrice,clearCart} = useCartContext();
    const order = {
        buyer: {
            name: 'Guillermo',
            email: 'gdabenig@gmail.com',
            phone: '1139058270',
            address: 'asdd'

        },
        items: cart.map(product =>({id: product.id, title: product.title, price: product.price, quanity: product.quantity})),
        total: totalPrice(),
    }

    const handleClick = () =>{
        const db = getFirestore ();
        const ordersCollection = collection(db, 'orders');
        addDoc(ordersCollection, order)
        .then(({id}) => console.log(id))

    }
    if(totalPrice() === 0){
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
                Precio Total : $ {totalPrice()}
            </p>
            
            <button onClick={handleClick}>EMITIR ORDEN DE COMPRA </button> 
            <p></p>
           
            <button onClick={() => clearCart()}>
               Vaciar Carrito</button>
       

        </>
    );
    
};

export default Cart;