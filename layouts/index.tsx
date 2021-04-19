// FIXME: 这块需要打上home的layout的标签,这样好与login的layout区别
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import { Layout } from 'antd';
import { ApiOutlined, HomeOutlined } from '@ant-design/icons';

import AntdRouterMenu from 'layouts/Antd-router-menu';
import { MenuItem, MenuItemGroup } from 'layouts/Menu';
import PageLoading from 'components/page-loading';
import UserHeader from 'layouts/user-header';

const { Header, Footer, Sider, Content } = Layout;

/**
 * 配置导航栏链接和文字
 */
const MENU_DATA = [
  new MenuItem('/', '首页', <HomeOutlined />),
  new MenuItemGroup(
    '项目对接管理',
    [
      new MenuItem('/project', '项目信息管理'),
      new MenuItem('/apply_check', '指标审核管理'),
    ],
    <ApiOutlined />
  ),
  new MenuItemGroup(
    '教务信息管理',
    [
      new MenuItem('/attendance', '考勤管理'),
      new MenuItem('/weekly', '周志管理'),
    ],
    <ApiOutlined />
  ),
  new MenuItemGroup(
    '信息审批管理',
    [new MenuItem('/attendance', '用户账号审核')],
    <ApiOutlined />
  ),
];

export const MenuContext = React.createContext<(MenuItem | MenuItemGroup)[]>(
  MENU_DATA
);

const Home = (props: any) => {
  const { children } = props;

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
          >
            研究生科研管理
          </h1>
          <UserHeader />
        </Header>
        <Layout>
          <Sider theme="light" className="home-sider">
            <AntdRouterMenu menuData={MENU_DATA} />
          </Sider>
          <div className="home-content-box">
            <Content className="home-content">
              {isLoading ? <PageLoading /> : children}
            </Content>
            <Footer>code@Eric design@Luna</Footer>
          </div>
        </Layout>
      </Layout>
    </MenuContext.Provider>
  );
};

export default Home;
