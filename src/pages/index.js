import React from "react"
import { Link } from "gatsby" // good to link between pages
import Header from "../components/header"
import Footer from "../components/footer"

const IndexPage = () => {
  return (
    <div>
      <Header />
      <h1>Hello People!</h1>
      <h3>I am Sulaymon, a fullstack developer from Amazing Nigeria.</h3>
      <p>
        Need a developer? <Link to="/contact">Contact Me</Link>
      </p>
      <Footer />
    </div>
  )
}

export default IndexPage
