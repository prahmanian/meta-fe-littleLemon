import React from 'react'
import MenuItem from './MenuItem'

import GreekSalad from '../assets/GreekSalad.jpg'
const item1 = {
    name: "Greek Salad",
    image: GreekSalad,
    price: 12.99,
    description: "light and fresh salad"
}

const Specials = () => {
    return (
        <section className='Specials'>
            <div className="Specials-header">
                <h2 className='Specials-title'>Specials</h2>
                <button>Order Online</button>
            </div>
            <div className="Specials-items">
                <MenuItem item={item1}/>
                <MenuItem item={item1}/>
                <MenuItem item={item1}/>
            </div>
            
        </section>
    )
}

export default Specials