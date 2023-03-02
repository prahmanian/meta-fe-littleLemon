import About from '../components/About';
import Testimonials from '../components/Testimonials';
import Specials from '../components/Specials';
import Banner from '../components/Banner';

import React from 'react'

const HomePage = () => {
    return (
        <main>
            <Banner />
            <Specials />
            <Testimonials />
            <About />
        </main>
    )
}

export default HomePage