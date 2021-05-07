import { useState } from 'react';

import { BarsOutlined, UserSwitchOutlined } from '@ant-design/icons';

import { MenuItem, MenuItemGroup } from 'layouts/header/antd-router-menu';

/**
 * 根据用户不同权限生成对应导航
 * @param role 权限常量
 * @returns 用户权限role，对应导航menuData
 * @example return [menu, { setMenuFromRole }]
 */
const useRoleMenu = (role?: number) => {
  // FIXME: 这里可以学习一下, 策略模式改善switch case.
  const menuFromRole = (role?: number) => {
    switch (role) {
      default:
        // TODO: 列表需要作为参数
        return [
          new MenuItemGroup(
            'message',
            [
              new MenuItem('/message-list', 'message-list'),
              new MenuItem('/message-create', 'message-create'),
            ],
            <BarsOutlined />
          ),
          new MenuItem('/account-list', 'account-list', <UserSwitchOutlined />),
        ];
    }
  };

  const [menu, setMenu] = useState<(MenuItem | MenuItemGroup)[]>(
    menuFromRole(role)
  );

  const setMenuFromRole = (currentRole?: number) => {
    setMenu(menuFromRole(currentRole));
  };

  return [menu, { setMenuFromRole }] as const;
};

export default useRoleMenu;
