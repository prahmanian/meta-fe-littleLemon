import React from 'react'
import logo from '../assets/LittleLemonLogo.svg';
import navLinks, {socialLinks} from '../NavLinks';


const Footer = () => {
    return (
        <footer>

            <img src={logo} className="Nav-logo" alt="Little Lemon Logo" />
            
            <nav>
                <h3>Doormat Navigation</h3>
                <ul>
                    {navLinks.map(({title, path}) => 
                        <li key={title}><a className="Nav-link" href={path} target="_blank" rel="noopener noreferrer"> {title} </a></li>
                    )}
                </ul>
            </nav>

            <section>
                <h3>Contact</h3>
                <span>Address</span><br/>
                <span>Phone Number</span><br/>
                <span>Email</span><br/>
            </section>

            <section>
                <h3>Social Media Links</h3>
                <ul>
                    {socialLinks.map(({title, path}) => 
                        <li key={title}><a className="Nav-link" href={path} target="_blank" rel="noopener noreferrer"> {title} </a></li>
                    )}
                </ul>

            </section>



        </footer>
    )
}

export default Footer