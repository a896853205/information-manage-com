import { useRouter } from 'next/router';

import { ApiOutlined, HomeOutlined } from '@ant-design/icons';

import { MenuItem, MenuItemGroup } from 'layouts/Menu';
const useRoleMenu = () => {
  const role = Number(localStorage.getItem('Role'));
  let menuData: (MenuItem | MenuItemGroup)[] = [new MenuItem('/', '首页')];
  if (!role) {
    const router = useRouter();
    router.push('/');
  } else {
    switch (role) {
      case 0: {
        menuData = [
          new MenuItem('/home', '首页'),
          new MenuItemGroup('项目对接管理', [
            new MenuItem('/teacher-manager-project', '项目信息管理'),
            new MenuItem('/teacher-manager-apply-check', '指标审核管理'),
          ]),
          new MenuItemGroup('教务信息管理', [
            new MenuItem('/teacher-manager-attendance', '考勤管理'),
            new MenuItem('/teacher-manager-weekly', '周志管理'),
          ]),
          new MenuItemGroup('信息审批管理', [
            new MenuItem('/teacher-manager-attendance', '用户账号审核'),
          ]),
        ];
        break;
      }
      case 1: {
        menuData = [
          new MenuItem('/home', '首页'),
          new MenuItemGroup('项目对接管理', [
            new MenuItem('/teacher-project', '项目信息管理'),
            new MenuItem('/teacher-apply-check', '指标审核管理'),
          ]),
          new MenuItemGroup('教务信息管理', [
            new MenuItem('/teacher-attendance', '考勤管理'),
            new MenuItem('/teacher-weekly', '周志管理'),
          ]),
        ];
        break;
      }
      case 2: {
        menuData = [
          new MenuItem('/home', '首页'),
          new MenuItemGroup('项目对接管理', [
            new MenuItem('/enterprise-manager-project', '项目信息管理'),
            new MenuItem('/enterprise-manager-apply-check', '指标审核管理'),
          ]),
          new MenuItemGroup('信息审批管理', [
            new MenuItem('/enterprise-manager-attendance', '用户账号审核'),
          ]),
        ];
        break;
      }
    }
  }
  return { role, menuData };
};

export default useRoleMenu;
