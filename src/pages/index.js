/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/no-danger */
import React from 'react';
import { graphql } from 'gatsby';
import { LocaleContext } from '../components/provider';

import Layout from '../components/layout';

const IndexPage = ({ data }) => (
  <LocaleContext.Consumer>
    {(context) => {
      const homeData = data.allContentstackHome.nodes
        .find((entry) => entry.locale === context.currentLocale);
      return (
        <Layout
          header={data.allContentstackHeader.nodes}
          footer={data.allContentstackFooter.nodes}
          seo={homeData.seo}
        >
          <div
            style={{
              margin: '0 auto',
              maxWidth: '960px',
              padding: '0px 1.0875rem 1.45rem',
              paddingTop: 0,
            }}
          >
            <div className="container">
              <section>
                <div>
                  <figure>
                    <img
                      src={homeData.banner.url}
                      alt={homeData.banner.filename}
                      width="100%"
                    />
                  </figure>
                </div>
              </section>
              <section>
                <div className="article-list">
                  {homeData.group.map((col, idx) => (
                    <div key={idx} className="article">
                      <div>
                        <div className="title">
                          <h2>{col.title}</h2>
                        </div>
                        <div
                          className="description"
                          dangerouslySetInnerHTML={{ __html: col.description }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </Layout>
      );
    }}
  </LocaleContext.Consumer>
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
