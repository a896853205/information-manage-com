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
      case 1: {
        // 高校管理员
        menuData = [
          new MenuItem('/home', '首页', <HomeOutlined />),
          new MenuItemGroup(
            '项目对接管理',
            [
              new MenuItem('/teacher-manager-project', '项目信息管理'),
              new MenuItem('/teacher-manager-apply-check', '指标审核管理'),
            ],
            <ApiOutlined />
          ),
          new MenuItemGroup(
            '教务信息管理',
            [
              new MenuItem('/teacher-manager-attendance', '考勤管理'),
              new MenuItem('/teacher-manager-weekly', '周志管理'),
            ],
            <ApiOutlined />
          ),
          new MenuItemGroup(
            '信息审批管理',
            [new MenuItem('/teacher-manager-user-check', '用户账号审核')],
            <ApiOutlined />
          ),
        ];
        break;
      }
      case 2: {
        // 高校导师
        menuData = [
          new MenuItem('/home', '首页', <HomeOutlined />),
          new MenuItemGroup(
            '项目对接管理',
            [
              new MenuItem('/teacher-project-apply', '项目导师对接'),
              new MenuItem('/teacher-project-member-manage', '项目成员管理'),
            ],
            <ApiOutlined />
          ),
          new MenuItemGroup(
            '教务信息管理',
            [
              new MenuItem('/teacher-weekly', '周志管理'),
              new MenuItem('/teacher-achievement', '科研成果管理'),
              new MenuItem('/teacher-apply-award', '奖励申请管理'),
              new MenuItem('/teacher-abantion', '终止培养管理'),
            ],
            <ApiOutlined />
          ),
          new MenuItemGroup(
            '信息审批管理',
            [new MenuItem('/teacher-user-check', '用户账号审核')],
            <ApiOutlined />
          ),
        ];
        break;
      }
      case 3: {
        // 企业管理员
        menuData = [
          new MenuItem('/home', '首页', <HomeOutlined />),
          new MenuItemGroup(
            '项目对接管理',
            [new MenuItem('/enterprise-manager-project', '项目信息管理')],
            <ApiOutlined />
          ),
          new MenuItemGroup(
            '教务信息管理',
            [
              new MenuItem('/enterprise-manager-attendance', '考勤管理'),
              new MenuItem('/enterprise-manager-weekly', '周志管理'),
              new MenuItem('/enterprise-manager-achievement', '科研成果管理'),
              new MenuItem('/enterprise-manager-award', '奖励申请管理'),
              new MenuItem('/enterprise-manager-abantion', '终止培养管理'),
            ],
            <ApiOutlined />
          ),
          new MenuItemGroup(
            '信息审批管理',
            [new MenuItem('/enterprise-manager-user-check', '用户账号审批')],
            <ApiOutlined />
          ),
        ];
        break;
      }
    }
  }
  return { role, menuData };
};

export default useRoleMenu;
