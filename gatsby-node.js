const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const { data } = await graphql(
    `
      query {
        allContentfulProduct {
          edges {
            node {
              slug
            }
          }
        }
      }
    `
  )

  console.log(data)

  data.allContentfulProduct.edges.forEach(({ node }) => {
    createPage({
      path: `product/${node.slug}`,
      component: path.resolve("./src/templates/productPage.js"),
      context: {
        slug: node.slug,
      },
    })
  })
}
