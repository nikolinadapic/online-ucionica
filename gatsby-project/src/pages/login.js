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
                <p className={loginStyles.label}>Username</p>
                <input className={loginStyles.inputBox} type="text"></input>
            </div>
            <div className={loginStyles.loginData}>
                <p className={loginStyles.label}>Password</p>
                <input className={loginStyles.inputBox} type="password"></input>
            </div>
            <Link className={loginStyles.loginButton} to="/">Login</Link>
        </MyLayout>
    )
}

export default Login