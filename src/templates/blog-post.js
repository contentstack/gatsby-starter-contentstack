import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Img from 'gatsby-image'
import 'react-responsive-carousel/lib/styles/carousel.css'

var Carousel = require('react-responsive-carousel').Carousel
export default function Blogpost({ data }) {
  let result = data.contentstackBlogPosts
  function createContent(data, idx) {
    return (
      <div
        key={idx}
        dangerouslySetInnerHTML={{ __html: data }}
        className="blogPostContent"
      ></div>
    )
  }
  function createCarousel(images, id) {
    return (
      <div key={id} className="imageCarousel">
        <h2 className="slideShowTitle">Slide Show</h2>

        <Carousel showThumbs={false} infiniteLoop={true} showArrows={true}>
          {images.map((image, idx) => {
            return (
              <Img
                fluid={image.localAsset.childImageSharp.fluid}
                key={'K' * idx}
                style={{ width: '100%', height: '400px' }}
                alt={image.filename}
              />
            )
          })}
        </Carousel>
      </div>
    )
  }
  function createQuotes(data, id) {
    return (
      <div className="blogQuotes" key={id}>
        <h2 className="quotesTitle">Blog Quotes</h2>
        <blockquote
          className="otro-blockquote"
          dangerouslySetInnerHTML={{ __html: data }}
        />
      </div>
    )
  }
  function createSocialNetwork(data, id) {
    return (
      <div className="embededSocialCode" key={id}>
        <h2 className="socialTitle">Social Network</h2>
        {data.map((quote, i) => {
          return (
            <div
              className="singleQuotes"
              key={i}
              dangerouslySetInnerHTML={{ __html: quote }}
            />
          )
        })}
      </div>
    )
  }
  return (
    <Layout header={result.header} footer={result.footer} seo={result.seo}>
      <div className="blogContainer">
        <div className="heroBanner">
          <Img
            fluid={
              result.hero_banner[0].banner_title_only.image.localAsset
                .childImageSharp.fluid
            }
            objectFit="cover"
            className="bannerImage"
            style={{ width: '80%', height: '500px' }}
            alt={result.hero_banner[0].banner_title_only.image.filename}
          />
        </div>
        <div className="blogContent">
          <h2 className="blog-title">{result.title}</h2>
          {result.modular_blocks[0].blog_post_page.blog_post.map((post, id) => {
            return Object.entries(post).map(function (data, idx) {
              if (data[0] === 'blog_content' && data[1] !== null) {
                return createContent(data[1].blog_post_content, idx)
              }
              if (data[0] === 'image_carousel' && data[1] !== null) {
                return createCarousel(data[1].image, idx)
              }
              if (data[0] === 'blog_quotes' && data[1] !== null) {
                return createQuotes(data[1].quote, idx)
              }
              if (data[0] === 'social_network_embed' && data[1] !== null) {
                return createSocialNetwork(data[1].embed_code, idx)
              }
            })
          })}
        </div>
      </div>
    </Layout>
  )
}
export const postQuery = graphql`
  query allContentstackBlogPosts($title: String!) {
    contentstackBlogPosts(title: { eq: $title }) {
      title
      url
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
            filename
            localAsset {
              childImageSharp {
                fluid(
                  maxWidth: 1000
                  quality: 100
                  webpQuality: 10
                  cropFocus: CENTER
                  fit: COVER
                ) {
                  ...GatsbyImageSharpFluid
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
            uid
            url
            filename
          }
          cta {
            href
            title
          }
        }
        blog_post_page {
          blog_post {
            blog_content {
              blog_post_content
            }
            blog_quotes {
              quote
            }
            image_carousel {
              image {
                localAsset {
                  childImageSharp {
                    fluid(quality: 100, webpQuality: 10) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
            social_network_embed {
              embed_code
            }
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
