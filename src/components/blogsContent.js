/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
/* eslint-disable prefer-template */
import { Link } from 'gatsby';
import React from 'react';
import Layout from './layout';

function dateSetter(params) {
  const date = new Date(params);
  const yy = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(date);
  const mm = new Intl.DateTimeFormat('en', { month: 'short' }).format(date);
  const dd = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(date);
  return `${mm}-${dd}-${yy}`;
}

const BlogsContent = ({ lang, data, location }) => {
  const blogData = data.allContentstackBlogPosts.nodes
    .filter((entry) => entry.publish_details.locale === lang);
  const headerData = data.allContentstackHeader.nodes
    .find((entry) => entry.publish_details.locale === lang);
  const footerData = data.allContentstackFooter.nodes
    .find((entry) => entry.publish_details.locale === lang);
  return (
    <Layout
      header={headerData}
      footer={footerData}
      seo={{
        keywords: 'lists',
        meta_title: 'Blogs Lists',
        description: 'contains all blog posts',
      }}
      lang={lang}
      location={location}
    >
      <div className="blogContainer">
        <div className="bloglistContainer">
          {blogData.map((list, idx) => (
            <div className="blogs" key={idx}>
              <div className="leftSection">
                <div>
                  <img
                    src={list.hero_banner.banner_image.url}
                    alt={list.hero_banner.banner_image.filename}
                  />
                </div>
              </div>
              <div className="rightSection">
                <h2>{list.title}</h2>
                <div>
                  <span className="timeStamp">
                    {dateSetter(list.created_at)}
                  </span>
                  ,
                  <span className="post-author">{list.author[0].title}</span>
                </div>
                <p className="blogPost">
                  {`${list.blog_body[0].rich_text_editor.rich_text.slice(
                    3,
                    150,
                  )}...`}
                </p>
                <Link className="postLink" to={`${lang !== 'en-us' ? '/' + lang : ''}${list.url}`}>
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default BlogsContent;
