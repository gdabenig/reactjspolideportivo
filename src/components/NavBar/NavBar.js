import React from 'react';
import { Link } from 'react-router-dom';
import '../../components/NavBar/styles.css';
import CartWidget from '../../components/CardWidget/CardWidget';

const categories = [
    {
        id: 1,
        path: '/',
        name: 'Home  ',
    },
    {
        id: 2,
        path: '/category/samsung',
        name: 'Samsung  ',
    },
    {
        id: 3,
        path: '/category/iphone',
        name: 'Iphone  ',
    },
    {
        id: 4,
        path: '/category/motorola',
        name: 'Motorola  ',
    },
];

const Navbar = () => {
    return (
        <nav className='nav'>
            <h2 className='nav-logo'>Celulares On Line Don Bosco</h2>
            <ul className='nav-item'>
                {categories.map((category) => (
                    <Link to={category.path} key={category.id}>
                        {category.name}
                    </Link>
                ))}
            </ul>
            <CartWidget />
        </nav>
    );
};

export default Navbar;