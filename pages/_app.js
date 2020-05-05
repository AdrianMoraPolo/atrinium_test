import App from 'next/app';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { DefaultSeo } from 'next-seo'


export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps };
  }
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        {/* Then we pass the config to the plugin */}
        <DefaultSeo
          openGraph={{
            type: 'website',
            locale: 'es_IE',
            url: '',
            site_name: '',
            title: '',
            description: '',
          }}
          />
        <Component {...pageProps} />
      </>
    );
  }
}