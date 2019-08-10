import React from "react"
import { Link } from "gatsby" // good to link between pages

const IndexPage = () => {
  return (
    <div>
      <h1>Hello People!</h1>
      <h3>I am Sulaymon, a fullstack developer from Amazing Nigeria.</h3>
      <p>
        Need a developer? <Link to="/contact">Contact Me</Link>
      </p>
    </div>
  )
}

export default IndexPage
