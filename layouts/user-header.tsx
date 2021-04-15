import React from 'react';

import { Avatar, Button, Space } from 'antd';
import { UserOutlined, LogoutOutlined } from '@ant-design/icons';

const UserHeader = () => {
  return (
    <div style={{ width: '300px' }}>
      <Space>
        <Avatar
          style={{ backgroundColor: '#87d068' }}
          icon={<UserOutlined />}
        />
        <Button type="text" style={{ color: 'white', fontSize: '14px' }}>
          admin
        </Button>
        <Button
          type="text"
          icon={<LogoutOutlined />}
          style={{ color: 'white', fontSize: '14px' }}
        >
          退出登录
        </Button>
      </Space>
    </div>
  );
};

export default UserHeader;
