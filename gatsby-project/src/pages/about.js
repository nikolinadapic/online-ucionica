import React from 'react'
import { Link } from 'gatsby'

import MyLayout from '../components/my-layout'
import Head from '../components/head'

const AboutPage = () => {
    return (
        <MyLayout>
            <Head title="About" />
            <h1>About Our Math Lessons...</h1>
            <p>We provide easy Math lessons with examples and exercizes. The lessons are arranged by the topic. Select what you need and let's get started!</p>
            <p>Need a tutor? <Link style={{"text-decoration": "none", "color": "#d141ad"}} to="/contact">Contact us.</Link></p>
        </MyLayout>
    )
}

export default AboutPage