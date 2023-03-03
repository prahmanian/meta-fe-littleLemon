import React from 'react'

import { useFormik } from "formik";
import {
    Box,
    Button,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Heading,
    Input,
    Select,
    Textarea,
    VStack,
} from "@chakra-ui/react";
import * as Yup from 'yup';
import "yup-phone-lite"

import AvailableTimes from './AvailableTimes';


const BookingForm = () => {

    const formik = useFormik({
        initialValues: {
            date: "",
            time: "",
            guestCount: 1,
            name: "",
            phoneNumber: "",
            specialOccasion: ""
        },
        onSubmit: (values) => {},
        validationSchema: Yup.object({
            date: Yup.date().required("Please select a date for your reservation."),
            time: Yup.string().required("Please let us know what time you'll arrive."),
            guestCount: Yup.number()
                .min(1, "At least one person has to come.")
                .max(10, "For larger parties, please give us a call.")
                .required("Please let us know how many people will be in your party."),
            name: Yup.string().required("Please provide a name to hold your reservation."),
            phoneNumber: Yup.string().phone('US', "Please enter a valid phone number").required("A Phone number is required to confirm your reservation."),
            specialOccasion: Yup.string()
        })
    })


    return (
        <>
            <h1>Make a Reservation</h1>
            <form onSubmit={formik.handleSubmit}>

                <FormControl isInvalid={!!formik.errors.date && formik.touched.date}>
                    <FormLabel htmlFor="date">Date</FormLabel>
                    <Input
                        id="date"
                        name="date"
                        type="date"
                        // onChange={formik.handleChange}
                        // value={formik.values.firstName}
                        {...formik.getFieldProps('date')}
                    />
                    <FormErrorMessage>{formik.errors.date}</FormErrorMessage>
                </FormControl>

                {/* <FormControl isInvalid={!!formik.errors.time && formik.touched.time}>
                    <FormLabel htmlFor="time">Time</FormLabel>
                    <Input
                        id="time"
                        name="time"
                        type="time"
                        // onChange={formik.handleChange}
                        // value={formik.values.firstName}
                        {...formik.getFieldProps('time')}
                    />
                    <FormErrorMessage>{formik.errors.time}</FormErrorMessage>
                </FormControl> */}

                <FormControl isInvalid={!!formik.errors.time && formik.touched.time}>
                    <FormLabel htmlFor="time">Time</FormLabel>
                    <Select
                        id="time"
                        name="time"
                        // placeholder="7:00 pm"
                        // onChange={formik.handleChange}
                        // value={formik.values.firstName}
                        {...formik.getFieldProps('time')}
                    >
                    <AvailableTimes />
                    </Select>
                    <FormErrorMessage>{formik.errors.time}</FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={!!formik.errors.guestCount && formik.touched.guestCount}>
                    <FormLabel htmlFor="guestCount">guestCount</FormLabel>
                    <Input
                        id="guestCount"
                        name="guestCount"
                        type="number"
                        min={1}
                        max={11}
                        // onChange={formik.handleChange}
                        // value={formik.values.firstName}
                        {...formik.getFieldProps('guestCount')}
                    />
                    <FormErrorMessage>{formik.errors.guestCount}</FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={!!formik.errors.name && formik.touched.name}>
                    <FormLabel htmlFor="name">name</FormLabel>
                    <Input
                        id="name"
                        name="name"
                        // onChange={formik.handleChange}
                        // value={formik.values.firstName}
                        {...formik.getFieldProps('name')}
                    />
                    <FormErrorMessage>{formik.errors.name}</FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={!!formik.errors.phoneNumber && formik.touched.phoneNumber}>
                    <FormLabel htmlFor="phoneNumber">What phone number can we send you a confirmation text at?</FormLabel>
                    <Input
                        id="phoneNumber"
                        name="phoneNumber"
                        type="tel"
                        // onChange={formik.handleChange}
                        // value={formik.values.firstName}
                        {...formik.getFieldProps('phoneNumber')}
                    />
                    <FormErrorMessage>{formik.errors.phoneNumber}</FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={!!formik.errors.specialOccasion && formik.touched.specialOccasion}>
                    <FormLabel htmlFor="specialOccasion">Select Occasion:</FormLabel>
                    <Select
                        id="specialOccasion"
                        name="specialOccasion"
                        placeholder='Select Occasion'
                        // onChange={formik.handleChange}
                        // value={formik.values.firstName}
                        {...formik.getFieldProps('specialOccasion')}
                    >
                        <option value="None">None</option>
                        <option value="Birthday">Birthday</option>
                        <option value="Engagement">Engagement</option>
                        <option value="Anniversary">Anniversary</option>

                    </Select>
                    <FormErrorMessage>{formik.errors.specialOccasion}</FormErrorMessage>
                </FormControl>


            </form>
            
        </>

    )
}

export default BookingForm