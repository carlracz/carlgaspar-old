const path = require(`path`)

const config = require('./src/utils/siteConfig')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  
  const result = await graphql(
    `
      {
        allContentfulBlog {
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
  const posts = result.data.allContentfulBlog.edges
  
  const postsPerFirstPage = config.postsPerHomePage
  const postsPerPage = config.postsPerPage
  const numPages = Math.ceil(
    posts.slice(postsPerFirstPage).length / postsPerPage
  )
      
  // Create main home page
  createPage({
    path: `/`,
    component: path.resolve(`./src/templates/index.js`),
    context: {
      limit: postsPerFirstPage,
      skip: 0,
      numPages: numPages + 1,
      currentPage: 1,
    },
  })
  
  // Create additional pagination on home page if needed
  /*Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: `/${i + 2}/`,
      component: path.resolve(`./src/templates/index.js`),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage + postsPerFirstPage,
        numPages: numPages + 1,
        currentPage: i + 2,
      },
    })
  })*/
  
  // Create blog page
  createPage({
    path: `/blog`,
    component: path.resolve(`./src/templates/blog.js`),
    context: {
      limit: postsPerFirstPage,
      skip: 0,
      numPages: numPages + 1,
      currentPage: 1,
    },
  })
  
  // Create each individual post
  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node

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
  
  // Create advertisement page
  createPage({
    path: `/advertisement`,
    component: path.resolve(`./src/templates/advertisement.js`),
    context: {
      limit: postsPerFirstPage,
      skip: 0,
      numPages: numPages + 1,
      currentPage: 1,
    },
  })
}
