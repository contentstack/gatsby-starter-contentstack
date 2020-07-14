import React from 'react'
import { graphql } from 'gatsby'
import '../style/css/style.css'
import Layout from '../components/layout'
import Img from "gatsby-image/withIEPolyfill"

const SecondPage = (props) => {
  let data = props.data.contentstackBlogPosts
  console.log(data)
  return (
    <Layout>
      <div className="container">
        <div className="heroBanner">
          <Img
          fixed={data.hero_banner[0].banner_title_only.image.localAsset.childImageSharp.fixed}
          objectFit="cover"
          className="bannerImage"
          style={{width:"100%"}}
          alt={data.hero_banner[0].banner_title_only.image.filename}
          />
        </div>
        <div className="bloglistContainer">
          {data.modular_blocks.map((list, idx) => {
            return (
              <div className="bloglist" key={idx}>
                <div className="leftSection">
                  <div>
                    <Img
                    fixed={list.blog_list.blog_image.localAsset.childImageSharp.fixed}
                    style={{width:"95%"}}
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
    }
  }
`
