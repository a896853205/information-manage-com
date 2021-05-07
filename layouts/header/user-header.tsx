import React from 'react';
import { memo } from 'react';
import { useRouter } from 'next/router';

import { Avatar, Button, Space, Divider } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';
import useRequest from '@ahooksjs/use-request';

import { account } from 'services/apis/account';
import styles from './user-header.module.scss';

const UserHeader = memo(() => {
  const router = useRouter();
  const { data } = useRequest(account);

  return (
    <Space>
      <Avatar src={data?.avatarUrl}>U</Avatar>
      <span className={styles['user-name-box']}>
        {data?.name ?? 'username'}
      </span>
      <Divider className={styles['divider']} type="vertical" />
      <Button
        type="text"
        icon={<LogoutOutlined />}
        className={styles['logout-button']}
        onClick={() => {
          localStorage.clear();
          router.push('/');
        }}
      >
        退出登录
      </Button>
    </Space>
  );
});

export default UserHeader;
