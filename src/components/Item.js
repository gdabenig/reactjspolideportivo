import React from "react";
import ItemList from "../components/ItemList"
const Item = ({producto}) => {

    return(

        <div  className="card w-50">
            <div className="card-body">
                <h5 className="card-title">{producto.name}</h5>
                <p className="card-text">{producto.name}</p>
                <a href="#" className="btn btn-primary">Button</a>
            </div>
        </div>
    )
}
export default Item;