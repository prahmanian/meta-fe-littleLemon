import React from 'react'
import {BsFillCalendarFill} from 'react-icons/bs'

const ConfirmedReservations = ({reservations}) => {


    return (
        <main className='Confirmations'>
            <h1 className='title'>You have {reservations.length} confirmed reservations!</h1>
            <section className="Confirmations-container">   
                {reservations.map(rez => (
                    <article key={rez.date + rez.time} className="Confirmations-rez">
                        <span className='day'>{rez.date.toDateString().split(" ")[0]}</span>
                        <div className="Rez-icon-container">
                            
                            <BsFillCalendarFill className='Rez-icon' />
                        </div>
                    
                    <div className="Rez-details">
                        <h2>{rez.specialOccasion !== 'None' ? `A special ${rez.specialOccasion.toLowerCase()} celebration!` : 'Great vibes and a nice Mediterranean meal'}</h2>
                        <p>{rez.name}, party of {rez.guestCount}</p>
                        <p>{rez.date.toLocaleDateString('en-US')} at {rez.time}</p>
                        
                    </div>
                    

                    </article>
                ))}
            </section>
            
        </main>
    )
}

export default ConfirmedReservations