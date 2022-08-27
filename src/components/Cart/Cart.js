
import { addDoc, collection, getFirestore,  } from 'firebase/firestore';
import React from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from "../../Context/CartContext"; 
import ItemCart from '../ItemCart/ItemCart';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2';


const notifyno = () => toast("Su orden todavia no fue generada.DEBE EMITIR ORDEN.Se le enviara por mail ");     

    
    

    const error1 = () =>             
    Swal.fire(
        'Debe completar el nombre.Ingreselo nuevamente!',
        'Presione el boton!',
        'error'  );                  
     
    const error2 = () =>             
    Swal.fire(
        'Debe ingresar el telefono.Ingreselo nuevamente!',
        'Presione el boton!',
        'error'   );

     const error3 = () =>             
        Swal.fire(
            'Debe ingresar el mail.Ingreselo nuevamente!',
            'Presione el boton!',
            'error'  )

     const error4 = () =>             
            Swal.fire(
                'Los mail no coinciden :Ingreselos nuevamente!',
                'Presione el boton!',
                'error'    );
     const error5 = () =>             
                Swal.fire(
                    'Debe validar el formulario. Ingrese los datos!',
                    'Presione el boton!',
                    'error'    );

  
const Cart = () => {
    const { cart, totalPrice,clearCart,totalProducts} = useCartContext();
    const order = {
           
            buyer: {
            name: 'Guillermo',
            email: 'gdabenig@gmail.com',
            phone: '1139058270',
            ahora: ''
            
            

        },
        items: cart.map(product =>({id: product.id, title: product.title, price: product.price, quanity: product.quantity})),
        total: totalPrice(),
        
    }
    
const exito = () =>             
    Swal.fire(
    'Su orden fue generada -  .Se la enviaremos por mail -Gracias! ', 
    'Presione el boton!',
    'success' )
    

const exito2 = () => 

    Swal.fire({
        title: 'Su orden es :',
        text: JSON.stringify(order) ,
        icon: 'success'
             })

    const emitirorden = () =>{
               
        order.buyer.name = document.getElementById("buyer.name").value  ; 
        order.buyer.phone = document.getElementById("buyer.phone").value  ; 
        order.buyer.email = document.getElementById("buyer.email").value  ; 
        if   (order.buyer.name  !==  ''   && order.buyer.phone  !==  '' && order.buyer.email  !==  '' )
                    {
            
        exito();
              
        order.buyer.ahora = Date();
        const db = getFirestore ();
        const ordersCollection = collection(db, 'orders');
        addDoc(ordersCollection, order)
        .then(({id}) => exito2() )
        
             
        clearCart();
        
     }
        else
            {
                error5();
            }
         
    }
    const validardatos = () =>{    
        order.buyer.name = document.getElementById("buyer.name").value  ; 
        order.buyer.phone = document.getElementById("buyer.phone").value  ; 
        order.buyer.email = document.getElementById("buyer.email").value  ; 
            
        if(order.buyer.email !== document.getElementById("buyer.remail").value )
                  {    error4( );

                  }
        if(order.buyer.name === '' )
                  {    error1( );
                  }      
        if(order.buyer.phone === '')
                  {    error2();
                  }     
        if(order.buyer.email === '')
                  {    error3();
                   }      
                         
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
                            id= "buyer.remail" 
                            type="text"
                            className="form-control" 
                            name="validarEmail" 
                            placeholder="Repita Email" 
                        />
                    </div>
                    <button type="button" className="btn btn-primary mt-2" onClick={validardatos}>Validar Formulario</button>
                </form>
            </div>
            {
                cart.map(product => <ItemCart key={product.id} product={product} />)
            }
            <p>
                Precio Total : $ {totalPrice()} ----- Cantidad de productos ({totalProducts()})
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