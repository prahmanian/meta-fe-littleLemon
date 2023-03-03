import React from 'react'
import logo from '../assets/LittleLemonLogo.svg';
import navLinks from '../NavLinks';
import {NavLink} from 'react-router-dom';


const Nav = () => {
    let activeStyle = {
        textDecoration: "underline",
    };
    return (
        <nav className='Nav h-flex'>
            <img src={logo} className="Nav-logo" alt="Little Lemon Logo" />
            <ul className='h-flex space-between'>
                {navLinks.map(({title, path}) => 
                    <li key={title}><NavLink style={({isActive}) => isActive ? activeStyle : undefined} className="Nav-link" to={path} > {title} </NavLink></li>
                )}
            </ul>
        </nav>
    )  
}

export default Nav