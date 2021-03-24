/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/no-danger */
import React from 'react';
import { graphql } from 'gatsby';
import IndexContent from '../components/indexContent';

const IndexPage = ({ data, location }) => (
  <IndexContent location={location} data={data} lang="es-es" />
);
export const pageQuery = graphql`
  {
    allContentstackHome {
      nodes {
        title
        url
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
        publish_details {
          locale
        }
      }
    }
    allContentstackFooter {
      nodes {
        title
        copyright
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
        publish_details {
          locale
        }
      }
    }
    allContentstackHeader {
      nodes {
        title
        menu {
          link {
            title
            href
          }
        }
        publish_details {
          locale
        }
      }
    }
  }
`;

export default IndexPage;
