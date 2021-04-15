/**
 * 角色：企业管理员
 * 项目对接管理
 */
import dynamic from 'next/dynamic';

import MyLayout from 'layouts/index';
import PageLoading from 'components/page-loading';

const Compose = dynamic(() => import('inner-page/project/compose'), {
  ssr: false,
  loading: PageLoading,
});

export default function Project() {
  console.log('project');
  return <Compose />;
}

Project.Layout = MyLayout;
