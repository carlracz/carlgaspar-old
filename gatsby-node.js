const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blog = path.resolve(`./src/templates/postContentful.js`)
  const result = await graphql(
    `
      {
        allContentfulBlogPost {
          edges {
            node {
              slug
              title
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  // Create blog pages.
  const posts = result.data.allContentfulBlogPost.edges

  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node

    createPage({
      path: post.node.slug,
      component: blog,
      context: {
        slug: post.node.slug,
        previous,
        next,
      },
    })
  })
}
