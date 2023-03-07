import React from 'react'
import logo from '../assets/logo-vertical-white.png';
import navLinks, {socialLinks} from '../NavLinks';


const Footer = () => {
    return (
        <footer className='Footer '>
            <div className="Footer-content contents space-around">
                <section className='Footer-section'>
                    <img src={logo} className="Nav-logo" alt="Little Lemon Logo" />
                </section>

                <nav className='Footer-section'>
                    <h3 className='Footer-heading'>Navigation</h3>
                    <ul>
                        {navLinks.map(({title, path}) => 
                            <li key={title}><a className="Footer-link" href={path} target="_blank" rel="noopener noreferrer"> {title} </a></li>
                        )}
                    </ul>
                </nav>

                <section className='Footer-section Footer-contact'>
                    <h3 className='Footer-heading'>Contact</h3>
                    <ul>
                        <li>35 Lemongrass Way<br/>Chicago, Illinois</li>
                        <li>(628)-243-6637</li>
                        <li>info@littlelemon.com</li>
                    </ul>
                </section>

                <section className='Footer-section'>
                    <h3 className='Footer-heading'>Social Media Links</h3>
                    <ul>
                        {socialLinks.map(({title, path}) => 
                            <li key={title}><a className="Footer-link" href={path} target="_blank" rel="noopener noreferrer"> {title} </a></li>
                        )}
                    </ul>

                </section>

            </div>

        </footer>
    )
}

export default Footer