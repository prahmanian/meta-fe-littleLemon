import React, {useState} from 'react'
import AvailableTimes from './AvailableTimes';


const BookingForm = (props) => {
    // const [date, setDate] = useState(props.reservation.date);
    // const [time, setTime] = useState(props.reservation.time);
    // const [guestCount, setGuestCount] = useState(props.reservation.guestCount);
    // const [name, setName] = useState(props.reservation.name);
    // const [phoneNumber, setPhoneNumber] = useState("");
    // const [specialOccasion, setSpecialOccasion] = useState("None");
    // const [requests, setRequests] = useState("");

    const {
        date,
        time,
        guestCount,
        name,
        phoneNumber,
        specialOccasion,
        requests
    } = props.reservation

    const {
        setDate,
        setTime,
        setGuestCount,
        setName,
        setPhoneNumber,
        setSpecialOccasion,
        setRequests
    } = props.handlers

    const handleDateChange = (e) => {
        const date = e.target.value
        const dateObj = new Date(date)
        dateObj.setDate(dateObj.getDate()+1)
        console.log('selected date', date)
        console.log('date obj', dateObj)
        setDate(dateObj)

        props.updateTimes({type: "change_date",
        date: dateObj})
    }

    return (
        <>
            <h1>Make a Reservation</h1>
            <form  className='Reservations-form'>

                <div>
                    <label htmlFor="date">Pick your date:</label>
                    <input 
                        id="date"
                        name="date"
                        type="date"
                        value={date.toLocaleDateString('en-CA')}
                        onChange={handleDateChange}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="time">When will you arrive?</label>
                    <select 
                        id="time"
                        name="time"
                        // type="time"
                        value={props.availableTimes[0]}
                        onChange={(e)=>{setTime(e.target.value)}}
                        required
                    >
                        {/* <AvailableTimes times={props.availableTimes}/> */}
                        {props.availableTimes.map(time => <option key={time} value={time}>{time}</option>)}
                    </select>
                </div>

                <div>
                    <label htmlFor="guestCount">How many people will be in your party?</label>
                    <input 
                        id="guestCount"
                        name="guestCount"
                        type="number"
                        min={1}
                        max={10}
                        value={guestCount}
                        onChange={(e)=>{setGuestCount(e.target.value)}}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="name">What name should we hold your table under?</label>
                    <input 
                        id="name"
                        name="name"
                        type="text"
                        value={name}
                        onChange={(e)=>{setName(e.target.value)}}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="phoneNumber">What phone number can we send you a confirmation text at?</label>
                    <input 
                        id="phoneNumber"
                        name="phoneNumber"
                        type="tel"
                        minLength={10}
                        value={phoneNumber}
                        onChange={(e)=>{setPhoneNumber(e.target.value)}}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="specialOccasion">When will you arrive?</label>
                    <select 
                        id="specialOccasion"
                        name="specialOccasion"
                        placeholder="Select Occasion"
                        // value={specialOccasion}
                        onChange={(e)=>{setSpecialOccasion(e.target.value)}}
                        required
                    >
                        <option value="None">None</option>
                        <option value="Birthday">Birthday</option>
                        <option value="Engagement">Engagement</option>
                        <option value="Anniversary">Anniversary</option>
                    </select>
                </div>

                {specialOccasion !== 'None' && (
                    <div>
                        <label htmlFor="requests">Do you have any special requests to help celebrate your {specialOccasion}?</label>
                        <input 
                            id="requests"
                            name="requests"
                            type="text"
                            value={requests}
                            onChange={(e)=>{setRequests(e.target.value)}}
                            />
                    </div>
                )}

                <button type='submit' onClick={(e)=>{props.submitForm(e, {
                    date,
                    time,
                    guestCount,
                    name,
                    phoneNumber,
                    specialOccasion,
                    requests
                })}}>Make your Reservation</button>




            </form>
        </>
    )
}

export default BookingForm