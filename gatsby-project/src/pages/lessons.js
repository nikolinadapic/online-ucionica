import React from 'react'

import MyLayout from '../components/my-layout'
import Head from '../components/head'
import lessonsStyles from './lessons.module.scss'

const Lessons = () => {
    return (
        <MyLayout>
            <Head title="Lessons" />
            <h1>Lessons</h1>
            <div className={lessonsStyles.container}>
                <div className={lessonsStyles.content}>
                    <h4 className={lessonsStyles.text}>Basic Math</h4>
                </div>
                <div className={lessonsStyles.content}>
                    <h4 className={lessonsStyles.text}>Algebra</h4>
                </div>
                <div className={lessonsStyles.content}>
                    <h4 className={lessonsStyles.text}>Calculus</h4>
                </div>
                <div className={lessonsStyles.content}>
                    <h4 className={lessonsStyles.text}>Analysis</h4>
                </div>
                <div className={lessonsStyles.content}>
                    <h4 className={lessonsStyles.text}>Geometry</h4>
                </div>
                <div className={lessonsStyles.content}>
                    <h4 className={lessonsStyles.text}>Topology</h4>
                </div>
                <div className={lessonsStyles.content}>
                    <h4 className={lessonsStyles.text}>Discrete Math</h4>
                </div>
                <div className={lessonsStyles.content}>
                    <h4 className={lessonsStyles.text}>Logic</h4>
                </div>
                <div className={lessonsStyles.content}>
                    <h4 className={lessonsStyles.text}>Number Theory</h4>
                </div>
                <div className={lessonsStyles.content}>
                    <h4 className={lessonsStyles.text}>Equations</h4>
                </div>
                <div className={lessonsStyles.content}>
                    <h4 className={lessonsStyles.text}>Math Objects</h4>
                </div>
                <div className={lessonsStyles.content}>
                    <h4 className={lessonsStyles.text}>Signal Processing</h4>
                </div>
                <div className={lessonsStyles.content}>
                    <h4 className={lessonsStyles.text}>Probability</h4>
                </div>
                <div className={lessonsStyles.content}>
                    <h4 className={lessonsStyles.text}>Statistics</h4>
                </div>
                <div className={lessonsStyles.content}>
                    <h4 className={lessonsStyles.text}>Game Theory</h4>
                </div>
                <div className={lessonsStyles.content}>
                    <h4 className={lessonsStyles.text}>Operations Research</h4>
                </div>
                <div className={lessonsStyles.content}>
                    <h4 className={lessonsStyles.text}>Differential</h4>
                </div>
                <div className={lessonsStyles.content}>
                    <h4 className={lessonsStyles.text}>Integrals</h4>
                </div>
                <div className={lessonsStyles.content}>
                    <h4 className={lessonsStyles.text}>General Concepts</h4>
                </div>
                <div className={lessonsStyles.content}>
                    <h4 className={lessonsStyles.text}>Dynamical Systems</h4>
                </div>
                <div className={lessonsStyles.content}>
                    <h4 className={lessonsStyles.text}>Computing Theory</h4>
                </div>
                
            </div>
        </MyLayout>
    )
}

export default Lessons