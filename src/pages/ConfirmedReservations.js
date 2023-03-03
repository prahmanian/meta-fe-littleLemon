import React from 'react'

const ConfirmedReservations = ({reservations}) => {


    return (
        <main>
            <h1>You have {reservations.length} confirmed reservations!</h1>
    
            {reservations.map(rez => (
                <article key={rez.date + rez.time}>
                <h2>{rez.name}, party of {rez.guestCount}</h2>
                <p>{rez.date.toLocaleDateString('en-US')}</p>
                <p>{rez.time}</p>

                </article>
            ))}

            
        </main>
    )
}

export default ConfirmedReservations