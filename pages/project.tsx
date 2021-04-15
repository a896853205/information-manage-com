/**
 * 角色：企业管理员
 * 项目对接管理
 */
import dynamic from 'next/dynamic';

import MyLayout from '../layouts/index';
const Compose = dynamic(() => import('../inner-page/project/compose'));

export default function Project() {
  console.log('project');
  return <Compose />;
}

Project.Layput = MyLayout;
