import React from 'react'

import MyHeader from './my-header'
import Footer from './footer'
import '../styles/index.scss'
import myLayoutStyles from './my-layout.module.scss'

const MyLayout = (props) => {
    return (
        <div className={myLayoutStyles.container}>
            <div className={myLayoutStyles.content}>
                <MyHeader />
                {props.children}
            </div>
            <Footer />
        </div>
    )
}

export default MyLayout