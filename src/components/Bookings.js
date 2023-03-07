import React from 'react'
import {BsFillCalendarCheckFill} from 'react-icons/bs'

const Bookings = ({reservations}) => {
    return (
        <div className='Bookings'>
            <BsFillCalendarCheckFill className='Bookings-Icon'/>
            <span>{reservations.length}</span>
        </div>
    )
}

export default Bookings