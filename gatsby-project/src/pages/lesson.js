import React from 'react'

import MyLayout from '../components/my-layout'
import Head from '../components/head'
import LessonImage from "../components/lesson-image"

const Lesson = () => {
    return (
        <MyLayout>
            <Head title="Lesson" />
            <LessonImage />
        </MyLayout>
    )
}

export default Lesson