import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import loginStyles from './login.module.scss'
import MyLayout from '../components/my-layout'
import Head from '../components/head'

const Login = () => {
    return (
        <MyLayout>
            <Head title="Login" />
            <h1>Login</h1>
            <div className={loginStyles.loginData}>
                <p className={loginStyles.label1}>Username</p>
                <input className={loginStyles.inputBox} type="text"></input>
            </div>
            <div className={loginStyles.loginData}>
                <p className={loginStyles.label2}>Password</p>
                <input className={loginStyles.inputBox} type="password"></input>
            </div>
            <Link className={loginStyles.loginButton2} to="/">Login</Link>
        </MyLayout>
    )
}

export default Login