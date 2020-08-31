import React from "react"
import { Link } from "gatsby"

import MyLayout from "../components/my-layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <MyLayout>
    <SEO title="Home" />
    
    <div style={{ width: '100%', marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </MyLayout>
)

export default IndexPage
