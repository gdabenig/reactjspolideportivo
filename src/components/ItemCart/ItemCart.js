import React from "react";
import { useCartContext } from "../../Context/CartContext";
import '../../components/ItemCart/styles.css';

const ItemCart = ({ product }) => {
    const { removeProduct } = useCartContext();
    return(
        <div className="ItemCart">
            <img src="product.image" alt="product.title" />
            {/* { <img src="product.image" alt="product.title" />} */} 
            {/* <img src="../assets/images/carrito.jpg" alt="product.title" /> */}
            {/* {  <img src="https://previews.123rf.com/images/iqoncept/iqoncept1610/iqoncept161000025/64815917-nuevo-tel%C3%A9fono-celular-de-compras-comprar-ilustraci%C3%B3n-3d-de-venta.jpg"  />} */}
              <div>
                <p>Titulo: {product.title}</p>
                <p>Cantidad: {product.quantity}</p>
                {/* <p>Precio: {product.precio}</p> */}
                <p>Precio: ${1 * product.price}</p>
                <p>Subtotal: ${product.quantity * product.price}</p>
                <button onClick={() => removeProduct(product.id)}>
                    Eliminar</button>

            </div>
        </div>
    )
}
export default ItemCart ;