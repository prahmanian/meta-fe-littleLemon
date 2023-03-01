import React from 'react'
import logo from '../assets/LittleLemonLogo.svg';
import navLinks from '../NavLinks';


const Nav = () => {
    return (
        <nav className='Nav h-flex'>
            <img src={logo} className="Nav-logo" alt="Little Lemon Logo" />
            <ul className='h-flex space-between'>
                {navLinks.map(({title, path}) => 
                    <li key={title}><a className="Nav-link" href={path} target="_blank" rel="noopener noreferrer"> {title} </a></li>
                )}
            </ul>
        </nav>
    )  
}

export default Nav