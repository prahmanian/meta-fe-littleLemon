import React, { useState } from 'react'

const BookingForm = (props) => {

    const {
        date,
        time,
        guestCount,
        name,
        phoneNumber,
        specialOccasion,
        requests,
        formattedDate
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

    const isValidDate = () => {
        const selected = date.toLocaleDateString('en-US')
        const today = new Date().toLocaleDateString('en-US')
        return (date && ((new Date() - new Date(date) <= 0) || selected === today))
    }

    const isValidTime = (t=null) => {
        const timeValue = t ? t :time
        return (timeValue && (props.availableTimes).includes(timeValue) && (timeValue[2] === ":"))
    }

    const isValidCount = () => {
        return (guestCount && guestCount >= 1 && guestCount <= 10)
    }

    const isValidName = () => {
        return (name && name.length >= 2)
    }

    const isValidPhoneNumber = () => {
        return (phoneNumber && phoneNumber.length === 10)
    }

    const validate = () => {
        return ( 
            isValidDate() &&
            isValidTime() &&
            isValidCount() &&
            isValidName() &&
            isValidPhoneNumber() &&
            specialOccasion
        )
    }

    const [timeTouched, setTimeTouched] = useState(false)
    const [nameTouched, setNameTouched] = useState(false)
    const [phoneNumberTouched, setPhoneNumberTouched] = useState(false)


    return (
        <>
            <h1 className='title'>Make a Reservation</h1>
            <form  className='Reservations-form'>

                <div className='Form-element'>
                    
                    <label className='Form-label' htmlFor="date">What day would you like to make a reservation for?</label>
                    <input 
                        id="date"
                        name="date"
                        type="date"
                        className={isValidDate() ? 'Form-input' : 'Form-input Form-input-error'}
                        // value={date.toLocaleDateString('en-CA')}
                        value={formattedDate}
                        onChange={handleDateChange}
                        required
                    />
                    {
                        !isValidDate() && 
                        <span className='Form-error'>Please select a date in the future...</span>
                    }
        
                </div>

                <div className='Form-element'>
                    {
                        isValidTime() || (!isValidTime() && !timeTouched) ? 
                        <label className='Form-label' htmlFor="time">When will you arrive?</label> :
                        <label className='Form-error' htmlFor="time">Please select an available time...</label>
                    }
                    {/* <label className='Form-label' htmlFor="time">When will you arrive?</label> */}
                    <select 
                        id="time"
                        name="time"
                        className={isValidTime() || (!isValidTime() && !timeTouched) ? 'Form-input' : 'Form-input Form-input-error'}
                        onBlur={()=> setTimeTouched(true)}
                        minLength={5}
                        maxLength={5}
                        value={time ? time : 'select time'}
                        onChange={(e)=>{
                            setTime(e.target.value)
                        }}
                        required
                    >   

                        <option  disabled >select time</option>
                        {props.availableTimes.map(time => <option key={time} value={time}>{time}</option>)}
                    </select>
                </div>

                <div className='Form-element'>
                    {
                        isValidCount() ? 
                        <label className='Form-label' htmlFor="guestCount">How many people will be in your party?</label> :
                        <label className='Form-error' htmlFor="guestCount">For parties of more than 10 people, please give us a call.</label>
                    }
                    {/* <label htmlFor="guestCount">How many people will be in your party?</label> */}
                    <input 
                        id="guestCount"
                        name="guestCount"
                        type="number"
                        min={1}
                        max={11}
                        className={isValidCount() ? 'Form-input' : 'Form-input Form-input-error'}
                        value={guestCount}
                        onChange={(e)=>{setGuestCount(e.target.value)}}
                        required
                    />
                </div>

                <div className='Form-element'>
                    {
                        isValidName() || (!isValidName() && !nameTouched) ? 
                        <label className='Form-label' htmlFor="name">What name should we hold your table under?</label> :
                        <label className='Form-error' htmlFor="name">Please provide a name to hold your reservation.</label>
                    }
                    {/* <label htmlFor="name">What name should we hold your table under?</label> */}
                    <input 
                        id="name"
                        name="name"
                        type="text"
                        className={isValidName() || (!isValidName() && !nameTouched) ? 'Form-input' : 'Form-input Form-input-error'}
                        onBlur={()=> setNameTouched(true)}
                        value={name}
                        minLength={2}
                        onChange={(e)=>{setName(e.target.value)}}
                        required
                    />
                </div>

                <div className='Form-element'>
                    {
                        isValidPhoneNumber() || (!isValidPhoneNumber() && !phoneNumberTouched) ? 
                        <label className='Form-label' htmlFor="name">What phone number can we send you a confirmation text at?</label> :
                        <label className='Form-error' htmlFor="name">Please enter a valid phone number.</label>
                    }
                    {/* <label htmlFor="phoneNumber">What phone number can we send you a confirmation text at?</label> */}
                    <input 
                        id="phoneNumber"
                        name="phoneNumber"
                        type="tel"
                        minLength={10}
                        maxLength={10}
                        placeholder={"0000000000"}
                        onBlur={()=> setPhoneNumberTouched(true)}
                        className={isValidPhoneNumber() || (!isValidPhoneNumber() && !phoneNumberTouched) ? 'Form-input' : 'Form-input Form-input-error'}
                        value={phoneNumber}
                        onChange={(e)=>{setPhoneNumber(e.target.value)}}
                        required
                    />
                </div>

                <div className='Form-element'>
                    <label htmlFor="specialOccasion">Are you celebrating a special occasion?</label>
                    <select 
                        id="specialOccasion"
                        name="specialOccasion"
                        placeholder="Select Occasion"
                        className="Form-input"
                        value={specialOccasion}
                        onChange={(e)=>{setSpecialOccasion(e.target.value)}}
                        required
                    >
                        <option value="None">-</option>
                        <option value="Birthday">Birthday</option>
                        <option value="Engagement">Engagement</option>
                        <option value="Anniversary">Anniversary</option>
                    </select>
                </div>

                {specialOccasion !== 'None' && (
                    <div className='Form-element'>
                        <label htmlFor="requests">Do you have any special requests to help celebrate your {specialOccasion}?</label>
                        <textarea 
                            id="requests"
                            name="requests"
                            type="text"
                            className="Form-input"
                            value={requests}
                            onChange={(e)=>{setRequests(e.target.value)}}
                            />
                    </div>
                )}

                <input type='submit' className='Button Button-primary' value="submit" disabled={!validate()} onClick={(e)=>{props.submitForm(e, {
                    date,
                    time,
                    guestCount,
                    name,
                    phoneNumber,
                    specialOccasion,
                    requests
                })}} />




            </form>
        </>
    )
}

export default BookingForm