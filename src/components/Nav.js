import React from 'react'
import logo from '../LittleLemonLogo.svg';
import navLinks from '../NavLinks';


const Nav = () => {
    return (
        <nav>
            <img src={logo} className="Nav-logo" alt="Little Lemon Logo" />
            <ul>
                {navLinks.map(({title, path}) => 
                    <li key={title}><a className="Nav-link" href={path} target="_blank" rel="noopener noreferrer"> {title} </a></li>
                )}
            </ul>
        </nav>
    )  
}

export default Nav