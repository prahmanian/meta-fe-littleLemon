import React from 'react'
import Button from './Button'
import image from '../assets/MarioAndAdrianA.jpg'

const Banner = () => {
    return (
        <header className='Header container h-flex'>
            <div className='Header-details v-flex'>
                <h1 className='title'>Little Lemon</h1>
                <h2 className='subtitle'>Chicago</h2>
                <p className='Header-text'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mi massa, luctus quis ante pharetra, mollis bibendum turpis. Nulla volutpat condimentum commodo. Proin a risus bibendum, hendrerit purus sit amet, fermentum sapien.
                </p>
                <Button to="reservations" type="primary">Reserve a Table</Button>
            </div>
            <figure>
                <img src={image} alt="Little Lemon Bistro"/>
            </figure>
            

        </header>
    )
}

export default Banner