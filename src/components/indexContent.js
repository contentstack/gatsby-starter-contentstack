/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/no-danger */
import React from 'react';
import Layout from './layout';

const IndexContent = ({ lang, data, location }) => {
  const homeData = data.allContentstackHome.nodes
    .find((entry) => entry.publish_details.locale === lang);
  const headerData = data.allContentstackHeader.nodes
    .find((entry) => entry.publish_details.locale === lang);
  const footerData = data.allContentstackFooter.nodes
    .find((entry) => entry.publish_details.locale === lang);
  return (
    <Layout
      header={headerData}
      footer={footerData}
      seo={homeData.seo}
      lang={lang}
      location={location}
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
};

export default IndexContent;
