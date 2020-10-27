/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import Helmet from 'react-helmet';

import Header from './header';
import Footer from './footer';
import './layout.css';

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
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.4.0/css/font-awesome.min.css" integrity="sha512-ZV9KawG2Legkwp3nAlxLIVFudTauWuBpC10uEafMHYL0Sarrz5A7G79kXh5+5+woxQ5HM559XX2UZjMJ36Wplg==" crossOrigin="anonymous" />
          </Helmet>
        ) : (
          ''
        )}
        {this.props.header[0] ? <Header header={this.props.header[0]} /> : ''}
        <main>{this.props.children}</main>
        {this.props.footer[0] ? <Footer footer={this.props.footer[0]} /> : ''}
      </>
    );
  }
}
