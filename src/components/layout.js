import React from 'react'
import Helmet from 'react-helmet'

import Header from './header'
import Footer from './footer'
import './layout.css'

export default class Layout extends React.Component {
  render() {
    return (
      <>
        {this.props.seo ? (
          <Helmet
            title={this.props.seo.meta_title}
            meta={[
              { name: 'description', content: this.props.seo.description },
              { name: 'keywords', content: this.props.seo.keywords },
            ]}
          >
            <html lang="en" />
          </Helmet>
        ) : (
          ''
        )}
        {this.props.header[0] ? <Header header={this.props.header[0]} /> : ''}
        <main>{this.props.children}</main>
        {this.props.footer[0] ? <Footer footer={this.props.footer[0]} /> : ''}
      </>
    )
  }
}
