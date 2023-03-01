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
        <section className='Testimonials container container-dark'>
            <h3 className='Testimonials-title'>Testimonials</h3>
            <div className='h-flex'>
                <Testimonial user={user1}/>
                <Testimonial user={user2}/>
                <Testimonial user={{...user2, name:'Bobby', rating:3}}/>
                <Testimonial user={{...user2, name:'Joe', rating:1}}/>
            </div>

        </section>
    )
}

export default Testimonials