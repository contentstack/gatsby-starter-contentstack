/* eslint-disable no-shadow */
const path = require('path');

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const blogPostTemplate = path.resolve('src/templates/blog-post.js');
  const result = await graphql(`
    {
      allContentstackBlogPosts {
        nodes {
          title
          url
        }
      }
    }
  `);
  function createnewPage(path, comp, title) {
    createPage({
      path: `${path}`,
      component: comp,
      context: {
        title,
      },
    });
  }
  result.data.allContentstackBlogPosts.nodes.forEach((node) => {
    createnewPage(`${node.url}`, blogPostTemplate, node.title);
  });
};
