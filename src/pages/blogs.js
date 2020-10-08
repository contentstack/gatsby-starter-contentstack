import React from 'react'
import { graphql } from 'gatsby'
import '../style/css/style.css'
import Layout from '../components/layout'

function dateSetter(params) {
  const date = new Date(params)
  const yy = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(date)
  const mm = new Intl.DateTimeFormat('en', { month: 'short' }).format(date)
  const dd = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(date)
  return `${mm}-${dd}-${yy}`
}

const SecondPage = (props) => {
  let data = props.data
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
          {data.allContentstackBlogPosts.nodes.map((list, idx)=> {
            return (
              <div className="blogs" key={idx}>
                <div className="leftSection">
                  <div>
                    <img
                      src={list.hero_banner[0].banner_title_only.image.url}
                      alt={list.hero_banner[0].banner_title_only.image.filename}
                    />
                  </div>
                </div>
                <div className="rightSection">
                  <h2>{list.title}</h2>
                  <div>
                    <span className="timeStamp">
                      {dateSetter(list.created_at)}
                    </span>
                    ,<span className="post-author">{list.author}</span>
                  </div>
                  <p className="blogPost">
                    {`${list.modular_blocks[0].blog_post_page.blog_post[0].blog_content.blog_post_content.slice(
                      3,
                      150
                    )}...`}
                  </p>
                  <a className="postLink" href={`/blogs${list.url}`}>
                    Read More
                  </a>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

export default SecondPage

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
        modular_blocks {
          blog_post_page {
            blog_post {
              blog_content {
                blog_post_content
              }
            }
          }
        }
        hero_banner {
          banner_title_only {
            title
            image {
              filename
              url
            }
          }
        }
        author
        created_at(formatString: "")
      }
    }
  }
`
