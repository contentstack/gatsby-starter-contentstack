import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import 'react-responsive-carousel/lib/styles/carousel.css'

var Carousel = require('react-responsive-carousel').Carousel
export default function Blogpost({ data }) {
  let result = data.contentstackBlogPosts
  function dateSetter(params) {
    const date = new Date(params)
    const yy = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(date)
    const mm = new Intl.DateTimeFormat('en', { month: 'short' }).format(date)
    const dd = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(date)
    return `${mm}-${dd}-${yy}`
  }

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
              <img
                src={image.url}
                key={'K' * idx}
                style={{ width: '100%', height: '450px' }}
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
    <Layout
      header={data.allContentstackHeader.nodes}
      footer={data.allContentstackFooter.nodes}
      seo={result.seo}
    >
      <div className="blogContainer">
        <div className="heroBanner">
          <ul>
            <li>
              <img
                src={result.hero_banner[0].banner_title_only.image.url}
                className="bannerImage"
                alt={result.hero_banner[0].banner_title_only.image.filename}
              />
              <div className="bannerContent">
                <h1>{result.title}</h1>
                <div>
                  <span className="blogPostTimeStamp">
                    {dateSetter(result.created_at)}
                  </span>
                  ,<span className="blogpost-author">{result.author}</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="blogContent">
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
  query($title: String!) {
    contentstackBlogPosts(title: { eq: $title }) {
      title
      url
      # author
      seo {
        description
        keywords
        meta_title
      }
      modular_blocks {
        blog_post_page {
          blog_post {
            blog_content {
              blog_post_content
            }
            blog_quotes {
              quote
              quote_author
            }
            image_carousel {
              image {
                url
                filename
              }
            }
            social_network_embed {
              embed_code
            }
          }
        }
      }
      hero_banner {
        banner_title_only {
          title
          image {
            url
            filename
          }
        }
      }
      author
      created_at(formatString: "")
    }
    # }
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
  }
`
