import React from 'react';
import CartWidget from '../components/CardWidget';
import "../components/NavBar style/styles.css";

const navItems = [
{
    id:1,
    label: "Home",
},
{   
    id:2,
    label: "Canchas",
},
{
    id:6,
    label: "Contacto",
}

];

const NavBar = () => {
    return(
    
        <div className="nav">
           <h1 className="nav-logo">POLIDEPORTIVO DON BOSCO</h1>
          <div>
            {navItems.map((item) => (
            <a href="/" className="nav-item" key={item.id}>{item.label}</a>
            ))}
          </div>         
        <CartWidget />        
        </div>
    
    );
};

export default NavBar;