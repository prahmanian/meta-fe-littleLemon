import './App.css';
import React, {useState, useReducer, useEffect} from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import {fetchAPI} from './bookingsAPI'

import Nav from './components/Nav'
import Footer from './components/Footer';


import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import BookingPage from './pages/BookingPage';
import ConfirmedReservations from './pages/ConfirmedReservations';

function App() {

  const [confirmed, setConfirmed] = useState(false)

  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState("");
  const [guestCount, setGuestCount] = useState(1);
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [specialOccasion, setSpecialOccasion] = useState("None");
  const [requests, setRequests] = useState("");

  const [reservations, setReservations] = useState([])

  const saveReservation = () => {
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
      setReservations(resis)
      console.log(reservations)
  }

  useEffect(() => resetForm(),[reservations])

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
      const output = fetchAPI(date)
      return output
  }

  const [availableTimes, reducer] = useReducer(updateTimes, new Date(), fetchAPI)


  const packageProps = () => {return({
    values: {
      confirmed,
      date,
      time,
      guestCount,
      name,
      phoneNumber,
      specialOccasion,
      requests,
      reservations
    },
    setters: {
      setConfirmed,
      setDate,
      setTime,
      setGuestCount,
      setName,
      setPhoneNumber,
      setSpecialOccasion,
      setRequests,
      setReservations
    },
    handlers: {
      saveReservation,
      resetForm,
      submitForm,
      updateTimes
    },
    times: {
      availableTimes,
      reducer
    }
  })}





  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/menu" element={<AboutPage />} />
          <Route path="/reservations" element={<BookingPage 
            values={packageProps().values} 
            setters={packageProps().setters}
            handlers={packageProps().handlers}
            times={packageProps().times}
          />} />
          <Route path="/confirmed" element={<ConfirmedReservations reservations={reservations} />} />

        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
