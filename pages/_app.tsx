import React from 'react';

import '../styles/antd.css';
import '../styles/layout.css';

const MyApp = (props: any) => {
  const { Component, pageProps } = props;
  const Layout = Component.Layout ? Component.Layout : React.Fragment;
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
