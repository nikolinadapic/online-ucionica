import React from 'react'

import Footer from '../components/footer'
import MyHeader from '../components/my-header'

const ContactPage = () => {
    return (
        <div>
            <MyHeader />
            <h1>Contact</h1>
            <p>Location: FESB, Split</p>
            <p>You can contact us any time on Facebook! <a href="https://www.facebook.com/" target="_blank">Go to Facebook</a></p>
            <Footer />
        </div>
    )
}

export default ContactPage