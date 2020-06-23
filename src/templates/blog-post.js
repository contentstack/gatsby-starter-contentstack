import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import 'react-responsive-carousel/lib/styles/carousel.css'

var Carousel = require('react-responsive-carousel').Carousel
export default function Blogpost({ data }) {
  let result = data.contentstackBlogPosts
  function createContent(data, idx) {
    return <div key={idx} dangerouslySetInnerHTML={{ __html: data }}></div>
  }
  function createCarousel(images) {
    return (
      <Carousel
        showArrows={true}
        showThumbs={false}
        infiniteLoop={true}
        thumbWidth="200px"
        showArrows={true}
      >
        {images.map((image, idx) => {
          return (
            <div key={idx} height="200px" width="200px">
              <img
                src={image.url}
                alt={image.filename}
                width="200px"
                height="350px"
              />
            </div>
          )
        })}
      </Carousel>
    )
  }
  function createQuotes(data) {
    return (
      <div className="blogQuotes">
        <blockquote
          className="otro-blockquote"
          dangerouslySetInnerHTML={{ __html: data }}
        />
      </div>
    )
  }
  function createSocialNetwork(data) {  
    return <div className="embededSocialCode">
      <h2 className="socialTitle">Social Network</h2>
  {data.map((quote,i) =>{return <div className="singleQuotes" key={i}  dangerouslySetInnerHTML={{ __html: quote }}/>})}
    </div>
  }
  return (
    <Layout>
      <div className="container">
        <div className="heroBanner">
          <img
            className="bannerImage"
            src={result.hero_banner[0].banner_title_only.image.url}
            alt={result.hero_banner[0].banner_title_only.image.filename}
            height="550px"
          />
        </div>
        <div className="blogContent">
          <h2 className="blog-title">{result.title}</h2>
          {result.modular_blocks[0].blog_post_page.blog_post.map((post, id) => {
            return Object.entries(post).map((data, idx) => {
              if (data[0] === 'blog_content' && data[1] !== null) {
                return createContent(data[1].blog_post_content, idx)
              }
              if (data[0] === 'image_carousel' && data[1] !== null) {
                return createCarousel(data[1].image)
              }
              if (data[0] === 'blog_quotes' && data[1] !== null) {
                return createQuotes(data[1].quote)
              }
              if (data[0] === 'social_network_embed' && data[1] !== null) {
                return createSocialNetwork(data[1].embed_code)
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
      hero_banner {
        banner_title_only {
          title
          image {
            url
            uid
            filename
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
                url
                uid
                filename
              }
            }
            social_network_embed {
              embed_code
            }
          }
        }
      }
    }
  }
`
