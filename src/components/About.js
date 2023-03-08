import React from 'react'
import MarioAndAdrianA from '../assets/MarioAndAdrianA.jpg'
import MarioAndAdrianB from '../assets/MarioAndAdrianB.jpg'

const About = () => {
    return (
        <section className=' container '>
            <div className='About contents h-flex space-between wrap'>
                <article className='About-article v-flex left'>
                    <h3 className='About-title title'>Little Lemon</h3>
                    <h4 className='About-subtitle subtitle'>Chicago</h4>
                    <p className='About-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mi massa, luctus quis ante pharetra, mollis bibendum turpis. Nulla volutpat condimentum commodo. Proin a risus bibendum, hendrerit purus sit amet, fermentum sapien. Quisque eu nisi iaculis turpis posuere commodo. Nullam eget purus mauris. Praesent ullamcorper finibus luctus. Maecenas efficitur ipsum mi, a vehicula urna lobortis ut. Quisque sollicitudin diam vitae aliquam pretium.</p>
                </article>
                <div className='About-images'>
                    <img src={MarioAndAdrianA} className="About-img" alt="Mario and Adrian at Work" width="250px"/>
                    <img src={MarioAndAdrianB} className="About-img" alt="Mario and Adrian at Work" width="250px"/>
                </div>
            </div>
            
        </section>

    )
}

export default About