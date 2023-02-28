import React from 'react'
import Testimonial from './Testimonial'
import pic from '../assets/MarioAndAdrianA.jpg'

const user1 = {
    name: 'pedram',
    image: pic,
    rating: 4,
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
}

const user2 = {
    name: 'tala',
    image: '',
    rating: 5,
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
}

const Testimonials = () => {
    return (
        <section>
            <h3>Testimonials</h3>
            <div>
                <Testimonial user={user1}/>
                <Testimonial user={user2}/>
            </div>

        </section>
    )
}

export default Testimonials