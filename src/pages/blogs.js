import React from 'react'
import { graphql } from 'gatsby'
import '../style/css/style.css'
import Layout from '../components/layout'
import Img from 'gatsby-image/withIEPolyfill'

const SecondPage = (props) => {
  let data = props.data.contentstackBlogPosts
  return (
    <Layout header={data.header} footer={data.footer} seo={data.seo}>
      <div className="blogContainer">
        <div className="bloglistContainer">
          {data.modular_blocks.map((list, idx) => {
            return (
              <div className="blogs" key={idx}>
                <div className="leftSection">
                  <div>
                    <Img
                      fixed={
                        list.blog_list.blog_image.localAsset.childImageSharp
                          .fixed
                      }
                      style={{ width: '95%' }}
                      alt={list.blog_list.blog_image.filename}
                    />
                  </div>
                </div>
                <div className="rightSection">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: list.blog_list.blog_details,
                    }}
                  ></div>{' '}
                  <a className="postLink" href={list.blog_list.cta.href}>
                    {list.blog_list.cta.title}
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
    contentstackBlogPosts(url: { eq: "/blog-list" }) {
      title
      header {
        title
        menu {
          link {
            title
            href
          }
        }
      }
      seo {
        meta_title
        description
        keywords
      }
      hero_banner {
        banner_title_only {
          title
          image {
            localAsset {
              childImageSharp {
                fixed(height: 500) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
      modular_blocks {
        blog_list {
          blog_details
          blog_image {
            localAsset {
              childImageSharp {
                fixed(height: 240) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
          cta {
            href
            title
          }
        }
      }
      footer {
        title
        group {
          title
          address
        }
        social {
          title
          social_links {
            link {
              title
              href
            }
            fontawesome_class
          }
        }
        copyright
      }
    }
  }
`
