import React from "react";
import Item from '../components/Item';
const ItemList = ({productosLista}) => {
    
    return(
       <div>
        <h3>Lista de Servicios en Alquiler</h3>
        {productosLista.map((producto)=><p key={producto.id}>{producto.name}</p>)}

       </div>       
    )

}

export default ItemList