import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"

const BlogPage = () => {
  const uuid = require("uuidv4")
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
              author
            }
            html
            excerpt
          }
        }
      }
    }
  `)

  const { edges } = data.allMarkdownRemark

  return (
    <Layout>
      <h1>Welcome to my cool blog posts</h1>
      <p>Here I talk about cool stuffs</p>
      <ul>
        {edges.map(edge => {
          return (
            <li key={uuid()}>
              <h2>
                {edge.node.frontmatter.title}{" "}
                <small>
                  <i>{edge.node.frontmatter.date}</i>
                </small>
              </h2>
              <p>{edge.node.excerpt.slice(0, 35)} ...</p>
              {/* <div dangerouslySetInnerHTML={{ __html: edge.node.html }} /> */}
            </li>
          )
        })}
      </ul>
    </Layout>
  )
}

export default BlogPage
