import React from 'react'
import { Link, graphql } from 'gatsby'
import '../style/css/style.css'
import Layout from '../components/layout'

const SecondPage = props => {
  let data = props.data.contentstackBlogPosts
  return (
    <Layout>
      <div className="container">
        <div className="heroBanner">
          <img
            className="bannerImage"
            src={data.hero_banner[0].banner_title_only.image.url}
            alt={data.hero_banner[0].banner_title_only.image.filename}
          />
        </div>
        <div className="bloglistContainer">
          {data.modular_blocks.map((list, idx) => {
            return (
              <div className="bloglist" key={idx}>
                <div className="leftSection">
                  <div>
                    <img
                      className="listImages"
                      src={list.blog_list.blog_image.url}
                      alt={list.blog_list.blog_image.filename}
                    />
                  </div>{' '}
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
      url
      hero_banner {
        banner_title_only {
          image {
            url
            uid
            filename
          }
          title
        }
      }
      modular_blocks {
        blog_list {
          blog_details
          blog_image {
            url
            filename
            uid
          }
          cta {
            href
            title
          }
        }
      }
    }
  }
`
