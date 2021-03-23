/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import { graphql } from 'gatsby';
import '../style/css/style.css';
import BlogsContent from '../components/blogsContent';

const SecondPage = (props) => {
  const { data, location } = props;
  return (
    <BlogsContent location={location} data={data} lang="en-us" />
  );
};

export default SecondPage;

export const pageQuery = graphql`
  {
    allContentstackFooter {
      nodes {
        title
        copyright
        locale
        social {
          title
          social_links {
            fontawesome_class
            link {
              title
              href
            }
          }
        }
        group {
          address
          title
        }
      }
    }
    allContentstackHeader {
      nodes {
        title
        locale
        menu {
          link {
            title
            href
          }
        }
      }
    }
    allContentstackBlogPosts {
      nodes {
        title
        url
        locale
        hero_banner {
          banner_title
          banner_image {
            url
            filename
          }
        }
        blog_body {
          rich_text_editor {
            rich_text
          }
        }
        created_at(formatString: "")
        author {
          title
        }
      }
    }
  }
`;
