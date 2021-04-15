/**
 * 角色：企业管理员
 * 系统首页
 */
import dynamic from 'next/dynamic';

import MyLayout from '../layouts/index';
const Compose = dynamic(() => import('../inner-page/project/compose'), {
  ssr: false,
}); // FIXME:暂时用project内容代替系统首页

export default function Home() {
  console.log('index-project');
  return <Compose />;
}

Home.Layout = MyLayout;
