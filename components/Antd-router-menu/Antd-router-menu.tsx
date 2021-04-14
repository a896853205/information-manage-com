import React, { memo } from 'react';

import { Menu } from 'antd';
import { v1 as uuid } from 'uuid';
import Link from 'next/link';
import SubMenu from 'antd/lib/menu/SubMenu';

import { MenuItem, MenuItemGroup } from '../Menu';
export interface Props {
  menuData: (MenuItem | MenuItemGroup)[];
}

export default memo((props: Props) => {
  const { menuData } = props;

  return (
    <Menu theme="light" mode="inline">
      {menuData.map((menuDataItem) => {
        if (menuDataItem instanceof MenuItem) {
          return (
            <Menu.Item key={uuid()} icon={menuDataItem.icon}>
              <Link href={menuDataItem.url}>
                <span>{menuDataItem.name}</span>
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
              {menuDataItem.children.map((menuSubItem) => {
                return (
                  <Menu.Item key={uuid()}>
                    <Link href={menuSubItem.url}>
                      <span>{menuSubItem.name}</span>
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
