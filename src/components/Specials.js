import React from 'react'
import MenuItem from './MenuItem'
import Button from './Button'
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
                <Button to="order" type="dark">Order Online</Button>
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