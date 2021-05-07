import { Layout } from 'antd';

import AntdRouterMenu from 'layouts/header/antd-router-menu';
import UserHeader from 'layouts/header/user-header';

import styles from './styles.module.scss';

const { Header } = Layout;

const HorizontalHeader = () => {
  return (
    <Header>
      <div className={styles['header-box']}>
        <h1 className={styles['header-title']}>message-client</h1>
        <AntdRouterMenu />
        <div className={styles['user-box']}>
          <UserHeader />
        </div>
      </div>
    </Header>
  );
};

export default HorizontalHeader;
