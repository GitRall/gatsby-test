import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
      <div
        style={{
          boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
          padding: '30px',
          borderRadius: '10px'
        }}>
        <h2 style={{color: 'dodgerblue'}}>Home</h2>
      </div>
  </Layout>
)

export default IndexPage
