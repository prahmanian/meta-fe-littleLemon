import restaurant from '../assets/restaurant.jpg'

import BookingForm from '../components/BookingForm'

import React, {useState} from 'react'

const BookingPage = () => {
    const [confirmed, setConfirmed] = useState(false)
    return (
        <main className='container h-flex'>
            <section>
                {confirmed ? 'confirmation' : <BookingForm />}
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