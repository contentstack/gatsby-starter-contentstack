/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import { graphql } from 'gatsby';
import '../style/css/style.css';
import Layout from '../components/layout';

function dateSetter(params) {
  const date = new Date(params);
  const yy = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(date);
  const mm = new Intl.DateTimeFormat('en', { month: 'short' }).format(date);
  const dd = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(date);
  return `${mm}-${dd}-${yy}`;
}

const SecondPage = (props) => {
  const { data } = props;
  return (
    <Layout
      header={data.allContentstackHeader.nodes}
      footer={data.allContentstackFooter.nodes}
      seo={{
        keywords: 'lists',
        meta_title: 'Blogs Lists',
        description: 'contains all blog posts',
      }}
    >
      <div className="blogContainer">
        <div className="bloglistContainer">
          {data.allContentstackBlogPosts.nodes.map((list, idx) => (
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
                <a className="postLink" href={`${list.url}`}>
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default SecondPage;

export const pageQuery = graphql`
  {
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
      }
    }
    allContentstackBlogPosts {
      nodes {
        title
        url
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
