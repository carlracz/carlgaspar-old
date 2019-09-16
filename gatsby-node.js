const path = require(`path`)

const config = require('./src/utils/siteConfig')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  
  const loadBlog = await graphql(
    `
      {
        allContentfulBlog {
          edges {
            node {
              title
              slug
            }
          }
        }
      }
    `
  )

  if (loadBlog.errors) {
    throw loadBlog.errors
  }
  
  // Create each blog
  const blog = loadBlog.data.allContentfulBlog.edges
  blog.forEach((post, index) => {
    const previous = index === blog.length - 1 ? null : blog[index + 1].node
    const next = index === 0 ? null : blog[index - 1].node

    createPage({
      path: post.node.slug,
      component: path.resolve(`./src/templates/post.js`),
      context: {
        slug: post.node.slug,
        previous,
        next,
      },
    })
  })
  
  const loadTag = await graphql(
    `
      {
        allContentfulTag {
          edges {
            node {
              title
              slug
            }
          }
        }
      }
    `
  )

  if (loadTag.errors) {
    throw loadTag.errors
  }
  
  // Create each tag page with each blog header
  const tag = loadTag.data.allContentfulTag.edges
  tag.map(({ node }) => {
    createPage({
      path: node.slug,
      component: path.resolve(`./src/templates/tag.js`),
      context: {
        slug: node.slug,
      },
    })
  })
  
  /** Pages */
  
  // Create home page
  createPage({
    path: `/`,
    component: path.resolve(`./src/templates/index.js`),
    context: {},
  })
  
  // Create blog page
  createPage({
    path: `/blog`,
    component: path.resolve(`./src/templates/blog.js`),
    context: {},
  })
  
  // Create advertisement page
  createPage({
    path: `/advertisement`,
    component: path.resolve(`./src/templates/advertisement.js`),
    context: {},
  })
}
