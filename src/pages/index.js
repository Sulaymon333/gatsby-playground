import React from "react"
import { Link } from "gatsby" // good to link between pages

import Layout from "../components/layout"

const IndexPage = () => {
  return (
    <Layout>
      <h1>Hello People!</h1>
      <h3>I am Sulaymon, a fullstack developer from Amazing Nigeria🇳🇬.</h3>
      <p>
        Need a developer? <Link to="/contact">Contact Me</Link>
      </p>
    </Layout>
  )
}

export default IndexPage
