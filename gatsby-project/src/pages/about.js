import React from 'react'
import { Link } from 'gatsby'

import Footer from '../components/footer'
import MyHeader from '../components/my-header'

const AboutPage = () => {
    return (
        <div>
            <MyHeader />
            <h1>About Our Math Classes...</h1>
            <p>We provide easy Math classes with examples and exercizes. The classes are arranged by the topic. Select what you need and let's get started!</p>
            <p>Need a tutor? <Link to="/contact">Contact us.</Link></p>
            <Footer />
        </div>
    )
}

export default AboutPage