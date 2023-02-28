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
        <section>
            <h2>Specials</h2>
            {/* TODO Add Button */}
            <MenuItem item={item1}/>
        </section>
    )
}

export default Specials