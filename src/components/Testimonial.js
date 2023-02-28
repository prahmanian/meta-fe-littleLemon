import React from 'react'
import StarRatingComponent from 'react-star-rating-component';
import Avatar from 'react-avatar';



const Testimonial = (props) => {
    const {name, image, rating, review} = props.user

    return (
        <article>
            <StarRatingComponent 
                name={`${name}-rating`} 
                editing={false}
                starColor="#F4CE14"
                emptyStarColor="#EDEFEE"
                // renderStarIcon={() => <span></span>}
                starCount={5}
                value={rating ? rating : 4}
            />
            <div>
                <Avatar name={name} size="30" round={true} src={image} alt={`Image of ${name}`}/>
                <h6>{name}</h6>
            </div>
            <p>{review}</p>
        </article>
    )
}

export default Testimonial