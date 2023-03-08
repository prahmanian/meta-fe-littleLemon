import React from 'react'
import { Link } from 'react-router-dom'
import { BsFillCalendarCheckFill } from 'react-icons/bs'

const Bookings = ({reservations}) => {
    return (
        <Link className='Bookings' to="/confirmed">
            <BsFillCalendarCheckFill className='Bookings-Icon'/>
            <span>{reservations.length}</span>
        </Link>
    )
}

export default Bookings