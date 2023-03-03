import React from 'react'

const Confirm = ({reservation, edit}) => {
    return (
        <div>
            <h1>Let's confirm...</h1>
            
            {/* {reservation.date.toLocaleDateString('en-CA')} */}
            

            <p>Who:</p>
            <p><b>{reservation.name}</b>, party of <b>{reservation.guestCount}</b>!</p>
            <br/><p>What:</p>
            <p>{reservation.specialOccasion ? `A special ${reservation.specialOccasion} celebration.` : 'Great vibes and a nice Mediterranean meal.'}</p>
            
            <br /><p>When: </p>
            <p><b>{reservation.date.toLocaleDateString('en-US')}</b> at <b>{reservation.time}</b></p>

            <br/><p>Where:</p>
            <p>Little Lemon | Chicago</p>
            <p>35 Lemongrass Way</p>

            {reservation.requests && (<><br/><p>Special Requests:</p>
            <p>{reservation.requests}</p></>)}

            <p>We'll send you a text reminder at <b>{reservation.phoneNumber}</b>.</p>

            <button onClick={() => edit()}>Edit</button>
            <button>Confirm!</button>

        </div>
    )
}

export default Confirm