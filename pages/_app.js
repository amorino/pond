import App from 'next/app';
import Link from 'next/link';
import React from 'react';
import GlobalStyle from '../styles/global';

export default class Pond extends App {
  static async getInitialProps({ Component, ctx }) {
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
        <GlobalStyle />
        <header>
          <nav>
            <Link href="/">
              <a>Home</a>
            </Link>
            |
            <Link href="/about">
              <a>About</a>
            </Link>
            |
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </nav>
        </header>

        <Component {...pageProps} />

        <footer>I&lsquo;m here to stay</footer>
      </>
    );
  }
}
