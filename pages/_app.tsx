import React from 'react';
// import App from 'next/app';

import '../styles/antd.css';

const MyApp = (props: any) => {
  const { Component, pageProps } = props;
  return <Component {...pageProps} />;
};

export default MyApp;
