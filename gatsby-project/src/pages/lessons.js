import React from 'react'

import { Link } from 'gatsby'
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
                    <Link to="/lesson"><h4 className={lessonsStyles.text}>Basic Mathematics</h4></Link>
                </div>
                <div className={lessonsStyles.content}>
                    <Link to="/lesson"><h4 className={lessonsStyles.text}>Algebra</h4></Link>
                </div>
                <div className={lessonsStyles.content}>
                    <Link to="/lesson"><h4 className={lessonsStyles.text}>Calculus</h4></Link>
                </div>
                <div className={lessonsStyles.content}>
                    <Link to="/lesson"><h4 className={lessonsStyles.text}>Analysis</h4></Link>
                </div>
                <div className={lessonsStyles.content}>
                    <Link to="/lesson"><h4 className={lessonsStyles.text}>Geometry</h4></Link>
                </div>
                <div className={lessonsStyles.content}>
                    <Link to="/lesson"><h4 className={lessonsStyles.text}>Topology</h4></Link>
                </div>
                <div className={lessonsStyles.content}>
                    <Link to="/lesson"><h4 className={lessonsStyles.text}>Combinatorics</h4></Link>
                </div>
                <div className={lessonsStyles.content}>
                    <Link to="/lesson"><h4 className={lessonsStyles.text}>Logic</h4></Link>
                </div>
                <div className={lessonsStyles.content}>
                    <Link to="/lesson"><h4 className={lessonsStyles.text}>Number Theory</h4></Link>
                </div>
                <div className={lessonsStyles.content}>
                    <Link to="/lesson"><h4 className={lessonsStyles.text}>Equations</h4></Link>
                </div>
                <div className={lessonsStyles.content}>
                    <Link to="/lesson"><h4 className={lessonsStyles.text}>Mathematical Objects</h4></Link>
                </div>
                <div className={lessonsStyles.content}>
                    <Link to="/lesson"><h4 className={lessonsStyles.text}>Signal Processing</h4></Link>
                </div>
                <div className={lessonsStyles.content}>
                    <Link to="/lesson"><h4 className={lessonsStyles.text}>Probability</h4></Link>
                </div>
                <div className={lessonsStyles.content}>
                    <Link to="/lesson"><h4 className={lessonsStyles.text}>Statistics</h4></Link>
                </div>
                <div className={lessonsStyles.content}>
                    <Link to="/lesson"><h4 className={lessonsStyles.text}>Game Theory</h4></Link>
                </div>
                <div className={lessonsStyles.content}>
                    <Link to="/lesson"><h4 className={lessonsStyles.text}>Operations Research</h4></Link>
                </div>
                <div className={lessonsStyles.content}>
                    <Link to="/lesson"><h4 className={lessonsStyles.text}>Differentials</h4></Link>
                </div>
                <div className={lessonsStyles.content}>
                    <Link to="/lesson"><h4 className={lessonsStyles.text}>Integrals</h4></Link>
                </div>
                <div className={lessonsStyles.content}>
                    <Link to="/lesson"><h4 className={lessonsStyles.text}>General Concepts</h4></Link>
                </div>
                <div className={lessonsStyles.content}>
                    <Link to="/lesson"><h4 className={lessonsStyles.text}>Dynamical Systems</h4></Link>
                </div>
                <div className={lessonsStyles.content}>
                    <Link to="/lesson"><h4 className={lessonsStyles.text}>Computation Theory</h4></Link>
                </div>
                
            </div>
        </MyLayout>
    )
}

export default Lessons