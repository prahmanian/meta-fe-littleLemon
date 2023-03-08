import React from 'react'
import StarRatingComponent from 'react-star-rating-component';
import Avatar from 'react-avatar';



const Testimonial = (props) => {
    const {name, image, rating, review} = props.user

    return (
        <article className='Testimonial'>
            <StarRatingComponent 
                className="Testimonial-rating"
                name={`${name}-rating`} 
                editing={false}
                starColor="#F4CE14"
                emptyStarColor="#EDEFEE"
                // renderStarIcon={() => <span></span>}
                starCount={5}
                value={rating ? rating : 4}
            />
            <div className='Testimonial-user'>
                <Avatar className="Testimonial-avatar" name={name} size="30" round={true} src={image} alt={`Image of ${name}`}/>
                <h6 className='Testimonial-name'>{name}</h6>
            </div>
            <p className='Testimonial-quote'>{review}</p>
        </article>
    )
}

export default Testimonial