import React, { Suspense } from 'react';
import { useRouter } from 'next/router';

import { Layout } from 'antd';
import { ApiOutlined, HomeOutlined } from '@ant-design/icons';

import AntdRouterMenu from '../../components/Antd-router-menu/Antd-router-menu';
import { MenuItem, MenuItemGroup } from '../../components/Menu';
import PageLoading from '../../components/page-loading';
import UserHeader from './components/user-header';

const { Header, Content, Footer, Sider } = Layout;

/**
 * 配置导航栏链接和文字
 */
const MENU_DATA = [
  new MenuItem('/home/timeline', '首页', <HomeOutlined />),
  new MenuItemGroup(
    '项目对接管理',
    [new MenuItem('/home/formwork', '项目新增')],
    <ApiOutlined />
  ),
];

export const MenuContext = React.createContext<(MenuItem | MenuItemGroup)[]>(
  MENU_DATA
);

export default () => {
  const router = useRouter();
  return (
    <MenuContext.Provider value={MENU_DATA}>
      <Layout>
        <Header
          style={{
            justifyContent: 'space-between',
            display: 'flex',
          }}
        >
          <h1
            style={{
              fontFamily: 'fantasy',
              fontSize: '30px',
              fontWeight: 'bold',
              color: '#fafafa',
              cursor: 'pointer',
            }}
            onClick={() => {
              router.push('/login');
            }}
          >
            研究生联合培养基地
          </h1>
          <UserHeader />
        </Header>
        <Layout>
          <Sider theme="light" className="home-sider">
            <AntdRouterMenu menuData={MENU_DATA} />
          </Sider>
          <div className="home-content-box">
            <Suspense fallback={<PageLoading />}>
              <Content className="home-content">{router}</Content>
            </Suspense>
            <Footer>code@Eric design@Luna</Footer>
          </div>
        </Layout>
      </Layout>
    </MenuContext.Provider>
  );
};
