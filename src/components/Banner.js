import React from 'react'
import image from '../assets/MarioAndAdrianA.jpg'

const Banner = () => {
    return (
        <header>
            <div>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mi massa, luctus quis ante pharetra, mollis bibendum turpis. Nulla volutpat condimentum commodo. Proin a risus bibendum, hendrerit purus sit amet, fermentum sapien.
                </p>
                <button>Reserve a Table</button>
            </div>
            <img src={image} alt="Little Lemon Bistro" width="100"/>

        </header>
    )
}

export default Banner