import { useState } from 'react';

import { MenuItem, MenuItemGroup } from 'layouts/Menu';

/**
 * 根据用户不同权限生成对应导航
 * @param role 权限常量
 * @returns 用户权限role，对应导航menuData
 * @example return [menu, { setMenuFromRole }]
 */
const useRoleMenu = (role?: number) => {
  // FIXME: 这里可以学习一下, 策略模式改善switch case. 其次备注可以看下jsdoc
  const menuFromRole = (role?: number) => {
    switch (role) {
      default:
        // TODO: 列表需要作为参数
        return [new MenuItem('/home', '首页')];
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
