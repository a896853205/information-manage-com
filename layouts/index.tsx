/**
 * layout-home
 */
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import { Layout } from 'antd';

import PageLoading from 'components/page-loading';
import AntdRouterMenu from 'layouts/Antd-router-menu';
import UserHeader from 'layouts/user-header';

const { Header, Footer, Sider, Content } = Layout;

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
      <Sider
        theme="dark"
        className="home-sider"
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
        }}
      >
        <div className="home-side-head">message-client</div>
        <AntdRouterMenu />
      </Sider>
      <Layout style={{ marginLeft: 200 }}>
        <div className="home-content-box">
          <Header
            style={{
              justifyContent: 'space-between',
              display: 'flex',
              background: '#fafafa',
              flexDirection: 'row-reverse',
            }}
          >
            <UserHeader />
          </Header>
          <Content className="home-content">
            {isLoading ? <PageLoading /> : children}
          </Content>
          <Footer>code@Eric design@Luna</Footer>
        </div>
      </Layout>
    </Layout>
  );
};

export default Home;
