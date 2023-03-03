import React from 'react'


const AvailableTimes = ({times}) => {
    return (
        <>
            {times.map(time => <option key={time} value={time}>{time}</option>)}
        </>
    )   
}
export default AvailableTimes