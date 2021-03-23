/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/no-danger */
import React from 'react';
import { graphql } from 'gatsby';
import IndexContent from '../components/indexContent';

const IndexPage = ({ data, location }) => (
  <IndexContent location={location} data={data} lang="en-us" />
);
export const pageQuery = graphql`
  {
    allContentstackHome {
      nodes {
        title
        url
        locale
        seo {
          meta_title
        }
        banner {
          filename
          url
        }
        group {
          title
          description
        }
      }
    }
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
  }
`;

export default IndexPage;
