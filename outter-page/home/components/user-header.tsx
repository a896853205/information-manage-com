import React from 'react';

import { Avatar, Button, Space } from 'antd';
import { UserOutlined, LogoutOutlined } from '@ant-design/icons';

export default () => {
  //const history = useHistory();
  // 退出登录
  const handleLogout = () => {
    // history.push('/');
  };
  return (
    <div style={{ width: '300px' }}>
      <Space>
        <Avatar
          style={{ backgroundColor: '#87d068' }}
          icon={<UserOutlined />}
        />
        <Button
          type="text"
          style={{ color: 'white', fontSize: '14px' }}
          onClick={() => {
            // history.push('/home/userList');
          }}
        >
          admin
        </Button>
        <Button
          type="text"
          icon={<LogoutOutlined />}
          style={{ color: 'white', fontSize: '14px' }}
          onClick={handleLogout}
        >
          退出登录
        </Button>
      </Space>
    </div>
  );
};
