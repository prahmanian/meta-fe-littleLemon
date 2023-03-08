import React , { useState } from 'react'
import logo from '../assets/LittleLemonLogo.svg';
import navLinks from '../NavLinks';
import { NavLink, Link } from 'react-router-dom';
import Bookings from './Bookings';
import { Squash as Hamburger } from 'hamburger-react'


const Nav = ({reservations}) => {
    let activeStyle = {
        textDecoration: "underline",
    };

    const links = navLinks.map(({title, path}) => 
        <li key={title}><NavLink style={({isActive}) => isActive ? activeStyle : undefined} className="Nav-link" to={path} > {title} </NavLink></li>
    )

    const [isOpen, setOpen] = useState(false)
    return (
        <nav className='Nav '>
            <div className="Nav-contents contents h-flex space-between wrap small-gap">
                <div id="Burger"><Hamburger className="menu" rounded toggled={isOpen} toggle={setOpen}/></div>
                {/* {isOpen ?
                <Hamburger className="menu"/> :
                <Hamburger className="menu"/>
                } */}
                <Link to="/"><img src={logo} className="Nav-logo" alt="Little Lemon Logo" /></Link>
                <ul id="NavLinks" className='h-flex space-between wrap'>
                    {links}
                </ul>
                <Bookings reservations={reservations}/>
            </div>
            <div className={isOpen ? 'Open' : 'Closed'}>
                <ul id="Burger-menu" className='v-flex space-between wrap'>
                    {links}
                </ul>
            </div>
        </nav>
    )  
}

export default Nav