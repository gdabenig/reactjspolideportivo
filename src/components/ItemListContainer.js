import React, { useEffect } from 'react';
import { useState } from 'react';
import ItemCount from '../components/ItemCount';
import "../components/ItemListContainer style/styles.css";
import ItemList from '../components/ItemList';

const ItemListContainer = ({greeting}) =>{
    const [productosLista, setproductosLista] = useState([])
    const productos = [
        {id: '01', name: 'Cancha de 7', precio: '5000', stock: '2'},
        {id: '02', name: 'Cancha de 9', precio: '4000', stock: '5'},
        {id: '03', name: 'Cancha de 5', precio: '3000', stock: '1'},
        {id: '04', name: 'Salones', precio: '9500', stock: '2'}
    ]

    const getData = new Promise ((resolve, reject) =>{

        let condicion = true
        setTimeout(() => {
            if(condicion){
                resolve(productos)
            }else{
                reject('mal')
            }    
        },3000);
    })   

    useEffect(()=>{
        getData
        .then((res)=> setproductosLista (res))
    },[])
    console.log (productosLista)
    
    const onAdd = (quantity) =>{
        console.log(`Compraste ${quantity} unidades`);
    }

    return(
        
        <div className='landing'>
            <span>{greeting}</span>           
            <div>
            <ItemList productosLista={productosLista}/>   
            <ItemCount initial={1} stock={3} onAdd={onAdd}/>
            </div>
            
        </div>
        
        

    );

};

export default ItemListContainer;