import React from 'react'
import {Link} from 'react-router-dom'

const Confirm = ({reservation, edit, confirm}) => {
    return (
        <div>
            <h1>Let's confirm...</h1>
            
            {/* {reservation.date.toLocaleDateString('en-CA')} */}
            

            <p>Who:</p>
            <p><b>{reservation.name}</b>, party of <b>{reservation.guestCount}</b>!</p>
            <br/><p>What:</p>
            <p>{reservation.specialOccasion !== 'None' ? `A special ${reservation.specialOccasion} celebration.` : 'Great vibes and a nice Mediterranean meal.'}</p>
            
            <br /><p>When: </p>
            <p><b>{reservation.date.toLocaleDateString('en-US')}</b> at <b>{reservation.time}</b></p>

            <br/><p>Where:</p>
            <p>Little Lemon | Chicago</p>
            <p>35 Lemongrass Way</p>

            {reservation.requests && (<><br/><p>Special Requests:</p>
            <p>{reservation.requests}</p></>)}

            <br/><p>We'll send you a text reminder at <b>{reservation.phoneNumber}</b>.</p><br/>

            <button onClick={() => edit()}>Edit</button>
            <Link to="/confirmed"><button onClick={() => confirm()}>Confirm!</button></Link>

        </div>
    )
}

export default Confirm