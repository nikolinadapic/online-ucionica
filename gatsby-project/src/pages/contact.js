import React from 'react'

import MyLayout from '../components/my-layout'
import Head from '../components/head'

const ContactPage = () => {
    return (
        <MyLayout>
            <Head title="Contact" />
            <h1>Contact</h1>
            <p>Location: FESB, Split</p>
            <p>You can contact us any time on Facebook! <a style={{"text-decoration": "none", "color": "#d141ad"}} href="https://www.facebook.com/" target="_blank">Go to Facebook.</a></p>
        </MyLayout>
    )
}

export default ContactPage