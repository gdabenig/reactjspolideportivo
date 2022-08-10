
import { addDoc, collection, getFirestore,  } from 'firebase/firestore';
import React from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from "../../Context/CartContext"; 
import ItemCart from '../ItemCart/ItemCart';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2';

const notifyno = () => toast("Su orden todavia no fue generada.DEBE EMITIR ORDEN.Se le enviara por mail ");                    
Swal.fire(
    'Su orden fue generada .Se la enviaremos por mail -Gracias!',
    'Presione el boton!',
    'success'
  )
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
    
    
    
    const emitirorden = () =>{
        order.buyer.name = document.getElementById("buyer.name").value  ; 
        order.buyer.phone = document.getElementById("buyer.phone").value  ; 
        order.buyer.email = document.getElementById("buyer.email").value  ; 
        Swal.fire('Su orden fue generada .Se la enviaremos por mail -Gracias!',
        'Presione el boton!',
        'success' );
        const db = getFirestore ();
        const ordersCollection = collection(db, 'orders');
        addDoc(ordersCollection, order)
        .then(({id}) => console.log(id))
         clearCart();
    
         
         
    
         
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
          <div className="col mt-5">                
                <form className="border border-2 border-primary rounded shadow-lg w-75 p-3" style={{margin: 'auto'}}  >
                    <div className="form-group">
                        <label htmlFor="">Nombre y Apellido</label>
                        <input 
                            id= "buyer.name"
                            type="text" 
                            className="form-control" 
                            name="name" 
                            placeholder="Nombre" 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Teléfono de contato</label>
                        <input 
                            id= "buyer.phone" 
                            type="text" 
                            className="form-control" 
                            name="phone" 
                            placeholder="Teléfono" 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Email</label>
                        <input 
                            id= "buyer.email" 
                            type="text"
                            className="form-control" 
                            name="email" 
                            placeholder="Email" 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Validar Email</label>
                        <input 
                            type="text"
                            className="form-control" 
                            name="validarEmail" 
                            placeholder="Repita Email" 
                        />
                    </div>
                </form>
            </div>
            {
                cart.map(product => <ItemCart key={product.id} product={product} />)
            }
            <p>
                Precio Total : $ {totalPrice()}
            </p>
            
                             
             <button onClick={notifyno}> Estado de su orden</button>
             <ToastContainer />

            <p></p>
           
            <button onClick={() => clearCart()}>
               Vaciar Carrito</button>

             <p></p>

             <button onClick={emitirorden} >EMITIR ORDEN DE COMPRA </button>
             
        </>
    );
    
};



export default Cart;