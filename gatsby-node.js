// exports.onCreateNode = ({ node }) => {
//   console.log(node.internal.type)
// }

// exports.onCreateNode = ({ node }) => {
//   if (node.internal.type === `MarkdownRemark`) {
//     console.log(node.internal.type)
//   }
// }

exports.onCreateNode = ({ node, getNode }) => {
  if (node.internal.type === `MarkdownRemark`) {
    const fileNode = getNode(node.parent)
    console.log(`\n`, fileNode.relativePath)
  }
}
