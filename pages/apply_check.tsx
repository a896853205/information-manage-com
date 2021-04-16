/**
 * 角色：高校管理员
 * 项目对接管理->指标审核管理
 */
import dynamic from 'next/dynamic';

import MyLayout from 'layouts/index';
import PageLoading from 'components/page-loading';

const Compose = dynamic(() => import('inner-page/project/compose'), {
  ssr: false,
  loading: PageLoading,
});

export default function Project() {
  return <Compose />;
}

Project.Layout = MyLayout;
