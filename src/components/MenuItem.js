import React from 'react'
import { Link } from 'react-router-dom'

const MenuItem = (props) => {
    const {name, image, price, description} = props.item
    return (
        <article className='MenuItem'>
            <img src={image} alt={name} width="100"/>
            <div className="MenuItem-details">
                <div className='h-flex space-between'>
                    <h5 className='MenuItem-name'>{name}</h5>
                    <span className='MenuItem-price'>${price}</span>
                </div>
                <p>{description}</p>
                <Link to="/order" role="button" disabled aria-label="Order Link" className="MenuItem-link">Order for Delivery</Link>
            </div>

        </article>

    )
}

export default MenuItem