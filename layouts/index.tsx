/**
 * layout-home
 */
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import { Layout } from 'antd';

import PageLoading from 'components/page-loading';
import Header from './header';

const { Footer, Content } = Layout;

interface HomeProps {
  children: JSX.Element;
}

// FIXME: 可能可以优化
const Home: React.FC<HomeProps> = ({ children }) => {
  const [isLoading, setLoadingState] = useState(false);
  const router = useRouter();

  useEffect(() => {
    router.events.on('routeChangeStart', () => {
      setLoadingState(true);
    });
    router.events.on('routeChangeComplete', () => {
      setLoadingState(false);
    });
  }, []);

  return (
    <Layout>
      <div className="home-content-box">
        <Header />
        <Content className="home-content">
          {isLoading ? <PageLoading /> : children}
        </Content>
        <Footer>code@Eric design@Luna</Footer>
      </div>
    </Layout>
  );
};

export default Home;
