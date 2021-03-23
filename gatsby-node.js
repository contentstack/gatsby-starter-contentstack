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
          locale
        }
      }
    }
  `);
  function createnewPage(path, comp, title, locale) {
    createPage({
      path: `${path}`,
      component: comp,
      context: {
        title,
        locale,
      },
    });
  }
  result.data.allContentstackBlogPosts.nodes.forEach((node) => {
    let lang = "";
    if (node.locale !== 'en-us') {
      lang = `/${node.locale}`;
    }
    createnewPage(`${lang}${node.url}`, blogPostTemplate, node.title, node.locale);
  });
};
