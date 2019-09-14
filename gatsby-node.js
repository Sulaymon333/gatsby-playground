// log all the nodes available
// exports.onCreateNode = ({ node }) => {
//   console.log(node.internal.type)
// }

// filter by only MarkdownRemark files
// exports.onCreateNode = ({ node }) => {
//   if (node.internal.type === `MarkdownRemark`) {
//     console.log(node.internal.type)
//   }
// }

// create slug using file name
// exports.onCreateNode = ({ node, getNode }) => {
//   if (node.internal.type === `MarkdownRemark`) {
//     const fileNode = getNode(node.parent)
//     console.log(`\n`, fileNode.relativePath)
//   }
// }

// create slug name using createFilePath function from gatsby-source-filesystem
// const { createFilePath } = require(`gatsby-source-filesystem`)

// exports.onCreateNode = ({ node, getNode }) => {
//   if (node.internal.type === `MarkdownRemark`) {
//     console.log(createFilePath({ node, getNode, basePath: `pages` }))
//   }
// }

// using createNodeField function to create additional fields on nodes created by other plugins

const { createFilePath } = require(`gatsby-source-filesystem`)
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}
