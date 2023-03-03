import React, {useState} from 'react'

const timesArr = [
    "7:00 pm",
    "8:00 pm",
    "9:00 pm",
    "10:00 pm",
]

const AvailableTimes = () => {
    const [times, setTimes] = useState(timesArr)
    return (
        <>
            {times.map(time => <option value={time}>{time}</option>)}
        </>
    )   
}
export default AvailableTimes