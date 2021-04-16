/**
 * 角色：高校管理员
 * 系统首页（以后更换，现用项目信息管理页面代替）
 */
import dynamic from 'next/dynamic';

import MyLayout from 'layouts/index';
import PageLoading from 'components/page-loading';
const Compose = dynamic(() => import('inner-page/project/compose'), {
  ssr: false,
  loading: PageLoading,
}); // FIXME:暂时用project内容代替系统首页

export default function Home() {
  console.log('index-project');
  return <Compose />;
}

Home.Layout = MyLayout;
