const path = require('path')
const { graphql } = require('gatsby')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve('src/templates/blog-post.js')
  const result = await graphql(`
    {
      allContentstackBlogPosts {
        nodes {
          title
          url
        }
      }
    }
  `)
  function createnewPage(path, comp, title) {
    createPage({
      path: `${path}`,
      component: comp,
      context: {
        title: title,
      },
    })
  }
  result.data.allContentstackBlogPosts.nodes.forEach(node => {
    if (node.url !== '/blog-list') {
      createnewPage(node.url, blogPostTemplate, node.title)
    }
  })
}
