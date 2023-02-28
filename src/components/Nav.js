import React from 'react'
import logo from '../LittleLemonLogo.svg';

const navLinks = [
    {
        title: "Home",
        path: "/"
    },
    {
        title: "About",
        path: ""
    },
    {
        title: "Menu",
        path: ""
    },
    {
        title: "Reservations",
        path: ""
    },
    {
        title: "Order Online",
        path: ""
    },
    {
        title: "Login",
        path: ""
    }
]

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