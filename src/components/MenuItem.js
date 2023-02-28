import React from 'react'
import DishIcon from '../assets/DishIcon.svg'

const MenuItem = (props) => {
    const {name, image, price, description} = props.item
    return (
        <article>
            <img src={image} alt={name} width="100"/>
            <div>
                <h5>{name}</h5>
                <span>{price}</span>
            </div>
            <p>{description}</p>
            <a href="" role="button"><span>Order for Delivery <img src={DishIcon} alt="order icon"/></span> </a>
            

        </article>

    )
}

export default MenuItem