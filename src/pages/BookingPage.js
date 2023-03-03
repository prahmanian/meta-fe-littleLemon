import restaurant from '../assets/restaurant.jpg'

import BookingForm from '../components/BookingForm'
import {fetchAPI} from '../bookingsAPI'

import React, {useState, useReducer} from 'react'

const timesArr = [
    "7:00 pm",
    "8:00 pm",
    "9:00 pm",
    "10:00 pm",
    "11:00 pm"
]

const BookingPage = () => {
    const [confirmed, setConfirmed] = useState(false)
    
    

    const updateTimes = (state, action) => {
        const date = action.date
        // console.log('updateTimes', date, 'date')
        const output = fetchAPI(date)
        // console.log(output)
        return output
    }

    const [availableTimes, reducer] = useReducer(updateTimes, new Date(), fetchAPI)


    return (
        <main className='container h-flex'>
            <section>
                {confirmed ? 
                'confirmation' : 
                <BookingForm 
                    availableTimes={availableTimes}
                    updateTimes={reducer}
                />}
            </section>
            <section>
                <figure>
                    <img src={restaurant} alt="" width='50%'/>
                </figure>
            </section>
        </main>
    )
}

export default BookingPage