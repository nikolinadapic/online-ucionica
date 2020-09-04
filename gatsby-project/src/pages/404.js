import React from "react"

import { Link } from 'gatsby'
import MyLayout from "../components/my-layout"
import Head from '../components/head'

const NotFoundPage = () => {
  return (
    <MyLayout>
      <Head title="404" />
      <h1>Page not found</h1>
      <p><Link to="/">Back to Home</Link></p>
    </MyLayout>

  )
}

export default NotFoundPage
