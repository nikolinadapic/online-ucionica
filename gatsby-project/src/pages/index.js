import React from "react"
import { Link } from "gatsby"

import Head from '../components/head'
import MyLayout from "../components/my-layout"
import Image from "../components/image"
import loginStyles from './login.module.scss'

const IndexPage = () => (
  <MyLayout>
    <Head title="Home" />
    
    <div style={{ width: '100%', marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <p>Have an account? Log in below!</p>
    <Link className={loginStyles.loginButton} to="/login">Login</Link>
  </MyLayout>
)

export default IndexPage
