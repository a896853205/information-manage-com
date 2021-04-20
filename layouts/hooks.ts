import { ApiOutlined, HomeOutlined } from '@ant-design/icons';
import { MenuItem, MenuItemGroup } from 'layouts/Menu';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Layout } from 'antd';
import AntdRouterMenu from 'layouts/Antd-router-menu';

export const useRoleMenu = () => {
  const role = localStorage.getItem('ROLE');
  let munuData: (MenuItem | MenuItemGroup)[];
 /* switch (Number(role)) {
    case 0:
      munuData = [new MenuItem('/login', '首页', <HomeOutlined/>)];
  }  */
};
