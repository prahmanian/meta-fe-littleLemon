import React from 'react'
import Button from './Button'

const Confirm = ({reservation, edit, confirm}) => {
    return (
        <>
            <h1 className='title Confirm-title'>Let's confirm...</h1>

            <div className='Confirm-details'>
                <p>Joining us is...</p>
                <br/>
                <p><b>{reservation.name}</b>, party of <b>{reservation.guestCount}</b>!</p>
                <p>for</p>
                <p>{reservation.specialOccasion !== 'None' ? `A special ${reservation.specialOccasion} celebration.` : 'Great vibes and a nice Mediterranean meal.'}</p>
                
                <br />
                <br />
                <p>We'll see you on </p>
                <p><b>{reservation.date.toLocaleDateString()}</b> at <b>{reservation.time}</b></p>

                <p>at</p>
                <p>Little Lemon | Chicago</p>
                <p>35 Lemongrass Way</p>

                {reservation.requests && (<><br/><br/><p>Special Requests:</p>
                <p>{reservation.requests}</p></>)}

                <br/><p>We'll send you a text reminder at <b>{reservation.phoneNumber}</b>.</p><br/>

                <div className="Button-set">
                    <Button type="light" onClick={() => edit()}>Edit</Button>
                    <Button type="primary" to="/confirmed" onClick={() => confirm()}>Confirm!</Button>
                </div>
                
            </div>
        </>
    )
}

export default Confirm