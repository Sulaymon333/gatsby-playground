import React from "react"
import { Link } from "gatsby"

const AboutPage = () => {
  return (
    <div>
      <h1>About Me</h1>
      <p>I am this young cool guy to hang out with and code together</p>
      <p>
        Would you like to contact me? let's us catch on{" "}
        <Link to="/contact">here</Link>
      </p>
    </div>
  )
}

export default AboutPage
