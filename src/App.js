import './App.css';
import React, {useState, useReducer, useEffect} from 'react'
import {BrowserRouter, Routes, Route, redirect} from "react-router-dom"
import {fetchAPI, submitAPI} from './bookingsAPI'

import Nav from './components/Nav'
import Footer from './components/Footer';


import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import BookingPage from './pages/BookingPage';
import ConfirmedReservations from './pages/ConfirmedReservations';

function App() {

  const [confirmed, setConfirmed] = useState(false);
  const [date, setDate] = useState(new Date());
  const [formattedDate, setFormattedDate] = useState(`${date.getFullYear()}-${date.getMonth() < 9 ? '0' : ''}${date.getMonth()+1}-${date.getDate() < 10 ? '0' : ''}${date.getDate()}`);
  const [time, setTime] = useState(null);
  const [guestCount, setGuestCount] = useState(4);
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(null);
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
      const success = submitAPI(newReservation)
      if (success) {redirect('test')}
  }

  useEffect(() => resetForm(),[reservations])

  useEffect(() => {
    setFormattedDate(`${date.getFullYear()}-${date.getMonth() < 9 ? '0' : ''}${date.getMonth()+1}-${date.getDate() < 10 ? '0' : ''}${date.getDate()}`)

  },[date])

  const resetForm = () => {
      setSpecialOccasion('None')
      setRequests('')
      setGuestCount(4)
      setTime(null)
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
      if (! (new Set(output).has(time))) setTime(null);
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
      reservations,
      formattedDate
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
