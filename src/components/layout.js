import React from "react"
import { Link } from "gatsby"
const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default ({ children }) => (
  <div className="wrapper">
    <div style={containerStyle}>
      <div style={{ minHeight: `calc(100vh - 150px)`, flexGrow: 1 }}>
        <header style={{ marginBottom: `1.5rem` }}>
          <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
            <h3 style={{ display: `inline` }}>My Awesome Website</h3>
          </Link>
          <ul style={{ listStyle: `none`, float: `right` }}>
            <ListLink to="/">Home</ListLink>
            <ListLink to="/about">About</ListLink>
            <ListLink to="/contact">Contact</ListLink>
          </ul>
        </header>
        {children}
      </div>

      <footer style={{ marginTop: `1.5rem`, textAlign: `center` }}>
        <p>Copyright &copy; {new Date().getFullYear()}.</p>
      </footer>
    </div>

    <aside className="sidebar">
      <ul style={sidebarStyle}>
        <ListLink to="/">Home</ListLink>
        <ListLink to="/about">About</ListLink>
        <ListLink to="/contact">Contact</ListLink>
      </ul>
    </aside>
  </div>
)

const containerStyle = {
  display: `flex`,
  flexDirection: `column`,
  margin: `3rem auto`,
  maxWidth: 650,
  padding: `0 1rem`,
}

const sidebarStyle = {
  listStyle: `none`,
  position: `absolute`,
  top: `10vh`,
  left: `2vw`,
  display: `flex`,
  flexDirection: `column`,
  justifyContent: `space-between`,
  minHeight: `10vw`,
  backgroundColor: `rgba(218, 224, 215, 0.3198)`,
  padding: `2rem`,
  borderRadius: "0.5rem",
}
