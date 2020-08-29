import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import MyHeader from '../components/my-header'

const IndexPage = () => (
  <Layout>
    <MyHeader />
    <SEO title="Home" />
    
    <div style={{ width: '100%', marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
