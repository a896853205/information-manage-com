import React, { memo, useEffect } from 'react';

import { Menu } from 'antd';
import { v1 as uuid } from 'uuid';
import Link from 'next/link';
import SubMenu from 'antd/lib/menu/SubMenu';

import useRoleMenu from 'layouts/hooks';

interface Props {
  role?: number;
}

const AntdRouterMenu: React.FC<Props> = memo(({ role }) => {
  const [menu, { setMenuFromRole }] = useRoleMenu();

  useEffect(() => {
    setMenuFromRole(role);
  }, [role]);

  return (
    <Menu mode="horizontal" theme="dark">
      {menu.map(menuDataItem => {
        if (menuDataItem instanceof MenuItem) {
          return (
            <Menu.Item key={uuid()} icon={menuDataItem.icon}>
              <Link href={menuDataItem.url}>
                <a>{menuDataItem.name}</a>
              </Link>
            </Menu.Item>
          );
        } else if (menuDataItem instanceof MenuItemGroup) {
          return (
            <SubMenu
              key={uuid()}
              title={menuDataItem.title}
              icon={menuDataItem.icon}
            >
              {menuDataItem.children.map(menuSubItem => {
                return (
                  <Menu.Item key={uuid()}>
                    <Link href={menuSubItem.url}>
                      <a>{menuSubItem.name}</a>
                    </Link>
                  </Menu.Item>
                );
              })}
            </SubMenu>
          );
        } else {
          return null;
        }
      })}
    </Menu>
  );
});

/**
 * @class 单独的导航栏
 */
export class MenuItem {
  url = '';
  name = '';
  icon?: React.ReactNode;

  constructor(url: string, name: string, icon?: React.ReactNode) {
    this.url = url;
    this.name = name;
    this.icon = icon;
  }
}

/**
 * @class 组导航栏带有标题
 */
export class MenuItemGroup {
  title: string = '';
  children: MenuItem[] = [];
  icon?: React.ReactNode;

  constructor(title: string, children: MenuItem[], icon?: React.ReactNode) {
    this.title = title;
    this.children = children.map(
      child => new MenuItem(child.url, child.name, child.icon)
    );
    this.icon = icon;
  }
}

export default AntdRouterMenu;
