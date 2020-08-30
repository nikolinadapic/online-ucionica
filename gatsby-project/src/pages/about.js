import React from 'react'
import { Link } from 'gatsby'

import MyLayout from '../components/my-layout'

const AboutPage = () => {
    return (
        <MyLayout>
            <h1>About Our Math Lessons...</h1>
            <p>We provide easy Math lessons with examples and exercizes. The lessons are arranged by the topic. Select what you need and let's get started!</p>
            <p>Need a tutor? <Link to="/contact">Contact us.</Link></p>
        </MyLayout>
    )
}

export default AboutPage