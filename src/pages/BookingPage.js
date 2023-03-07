import React from 'react'

import BookingForm from '../components/BookingForm'
import Confirm from '../components/Confirm'

import restaurant from '../assets/restaurant.jpg'


const BookingPage = (props) => {

    const {
        confirmed,
        date,
        time,
        guestCount,
        name,
        phoneNumber,
        specialOccasion,
        requests,
        formattedDate,
        // reservations
    } = props.values

    const {
        setConfirmed,
        setDate,
        setTime,
        setGuestCount,
        setName,
        setPhoneNumber,
        setSpecialOccasion,
        setRequests,
        // setReservations
    } = props.setters

    const {
        saveReservation,
        // resetForm,
        submitForm,
        // updateTimes
    } = props.handlers

    const {
        availableTimes,
        reducer
    } = props.times

    return (
        <main className='container h-flex'>
            <section>
                {confirmed ? 
                <Confirm 
                    reservation = {{
                        date,
                        time,
                        guestCount,
                        name,
                        phoneNumber,
                        specialOccasion,
                        requests
                    }} 
                    edit = {() => setConfirmed(false)}
                    confirm = {() => saveReservation()}
                /> : 
                <BookingForm
                    reservation={{
                        date,
                        time,
                        guestCount,
                        name,
                        phoneNumber,
                        specialOccasion,
                        requests,
                        formattedDate
                    }}
                    handlers = {{
                        setDate,
                        setTime,
                        setGuestCount,
                        setName,
                        setPhoneNumber,
                        setSpecialOccasion,
                        setRequests
                    }}
                    availableTimes={availableTimes}
                    updateTimes={reducer}
                    submitForm={submitForm}
                />}
            </section>
            <section>
                <figure>
                    <img src={restaurant} alt="" />
                </figure>
            </section>
        </main>
    )
}

export default BookingPage