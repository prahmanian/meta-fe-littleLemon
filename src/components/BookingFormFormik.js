import React from 'react'

import { useFormik } from "formik";
import {
    Box,
    // Button,
    FormControl,
    FormErrorMessage,
    FormLabel,
    // Heading, 
    Input,
    Select,
    Textarea,
    VStack,
} from "@chakra-ui/react";
import * as Yup from 'yup';
import "yup-phone-lite"

// import AvailableTimes from './AvailableTimes';


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

    const formik = useFormik({
        initialValues: {
            date: date,
            time: time,
            guestCount: guestCount,
            name: name,
            phoneNumber: phoneNumber,
            specialOccasion: specialOccasion,
            requests: ""
        },
        onSubmit: (values) => {},
        validationSchema: Yup.object({
            date: Yup.date().required("Please select a date for your reservation."),
            time: Yup.string().required("Please let us know what time you'll arrive."),
            guestCount: Yup.number()
                .min(1, "At least one person has to come.")
                .max(10, "For parties of more than 10, please give us a call.")
                .required("Please let us know how many people will be in your party."),
            name: Yup.string().required("Please provide a name to hold your reservation."),
            phoneNumber: Yup.string().phone('US', "Please enter a valid phone number").required("A Phone number is required to confirm your reservation."),
            specialOccasion: Yup.string(),
            requests: Yup.string()
        })
    })

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


    return (
        <VStack w="40vw" p={32} alignItems="flex-start">
            <h1>Make a Reservation</h1>
            <Box p={6} rounded="md" w="100%">
                <form onSubmit={formik.handleSubmit} className='Reservations-form'>
                    {/* <VStack spacing={4}> */}
                        <FormControl className="FormControl" isInvalid={!!formik.errors.date && formik.touched.date}>
                            <FormLabel htmlFor="date">Pick your date:</FormLabel>
                            <Input
                                id="date"
                                name="date"
                                type="date"
                                {...formik.getFieldProps('date')}
                                onChange={handleDateChange}
                                value={formattedDate}
                            />
                            <FormErrorMessage>{formik.errors.date}</FormErrorMessage>
                        </FormControl>

                        <FormControl className="FormControl" isInvalid={!!formik.errors.time && formik.touched.time}>
                            <FormLabel htmlFor="time">When will you arrive?</FormLabel>
                            <Select
                                id="time"
                                name="time"
                                {...formik.getFieldProps('time')}
                                onChange={(e)=>{setTime(e.target.value)}}
                                value={time ? time : 'select time'}
                            >
                            {/* <AvailableTimes /> */}
                            <option  disabled value='select time'>select time</option>
                            {props.availableTimes.map(time => <option key={time} value={time}>{time}</option>)}
                            </Select>
                            <FormErrorMessage>{formik.errors.time}</FormErrorMessage>
                        </FormControl>

                        <FormControl className="FormControl" isInvalid={!!formik.errors.guestCount && formik.touched.guestCount}>
                            <FormLabel htmlFor="guestCount">How many people will be in your party?</FormLabel>
                            <Input
                                id="guestCount"
                                name="guestCount"
                                type="number"
                                min={1}
                                // max={11}
                                {...formik.getFieldProps('guestCount')}
                                onChange={(e)=>{setGuestCount(e.target.value)}}
                                value={guestCount}
                            />
                            <FormErrorMessage>{formik.errors.guestCount}</FormErrorMessage>
                        </FormControl>

                        <FormControl className="FormControl" isInvalid={!!formik.errors.name && formik.touched.name}>
                            <FormLabel htmlFor="name">What name should we hold your table under?</FormLabel>
                            <Input
                                id="name"
                                name="name"
                                {...formik.getFieldProps('name')}
                                onChange={(e)=>{setName(e.target.value)}}
                                value={name}
                            />
                            <FormErrorMessage>{formik.errors.name}</FormErrorMessage>
                        </FormControl>

                        <FormControl className="FormControl" isInvalid={!!formik.errors.phoneNumber && formik.touched.phoneNumber}>
                            <FormLabel htmlFor="phoneNumber">What phone number can we send you a confirmation text at?</FormLabel>
                            <Input
                                id="phoneNumber"
                                name="phoneNumber"
                                type="tel"
                                {...formik.getFieldProps('phoneNumber')}
                                onChange={(e)=>{setPhoneNumber(e.target.value)}}
                                value={phoneNumber}
                            />
                            <FormErrorMessage>{formik.errors.phoneNumber}</FormErrorMessage>
                        </FormControl>

                        <FormControl className="FormControl" isInvalid={!!formik.errors.specialOccasion && formik.touched.specialOccasion}>
                            <FormLabel htmlFor="specialOccasion">Are you celebrating a special occasion?</FormLabel>
                            <Select
                                id="specialOccasion"
                                name="specialOccasion"
                                placeholder='Select Occasion'
                                {...formik.getFieldProps('specialOccasion')}
                                onChange={(e)=>{setSpecialOccasion(e.target.value)}}
                                value={specialOccasion}
                                
                            >
                                <option value="None">None</option>
                                <option value="Birthday">Birthday</option>
                                <option value="Engagement">Engagement</option>
                                <option value="Anniversary">Anniversary</option>

                            </Select>
                            <FormErrorMessage>{formik.errors.specialOccasion}</FormErrorMessage>
                        </FormControl>

                        {specialOccasion !== 'None' && (
                            <FormControl className="FormControl" isInvalid={!!formik.errors.requests && formik.touched.requests}>
                                <FormLabel htmlFor="requests">Do you have any special requests to help celebrate your {specialOccasion}?</FormLabel>
                                <Textarea
                                    id="requests"
                                    name="requests"
                                    {...formik.getFieldProps('requests')}
                                    onChange={(e)=>{setRequests(e.target.value)}}
                                    value={requests}
                                />
                                <FormErrorMessage>{formik.errors.name}</FormErrorMessage>
                            </FormControl>
                        )}

                        

                        <input type='submit' value="submit"  onClick={(e)=>{props.submitForm(e, {
                            date,
                            time,
                            guestCount,
                            name,
                            phoneNumber,
                            specialOccasion,
                            requests
                        })}} />

                    {/* </VStack> */}
                </form>
            </Box>
        </VStack>

    )
}

export default BookingForm