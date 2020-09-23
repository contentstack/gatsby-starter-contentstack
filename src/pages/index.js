import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = ({data}) => (
  <Layout header={data.contentstackHome.header} footer={data.contentstackHome.footer} seo={data.contentstackHome.seo}>
    {console.log(data)}
    <div style={{margin:'0 auto', maxWidth:'960px', padding:'0px 1.0875rem 1.45rem', paddingTop:0}}>
      <div className='container'>
        <section>
          <div>
            <figure>
              <img src={data.contentstackHome.banner.url} alt={data.contentstackHome.banner.filename} width='100%'/>
            </figure>
          </div>
        </section>
        <section>
          <div className="article-list">
            {data.contentstackHome.group.map(function(col, idx){
              return <div key={idx} className='article'>
                <div>
            <div className='title'><h2>{col.title}</h2></div>
                  <div className='description' dangerouslySetInnerHTML={{__html:col.description}}></div>
                </div>
              </div>
            })}
          </div>
        </section>
      </div>
    </div>
  </Layout>
)
export const pageQuery = graphql`
  {
    contentstackHome {
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
    banner {
      filename
      url
    }
    group {
      title
      description
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


export default IndexPage
