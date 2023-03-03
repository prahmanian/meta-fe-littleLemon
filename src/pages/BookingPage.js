import restaurant from '../assets/restaurant.jpg'

import BookingForm from '../components/BookingForm'

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
    

    const updateTimes = () => {return (timesArr)}
    const [availableTimes, timesReducer] = useReducer(updateTimes, timesArr)


    return (
        <main className='container h-flex'>
            <section>
                {confirmed ? 
                'confirmation' : 
                <BookingForm 
                    availableTimes={availableTimes}
                    updateTimes={timesReducer}
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