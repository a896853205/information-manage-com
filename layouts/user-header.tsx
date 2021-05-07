import React from 'react';
import { memo } from 'react';
import { useRouter } from 'next/router';

import { Avatar, Button, Space, Divider } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';
import useRequest from '@ahooksjs/use-request';

import { account } from 'services/apis/account';

const UserHeader = memo(() => {
  const router = useRouter();
  const { data } = useRequest(account);

  return (
    <div style={{ width: '250px' }}>
      <Space>
        <Avatar src={data?.avatarUrl}>U</Avatar>
        <span style={{ fontSize: '14px' }}>{data?.name ?? 'username'}</span>
        <Divider type="vertical" />
        <Button
          type="text"
          icon={<LogoutOutlined />}
          style={{ fontSize: '14px' }}
          onClick={() => {
            localStorage.clear();
            router.push('/');
          }}
        >
          退出登录
        </Button>
      </Space>
    </div>
  );
});

export default UserHeader;
