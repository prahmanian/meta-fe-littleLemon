import restaurant from '../assets/restaurant.jpg'

import BookingForm from '../components/BookingForm'
import Confirm from '../components/Confirm'
import {fetchAPI} from '../bookingsAPI'

import React, {useState, useReducer, useEffect} from 'react'
import {redirect} from 'react-router-dom'

const timesArr = [
    "7:00 pm",
    "8:00 pm",
    "9:00 pm",
    "10:00 pm",
    "11:00 pm"
]

const BookingPage = () => {
    const [confirmed, setConfirmed] = useState(false)

    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState("");
    const [guestCount, setGuestCount] = useState(1);
    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [specialOccasion, setSpecialOccasion] = useState("None");
    const [requests, setRequests] = useState("");

    const [reservations, setReservations] = useState([])



    const saveReservation = async() => {
        console.log('saving...')
        const newReservation = {
            date,
            time,
            guestCount,
            name,
            phoneNumber,
            specialOccasion,
            requests
        }
        const resis = reservations.length > 0 ? [...reservations] : []
        resis.push(newReservation)
        await setReservations(resis)
        console.log(reservations)
        return redirect('/confirmed')
    }

    useEffect(() => resetForm(),[reservations])
    // useEffect(() => (redirect('/confirmed')),[reservations])


    const resetForm = () => {
        setSpecialOccasion('None')
        setRequests('')
        setGuestCount(1)
        setTime("")
        setDate(new Date())
        setConfirmed(false)
    }

    
    const submitForm = (e, formData) => {
        e.preventDefault()
        console.log('submitForm pressed')
        setConfirmed(true)
    }

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
                        requests
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
                    <img src={restaurant} alt="" width='50%'/>
                </figure>
            </section>
        </main>
    )
}

export default BookingPage