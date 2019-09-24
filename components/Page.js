// @flow
import React, { type Node } from 'react';
import Head from 'next/head';

type Props = {
  children: Node,
  title?: string,
};

const Page = ({ children, title }: Props) => (
  <section>
    <Head>
      <title>{title}</title>
    </Head>
    {children}
  </section>
);

Page.defaultProps = {
  title: 'Default title',
};

export default Page;
